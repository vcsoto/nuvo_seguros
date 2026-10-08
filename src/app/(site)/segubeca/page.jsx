import s from "@/components/pages/pages.module.css";
import Images from "@/components/pages/images.jsx";
import BoxTitle from "@/components/pages/boxTitle.jsx";

export default function Page() {
    return (
        <section className="first_section">
            <div className={`cmedia ${s.flex}`}>
                <Images image="image_segubeca.jpg" />
                <div className={s.container}>
                    <BoxTitle
                        title="SeguBeca"
                        subtitle="Ahorro Educativo"
                        slogan="Asegura el futuro educativo de tus hijos."
                        quoteHref="/cotizar/educacion"
                    />
                    <div className={s.box_text}>
                        <h3>¿Qué es SeguBeca?</h3>
                        <p>
                            Es un plan de ahorro que ayuda a asegurar los
                            recursos para la educación universitaria de tus
                            hijos. Además, protege el ahorro contra la inflación
                            y contempla protección si llegaras a faltar.
                        </p>
                    </div>
                    <div className={s.box_text}>
                        <h3>¿Por qué contratar SeguBeca?</h3>
                        <p>
                            La formación académica es uno de los legados más
                            importantes que puedes dejarles a tus hijos. Una
                            buena planeación ayuda a prepararse ante situaciones
                            que podrían afectar ese proyecto educativo.
                        </p>
                    </div>
                    <div className={s.box_list}>
                        <h3>Situaciones que pueden afectar el ahorro</h3>
                        <ul>
                            <li>
                                Fallecimiento o invalidez total y permanente.
                            </li>
                            <li>Desempleo del proveedor de recursos.</li>
                            <li>
                                Inflación y aumento de los costos educativos.
                            </li>
                            <li>
                                Mala planeación o pérdida del valor de los
                                ahorros frente a la inflación.
                            </li>
                        </ul>
                    </div>
                    <div className={s.box_list}>
                        <h3>Con SeguBeca tendrás</h3>
                        <ul>
                            <li>
                                Suma asegurada por fallecimiento del padre o
                                tutor.
                            </li>
                            <li>
                                Protección por invalidez total y permanente del
                                proveedor de recursos.
                            </li>
                            <li>Protección contra desempleo.</li>
                            <li>
                                Opción de ahorro en UDIS para proteger el ahorro
                                contra la inflación.
                            </li>
                            <li>
                                Asesoría personalizada enfocada en el objetivo
                                educativo de tu familia.
                            </li>
                        </ul>
                    </div>
                    <div className={s.box_text_impact}>
                        <p>
                            El futuro educativo de tus hijos merece una
                            planeación especializada.
                            <span>
                                {" "}
                                Conoce SeguBeca y prepárate para los imprevistos
                                que podrían afectar tu proyecto.
                            </span>
                        </p>
                    </div>
                    <div className={s.container_buttons}>
                        <button className="btn-type-top-white-bg btn-padding-type-2">
                            Agendar asesoría
                        </button>
                        <a href="/cotizar/educacion" className="btn-type-3-red">
                            Cotizar SeguBeca
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
