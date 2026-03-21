import Link from "next/link";
import s from "./bannerTypeOne.module.css";
export default function BannerTypeOne() {
    return (
        <div className={s.container}>
            <div className={s.text}>
                <h3>Orientación</h3>
                <p>
                    Contacta con nosotros, te brindamos
                    <br />
                    una asesoria completa
                </p>
                <span className={s.legend}>Previsión y Planificación</span>
            </div>
            <div className={s.btn}>
                <a
                    href="#"
                    className="btn-type-top-white-bg btn-padding-type-2"
                >
                    Agendar asesoria
                </a>
            </div>
        </div>
    );
}
