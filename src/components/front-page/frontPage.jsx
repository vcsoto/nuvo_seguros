import s from "@/components/front-page/frontPage.module.css";

export default function Frontpage() {
    return (
        <section className={s.section}>
            <div className={`cmedia ${s.container}`}>
                <div className={s.right}>
                    <h1>
                        <span className={s.title}>
                            Construyendo un futuro más seguro juntos
                        </span>
                        <br />
                        <span className={s.subtitle}>
                            comprometidos en proteger lo que más valoras
                        </span>
                        <span className={s.faqs}>
                            Seguros &nbsp;&nbsp;|&nbsp;&nbsp; Plan de Retiro
                            &nbsp;&nbsp;|&nbsp;&nbsp; Inversiones
                        </span>
                    </h1>
                </div>
                <div className={s.left}>
                    <img
                        className={s.imageLogoMty}
                        src="seguros-monterrey-white.svg"
                        alt=""
                    />
                </div>
            </div>
        </section>
    );
}
