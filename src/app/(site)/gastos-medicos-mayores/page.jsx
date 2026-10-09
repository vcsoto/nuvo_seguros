import s from "@/components/pages/pages.module.css";
import Images from "@/components/pages/images.jsx";
import BoxTitle from "@/components/pages/boxTitle.jsx";

export default function Page() {
    return (
        <>
            <section className="first_section">
                <div className={`cmedia ${s.flex}`}>
                    <Images image="sggm_page.webp" />
                    <div className={s.container}>
                        <BoxTitle
                            title="Seguro de Gastos Médicos Mayores"
                            subtitle="Alfa Medical"
                            slogan="¡tu solución en Gastos Médicos Mayores!"
                        />
                        <div className={s.box_text}>
                            <h3>
                                ¿Que es un Seguro de Gastos Médicos Mayores?
                            </h3>
                            <p>
                                Es un Seguro Médico que te protege
                                económicamente de los altos gastos hospitalarios
                                y médicos ocasionados por algún accidente o
                                enfermedad costosa. Al contar con la red médica
                                más amplia tendrás la seguridad de que tú y tu
                                familia tendrán acceso a la mejor atención
                                médica en el momento necesario.
                            </p>
                        </div>
                        <div className={s.box_text}>
                            <h3>
                                ¿Porqué necesitas un Seguro de Gastos Médicos
                                Mayores?
                            </h3>
                            <p>
                                Alfa Medical es mucho más que un seguro de
                                Gastos Médicos Mayores. Es el respaldo económico
                                por una de las mejores compañías a nivel
                                internacional que protegerá tu salud y la de tu
                                familia, ofeciéndote opciones flexibles y
                                completas para que puedas enfrentar cualquier
                                situación médica con confianza.
                            </p>
                        </div>
                        <div className={s.box_list}>
                            <h3>Beneficios</h3>
                            <ul>
                                <li>
                                    Coberturas completas y acceso abierto a los
                                    mejores hospitales a nivel nacional
                                </li>
                                <li>
                                    Perfecto equilibrio entre costo y gama de
                                    hospitales
                                </li>
                                <li>Atención médica de calidad</li>
                                <li>
                                    Coberturas adicionales para emergencias en
                                    el extranjero
                                </li>
                            </ul>
                        </div>
                        <div className={s.box_text_impact}>
                            <p>
                                Contratar un seguro médico no es cualquier cosa,
                                necesita estar hecho a tu medida por un asesor
                                profesional.&nbsp;
                                <span>
                                    Recuerda, tu salud es un tesoso invaluable,
                                    ¡Actúa hoy mismo y agenda una asesoría!
                                </span>
                            </p>
                        </div>
                        <div className={s.container_buttons}>
                            <button className="btn-type-top-white-bg btn-padding-type-2">
                                Agendar asesoria
                            </button>
                            <a href="" className="btn-type-3-red">
                                Cotizar Seguro
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
