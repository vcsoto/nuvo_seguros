import s from "./pages.module.css";
import Link from "next/link";

export default function BoxTitle({
    title,
    subtitle,
    slogan,
    quoteHref = "/cotizar/gastos",
}) {
    return (
        <div className={s.box_title}>
            <div>
                <h1>{title}</h1>
                <h2>{subtitle}</h2>
                <p>{slogan}</p>
            </div>
            <Link
                href={quoteHref}
                className={`btn-type-circle-red ${s.btn_type_circle_red}`}
            >
                Cotizar
            </Link>
        </div>
    );
}
