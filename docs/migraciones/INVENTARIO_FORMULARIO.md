# Inventario del formulario de Gastos Médicos Mayores

## 1. Alcance del análisis

Este documento registra el inventario funcional y técnico del formulario original de Gastos Médicos Mayores, con base en los archivos de referencia del repositorio fuente:

- `src/views/gastos_medicos.hbs`
- `src/public/js/form_sgmm.js`
- `src/public/css/style.css`

No se modifican archivos del repositorio origen. La intención de esta etapa es documentar el comportamiento actual para preparar la migración a React sin tocar la implementación legacy.

## 2. Resumen ejecutivo

El formulario está implementado como un wizard multipart de 6 pantallas dentro de una sola estructura HTML y una lógica JavaScript vanilla. Las principales capacidades detectadas son:

- Navegación por pasos con desplazamiento horizontal.
- Validación por campo, basada en expresiones regulares y mensajes de error visibles.
- Validación de selects y checkbox de consentimiento.
- Persistencia temporal de datos en `localStorage` bajo la clave `person`.
- Envío final mediante `form.submit()`.
- Modal de aviso de privacidad con apertura/cierre dinámico.
- CSS global del proyecto con un bloque específico para el formulario.

### Comportamientos confirmados por el código

- La estructura del formulario es de 6 pasos.
- Hay validación de texto, fecha, selects y checkbox.
- La navegación se controla con `marginLeft` en un contenedor `.move-page`.
- Los datos se guardan en `localStorage` antes del submit.
- El aviso de privacidad se muestra/oculta mediante `display: block/none`.

### Comportamientos que requieren verificación

- El uso de variables globales como `group_aviso`, `prev_pag_1` y otros IDs del DOM depende del comportamiento implícito del navegador; debe confirmarse en la ejecución real.
- El true/false de algunas validaciones está ligado a la lógica de `campos`, pero no se observa un mecanismo de bloqueo general del submit hasta que el formulario sea validado en la UI real.
- El valor real de los mensajes de error y facilidad de uso debe validarse con un usuario final, porque el código solo muestra mensajes y no una experiencia de accesibilidad más avanzada.

## 3. Estilos CSS identificados como pertenecientes al formulario

El archivo `style.css` contiene estilos del proyecto completo, pero los pertenecientes al formulario se concentran en los selectores siguientes:

| Selector CSS | Propósito | Confirmado por código |
|---|---|---|
| `.container-form` | Contenedor principal del formulario. | Sí |
| `.container-form .wrapper-form` | Contenedor con overflow para el wizard. | Sí |
| `form.form-global` | Define la anchura total del flujo horizontal. | Sí |
| `form.form-global .page` | Cada paso del formulario. | Sí |
| `form.form-global .form-group` | Agrupa un campo y su validación visual. | Sí |
| `form.form-global .form-label` | Etiquetas del formulario. | Sí |
| `form.form-global .form-input` | Estilo base para inputs y selects. | Sí |
| `form.form-global .form-validacion-estado` | estado visual de validación. | Sí |
| `form.form-global .btn-flex-end` / `.btn-flex-bet` | Posicionamiento de botones de navegación. | Sí |
| `.btn-type-form` | Botones de continuar / atrás. | Sí |
| `.content-aviso` | Modal de aviso de privacidad. | Sí |
| `form.form-global .form-input-error` | Mensajes de error. | Sí |
| `form.form-global .active` | Estado visible del error. | Sí |
| `form.form-global .checkbox` | Checkbox de aceptación del aviso. | Sí |
| `form.form-global .btn-submit` | Botón de envío final. | Sí |

### Estilos globales del proyecto que influyen en la apariencia del formulario

Aunque no son exclusivos del formulario, los siguientes selectores afectan su presentación:

| Selector | Uso general | Relación con el formulario |
|---|---|---|
| `:root` | Tokens de color y tipografías. | Define `--color-addons-carmesi` y otros colores usados por los pasos y botones. |
| `body`, `section`, `main`, `.container-media` | Layout general. | Estructuran el bloque del formulario. |
| `button` | Reset base para interacción. | Afecta a los botones del wizard. |
| `a.btn-type-1`, `a.btn-type-1-red` | Botones del sitio. | Se reutilizan o complementan el estilo del formulario. |

## 4. Inventario funcional detallado

### FORM-001 — Navegación por pasos del wizard

- Descripción del comportamiento: El formulario se presenta como un conjunto de 6 páginas que se desplazan horizontalmente. El avance/retroceso cambia `movePage.style.marginLeft` para mostrar la página correcta.
- Archivo y función de origen:
  - HTML: `src/views/gastos_medicos.hbs`
  - JS: listeners `next_pag_2`, `next_pag_3`, `next_pag_4`, `next_pag_5`, `next_pag_6` y `prev_pag_*` en `src/public/js/form_sgmm.js`
  - CSS: `form.form-global .page` y `form.form-global .wrapper-form` en `src/public/css/style.css`
- Campos y eventos involucrados: Botones de siguiente/atrás, contenedor `.move-page`, páginas `.page`, inputs y selects del paso actual.
- Validaciones y reglas de negocio:
  - El paso solo avanza si el paso actual cumple con su validación.
  - Página 1 exige `nombre`, `paterno` y `materno`.
  - Página 2 exige `fechanac`.
  - Página 3 exige `genero`.
  - Página 4 exige `fuma`.
  - Página 5 exige `estado`.
- Dependencias: `validarFormularioPage`, `validarSelectsPage`, `campos`.
- Estrategia propuesta en React:
  - Usar un estado `currentStep` junto con un componente `Wizard` o `MultiStepForm`.
  - Validar el paso antes de avanzar y guardar los errores en estado local.
- Estado de migración: Pendiente.
- Confirmado por código: Sí.
- Requiere verificación: Sí, porque la UX de navegación exacta debe confirmarse visualmente.

### FORM-002 — Validación de nombres y apellidos

- Descripción del comportamiento: `nombre`, `paterno` y `materno` se validan con una expresión regular que acepta letras y espacios, incluyendo acentos.
- Archivo y función de origen:
  - JS: `expresiones.nombre`, `validarFormulario`, `validarFormularioPage`, `validarCampo`
  - HTML: campos `nombre`, `paterno`, `materno`
- Campos y eventos involucrados: `input[type="text"]` con `name="nombre"`, `name="paterno"`, `name="materno"`; eventos `blur`, `focus`.
- Validaciones y reglas de negocio:
  - Patrón: `/^[a-zA-ZÀ-ÿ\s]{3,25}$/`
  - Si el campo está vacío, muestra `Campo requerido`.
  - Si el valor no cumple la expresión, muestra `Debe contener solo letras`.
- Dependencias: `campos`, `document.getElementById('group-${campo}')`, `.form-input-error`.
- Estrategia propuesta en React:
  - Crear un hook `useFieldValidation` o un esquema de validación con `zod` / `yup` para cada nombre.
  - Usar un `TextInput` con estado de error por campo.
- Estado de migración: Pendiente.
- Confirmado por código: Sí.
- Requiere verificación: No, el comportamiento está claramente implementado.

### FORM-003 — Validación de fecha de nacimiento

- Descripción del comportamiento: El formulario solicita la fecha de nacimiento y la valida con un patrón que acepta dígitos, guion y coma (situación inusual para fechas).
- Archivo y función de origen:
  - JS: `expresiones.fechanac`, `validarFormulario`, `validarFormularioPage`, `validarCampo`
  - HTML: `input type="date" name="fechanac"`
- Campos y eventos involucrados: input `fechanac`; evento `blur`/`focus`.
- Validaciones y reglas de negocio:
  - Patrón: `/^[0-9,-]+$/`
  - El valor debe volver a la validación de `validarCampo` para pasar a `campos.fechanac = true`.
- Dependencias: `validarCampo`, `campos.fechanac`, `group-fechanac`.
- Estrategia propuesta en React:
  - Mantener el campo como `date` nativo y validar con `Date`/`zod`/`react-hook-form`.
  - Añadir reglas de negocio como edad mínima o máxima si latera se decide.
- Estado de migración: Pendiente.
- Confirmado por código: Sí.
- Requiere verificación: Sí, porque la expresión regular actual es muy permisiva y no refleja una validación real de fecha válida.

### FORM-004 — Validación de género, fumador y estado

- Descripción del comportamiento: Los campos `genero`, `fuma` y `estado` están implementados como `<select>` con una opción placeholder `value="empty"` y validación específica.
- Archivo y función de origen:
  - HTML: secciones de páginas 3, 4 y 5 de `gastos_medicos.hbs`
  - JS: `validarSelects`, `validarSelectsPage`, `selects.forEach(...)`
- Campos y eventos involucrados: `select.form-input` con `name="genero"`, `name="fuma"`, `name="estado"`; eventos `focusout` y `change`.
- Validaciones y reglas de negocio:
  - Si el valor es `empty`, se activa el mensaje `Seleccione una opción`.
  - En caso contrario, se remueve el error y se marca la propiedad en `campos`.
- Dependencias: `campos.genero`, `campos.fuma`, `campos.estado`, `#group-${campo} .form-input-error`.
- Estrategia propuesta en React:
  - Usar `Select` controlado por `react-hook-form` o `useState`.
  - Mapear cada valor a un campo del modelo de datos del formulario.
- Estado de migración: Pendiente.
- Confirmado por código: Sí.
- Requiere verificación: No, el comportamiento está claramente definido.

### FORM-005 — Validación de correo electrónico y teléfono

- Descripción del comportamiento: El formulario valida correo y teléfono en la última pantalla, justo antes del envío.
- Archivo y función de origen:
  - JS: `expresiones.correo`, `expresiones.telefono`, `validarFormulario`, `validarFormularioPage`, `validarCampo`, `btnSubmit`.
  - HTML: campos `correo` y `telefono`.
- Campos y eventos involucrados: `input[type="email"] name="correo"`, `input[type="text"] name="telefono"`; eventos `blur`, `focus`, `click` en submit.
- Validaciones y reglas de negocio:
  - Correo: `/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/`
  - Teléfono: `/^\d{10}$/`
  - El submit final solo se permite si `campos.telefono && campos.correo && checkbox_aviso.checked`.
- Dependencias: `btnSubmit`, `checkbox_aviso`, `group_aviso`, `campos`.
- Estrategia propuesta en React:
  - Validar correo y teléfono con schema del formulario y mostrar mensajes específicos por campo.
  - Deshabilitar el botón de submit si el formulario aún no es válido.
- Estado de migración: Pendiente.
- Confirmado por código: Sí.
- Requiere verificación: Sí, porque el checkbox depende de una variable global y la regla final del submit se combina con esa lógica.

### FORM-006 — Aceptación del aviso de privacidad y validación del checkbox

- Descripción del comportamiento: Existe un checkbox con texto de aceptación del aviso de privacidad; si no se marca, se muestra el error visible y se bloquea el submit.
- Archivo y función de origen:
  - HTML: `group_aviso`, `checkbox_aviso`, `btn_aviso` y `btn_cerrar` en la página 6.
  - JS: `checkbox_aviso.addEventListener(...)`, `btnSubmit` y `btn_aviso`/`btn_cerrar`.
- Campos y eventos involucrados: `#checkbox_aviso`, `#btn_aviso`, `#btn_cerrar`, `group_aviso`.
- Validaciones y reglas de negocio:
  - Si el checkbox está marcado, elimina la clase `active` del error.
  - Si está desmarcado, agrega `active` y se bloquea el envío.
  - El submit final envía solo si `checkbox_aviso.checked` es `true`.
- Dependencias: `contentAviso`, `group_aviso`, `btnSubmit`.
- Estrategia propuesta en React:
  - Convertir en un `Checkbox` del formulario con `checked` y `onChange`, y un modal de confirmación controlado por estado.
- Estado de migración: Pendiente.
- Confirmado por código: Sí.
- Requiere verificación: Sí, porque el código usa variables globales del DOM (`group_aviso`) en lugar de referencias locales explícitas.

### FORM-007 — Modal de aviso de privacidad

- Descripción del comportamiento: Al presionar `btn_aviso`, se muestra un panel overlay con el contenido del aviso de privacidad; `btn_cerrar` lo oculta.
- Archivo y función de origen:
  - HTML: `div.content-aviso` con texto de privacidad.
  - JS: `const contentAviso = document.querySelector(".content-aviso")`; `btn_aviso.addEventListener` y `btn_cerrar.addEventListener`.
  - CSS: `.container-form .content-aviso`, `.container-form .content-aviso #btn_cerrar`.
- Campos y eventos involucrados: `#btn_aviso`, `#btn_cerrar`, `.content-aviso`.
- Validaciones y reglas de negocio:
  - Muestra el contenido con `style.display = "block"`.
  - Oculta el contenido con `style.display = "none"`.
- Dependencias: `btnSubmit` y el checkbox de aceptación.
- Estrategia propuesta en React:
  - Crear un `Modal` reusable y controlarlo con `isPrivacyModalOpen`.
  - Mantener el contenido del aviso en un componente estático o JSON estructurado.
- Estado de migración: Pendiente.
- Confirmado por código: Sí.
- Requiere verificación: No, el comportamiento es claro, aunque puede requerir revisión UX para asegurar accesibilidad.

### FORM-008 — Persistencia en localStorage

- Descripción del comportamiento: Al confirmar el envío, el script arma un objeto `person` con todos los inputs y selects y lo guarda en `localStorage` bajo la clave `person`.
- Archivo y función de origen:
  - JS: `createObjectPerson()`, `printLocalStore()`, `form.submit()` dentro de `btnSubmit`.
- Campos y eventos involucrados: Todos los campos del formulario, especialmente `input.form-input` y `select.form-input`.
- Validaciones y reglas de negocio:
  - Se construye un objeto con cada `name` y su valor actual.
  - Se obtiene un arreglo existente: `JSON.parse(localStorage.getItem("person")) || []`.
  - Se agrega el objeto actual y se vuelve a guardar.
- Dependencias: validaciones previas del formulario y `checkbox_aviso`.
- Estrategia propuesta en React:
  - Mantener el estado del formulario como un objeto central y guardar solo en el backend o en persistencia de sesión, según la política de negocio.
  - Si se necesita compatibilidad con la legacy, encapsular la migración en un adaptador de `localStorage`.
- Estado de migración: Pendiente.
- Confirmado por código: Sí.
- Requiere verificación: Sí, porque el almacenamiento actual podría no ser el mecanismo final deseado y debe revisar la política de datos.

### FORM-009 — Envío final y armado del formulario

- Descripción del comportamiento: El botón final envía el formulario después de validar correo, teléfono y aceptación del aviso. 
- Archivo y función de origen:
  - HTML: botón `type="submit" class="btn-submit"`
  - JS: `const btnSubmit = form.querySelector(".btn-submit")` y su listener.
- Campos y eventos involucrados: `btn-submit`, `form-global`, `checkbox_aviso`, inputs del paso 6.
- Validaciones y reglas de negocio:
  - Antes del envío se validan todos los inputs del último paso.
  - Si el checkbox está sin aceptar, se añade mensaje de error.
  - Si `campos.telefono && campos.correo && checkbox_aviso.checked`, se guarda en localStorage y se ejecuta `form.submit()`.
- Dependencias: `validarFormularioPage`, `campos`, `printLocalStore`, `form.submit()`.
- Estrategia propuesta en React:
  - Implementar un `handleSubmit` con `react-hook-form` y enviar los datos al backend o servicio equivalente.
  - Evitar la lógica de mutación de `DOM` y centralizar en `submitHandler`.
- Estado de migración: Pendiente.
- Confirmado por código: Sí.
- Requiere verificación: Sí, principalmente para confirmar si la salida final debe ser un POST tradicional o un flujo API.

### FORM-010 — Campos ocultos de metadatos del producto

- Descripción del comportamiento: El formulario incluye campos ocultos que sirven para identificar el producto y la relación del solicitante (`producto`, `parentesco`, `nombreProducto`).
- Archivo y función de origen:
  - HTML: `input type="text"` ocultos dentro de la primera página.
- Campos y eventos involucrados: `producto`, `parentesco`, `nombreProducto`.
- Validaciones y reglas de negocio:
  - Se envían como datos fijos del cotizador.
  - Valores observados: `Seguro de Gastos Médicos`, `Solicitante`, `Alfa Medical`.
- Dependencias: Se integran al submit final junto con el resto del formulario.
- Estrategia propuesta en React:
  - Guardarlos como valores por defecto del modelo del formulario y no como inputs visibles.
- Estado de migración: Pendiente.
- Confirmado por código: Sí.
- Requiere verificación: No, la intención queda explícita en el código.

## 5. Matriz de trazabilidad de migración

| ID | Funcionalidad original | Archivo origen | Componente React propuesto | Estado de migración | Evidencia |
|---|---|---|---|---|---|
| FORM-001 | Navegación del wizard de 6 pasos | `gastos_medicos.hbs`, `form_sgmm.js` | `GastosMedicosWizard` / `MultiStepForm` | Pendiente | Confirmado en código |
| FORM-002 | Validación de nombres | `form_sgmm.js` | `TextField` con validación | Pendiente | Confirmado |
| FORM-003 | Validación de nacimiento | `form_sgmm.js` | `DateField` con schema | Pendiente | Confirmado, pero requiere revisión de regla |
| FORM-004 | Validación de selectores | `form_sgmm.js` | `SelectField` | Pendiente | Confirmado |
| FORM-005 | Validación correo/telefono | `form_sgmm.js` | `EmailField` / `PhoneField` | Pendiente | Confirmado |
| FORM-006 | Checkbox y aceptación de privacidad | `form_sgmm.js` | `PrivacyConsentCheckbox` | Pendiente | Confirmado, requiere verificación |
| FORM-007 | Modal de aviso de privacidad | `gastos_medicos.hbs`, `style.css`, `form_sgmm.js` | `PrivacyModal` | Pendiente | Confirmado |
| FORM-008 | Persistencia en localStorage | `form_sgmm.js` | `useFormPersistence`/adaptador | Pendiente | Confirmado |
| FORM-009 | Envío final del formulario | `form_sgmm.js` | `handleSubmit` del form | Pendiente | Confirmado |
| FORM-010 | Metadatos ocultos | `gastos_medicos.hbs` | `FormMetadata` / defaults | Pendiente | Confirmado |

## 6. Hallazgos técnicos relevantes para la migración

1. La lógica de validación está fuertemente acoplada al DOM.
   - Se usa `document.getElementById(...)`, `querySelector(...)`, `closest(...)` y `marginLeft` para manipular la vista.
   - React requiere mover este comportamiento a estado y renderizado declarativo.

2. Hay dependencia de variables globales del navegador.
   - `group_aviso`, `prev_pag_1` y otros IDs se usan sin declaración explícita.
   - Esto puede ser funcional en un navegador moderno, pero es frágil y no recomendable para una migración a React.

3. Las validaciones presentan combinación de reglas y UX.
   - Las expresiones regulares están en el archivo JS, pero no hay un esquema centralizado ni validación de negocio más rica.

4. El CSS es parcialmente global y parcialmente específico.
   - El estilo del formulario está en el archivo global `style.css`, por lo que la migración debe aislar la presentación en componentes y mantener el diseño original.

5. La persistencia local hace que el formulario no sea un flujo puramente síncrono.
   - Si el backend final exige una estructura distinta, esta parte debe revisarse con el equipo de negocio antes de codificar la migración.

## 7. Complejidad estimada por funcionalidad

| Nivel de complejidad | Funcionalidades principales |
|---|---|
| Alta | FORM-001, FORM-006, FORM-009, FORM-008 |
| Media | FORM-004, FORM-005, FORM-007 |
| Baja | FORM-002, FORM-003, FORM-010 |

### Riesgos principales de migración

- Dependencia exclusiva del DOM y variables globales.
- Validación de comportamiento por reglas muy básicas.
- Estructura del layout basada en porcentaje y desplazamiento horizontal manual.
- Persistencia y envío final que requieren confirmación del backend y de las políticas de negocio.

## 8. Conclusión

El formulario de Gastos Médicos Mayores está bien definido en su implementación legacy y ofrece una base sólida para su migración a React. La mayor parte del comportamiento está confirmado en código, pero la lógica de DOM imperativo y ciertas suposiciones implícitas deben transformarse hacia un modelo controlado por estado y validación declarativa.

La recomendación principal para la etapa de migración es reutilizar la lógica de negocio del formulario, pero reescribir la estructura de navegación, validación y modal en un sistema centralizado de React con componentes específicos y un modelo de datos unificado.
