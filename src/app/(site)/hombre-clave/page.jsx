import s from "@/components/pages/pages.module.css";
import Images from "@/components/pages/images.jsx";
import BoxTitle from "@/components/pages/boxTitle.jsx";

export default function Page() {
    return (
        <section className="first_section">
            <div className={`cmedia ${s.flex}`}>
                <Images image="primer-plano-ejecutivos-sentados-mesa.jpg" />
                <div className={s.container}>
                    <BoxTitle
                        title="Hombre Clave"
                        subtitle="Seguro empresarial"
                        slogan="Protección financiera para tu empresa."
                        quoteHref="/cotizar/empresarial"
                    />
                    <div className={s.box_text}>
                        <h3>¿Qué es el seguro de Hombre Clave?</h3>
                        <p>
                            Es un plan de seguro de vida por tiempo definido
                            cuyo objetivo es proteger el capital de una empresa
                            ante la pérdida de rentabilidad que puede ocasionar
                            el fallecimiento o la incapacidad total y permanente
                            de una o más personas clave.
                        </p>
                    </div>
                    <div className={s.box_list}>
                        <h3>¿Quién puede ser una persona clave?</h3>
                        <ul>
                            <li>
                                Propietarios, socios industriales o directivos.
                            </li>
                            <li>
                                Empleados que contribuyen de manera importante a
                                la rentabilidad de la empresa.
                            </li>
                            <li>
                                Personas cuyo trabajo impacta directamente en
                                las utilidades.
                            </li>
                        </ul>
                    </div>
                    <div className={s.box_list}>
                        <h3>Riesgos ante la pérdida de una persona clave</h3>
                        <ul>
                            <li>
                                Baja de ventas y posible pérdida de clientes.
                            </li>
                            <li>
                                Pérdida de experiencia para dirigir proyectos
                                productivos.
                            </li>
                            <li>Posible disminución de líneas de crédito.</li>
                            <li>
                                En casos extremos, la disolución del negocio.
                            </li>
                        </ul>
                    </div>
                    <div className={s.box_list}>
                        <h3>¿Cómo puede ayudar esta protección?</h3>
                        <ul>
                            <li>
                                Liquidación de pasivos bancarios y proveedores.
                            </li>
                            <li>
                                Liquidación de personal y obligaciones fiscales.
                            </li>
                            <li>
                                Contratación y entrenamiento de un ejecutivo
                                sustituto.
                            </li>
                            <li>Liquidación accionaria.</li>
                        </ul>
                    </div>
                    <div className={s.box_text_impact}>
                        <p>
                            Protege la continuidad financiera de tu empresa.
                            <span>
                                {" "}
                                Las primas pueden ser deducibles de impuestos
                                conforme a las disposiciones aplicables de la
                                Ley del Impuesto sobre la Renta.
                            </span>
                        </p>
                    </div>
                    <div className={s.container_buttons}>
                        <button className="btn-type-top-white-bg btn-padding-type-2">
                            Agendar asesoría
                        </button>
                        <a
                            href="/cotizar/empresarial"
                            className="btn-type-3-red"
                        >
                            Cotizar Hombre Clave
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
