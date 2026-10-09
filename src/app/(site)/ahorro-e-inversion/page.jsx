import s from "@/components/pages/pages.module.css";
import Images from "@/components/pages/images.jsx";
import BoxTitle from "@/components/pages/boxTitle.jsx";

export default function Page() {
    return (
        <section className="first_section">
            <div className={`cmedia ${s.flex}`}>
                <Images image="image_ahorro.webp" />
                <div className={s.container}>
                    <BoxTitle
                        title="Plan de Ahorro e Inversión"
                        subtitle="Ahorro e inversiones"
                        slogan="Protege tu patrimonio e invierte con confianza."
                        quoteHref="/cotizar/ahorro"
                    />
                    <div className={s.box_text}>
                        <h3>Haz crecer tus ahorros</h3>
                        <p>
                            Tus ahorros son el resultado de un gran esfuerzo.
                            Por eso es importante protegerlos y hacerlos crecer
                            con instrumentos de ahorro e inversión que te ayuden
                            a alcanzar tus proyectos y metas.
                        </p>
                    </div>
                    <div className={s.box_text}>
                        <h3>Una estrategia para tus objetivos</h3>
                        <p>
                            Conoce alternativas que buscan proteger tu dinero
                            contra la inflación y ofrecer rendimientos, con el
                            respaldo económico de Seguros Monterrey New York
                            Life, una compañía con calificaciones destacadas a
                            nivel mundial.
                        </p>
                    </div>
                    <div className={s.box_list}>
                        <h3>Beneficios</h3>
                        <ul>
                            <li>
                                Alternativas de ahorro e inversión orientadas a
                                tus proyectos y metas.
                            </li>
                            <li>
                                Opciones que buscan proteger tus ahorros contra
                                la inflación.
                            </li>
                            <li>
                                Posibilidad de obtener rendimientos de acuerdo
                                con el instrumento elegido.
                            </li>
                            <li>
                                Respaldo económico de Seguros Monterrey New York
                                Life.
                            </li>
                        </ul>
                    </div>
                    <div className={s.box_text_impact}>
                        <p>
                            Cada meta merece una estrategia adecuada.
                            <span>
                                {" "}
                                Recibe asesoría para conocer las alternativas de
                                ahorro e inversión que mejor se ajusten a tus
                                objetivos.
                            </span>
                        </p>
                    </div>
                    <div className={s.container_buttons}>
                        <button className="btn-type-top-white-bg btn-padding-type-2">
                            Agendar asesoría
                        </button>
                        <a href="/cotizar/ahorro" className="btn-type-3-red">
                            Cotizar Ahorro e Inversión
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
