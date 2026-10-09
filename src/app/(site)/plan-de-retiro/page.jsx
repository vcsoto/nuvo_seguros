import s from "@/components/pages/pages.module.css";
import Images from "@/components/pages/images.jsx";
import BoxTitle from "@/components/pages/boxTitle.jsx";

export default function Page() {
    return (
        <section className="first_section">
            <div className={`cmedia ${s.flex}`}>
                <Images image="happy-family-silhouette-sunset.webp" />
                <div className={s.container}>
                    <BoxTitle
                        title="Plan Personal de Retiro"
                        subtitle="Imagina Ser"
                        slogan="Vive tu retiro al máximo: comienza tu ahorro."
                        quoteHref="/cotizar/retiro"
                    />
                    <div className={s.box_text}>
                        <h3>¿Qué es un Plan Personal de Retiro?</h3>
                        <p>
                            Es una estrategia de ahorro para el retiro que te
                            ayuda a construir los recursos que necesitarás para
                            disfrutar de tus años de retiro con mayor
                            tranquilidad.
                        </p>
                    </div>
                    <div className={s.box_text}>
                        <h3>Planea hoy el retiro que quieres vivir</h3>
                        <p>
                            Puedes elegir el tratamiento fiscal que quieres dar
                            a tu ahorro: realizar aportaciones deducibles de
                            impuestos conforme a los artículos 151 y 185 de la
                            Ley del Impuesto sobre la Renta, o aportaciones no
                            deducibles.
                        </p>
                    </div>
                    <div className={s.box_list}>
                        <h3>Beneficios</h3>
                        <ul>
                            <li>Construye un ahorro destinado a tu retiro.</li>
                            <li>
                                Elige entre aportaciones deducibles o no
                                deducibles, de acuerdo con el tratamiento fiscal
                                aplicable.
                            </li>
                            <li>
                                Planea tus aportaciones con asesoría
                                personalizada.
                            </li>
                        </ul>
                    </div>
                    <div className={s.box_text_impact}>
                        <p>
                            Tu retiro también forma parte de tus proyectos.
                            <span>
                                {" "}
                                Empieza a planearlo hoy y construye un futuro
                                financiero de acuerdo con tus objetivos.
                            </span>
                        </p>
                    </div>
                    <div className={s.container_buttons}>
                        <button className="btn-type-top-white-bg btn-padding-type-2">
                            Agendar asesoría
                        </button>
                        <a href="/cotizar/retiro" className="btn-type-3-red">
                            Cotizar Plan de Retiro
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
