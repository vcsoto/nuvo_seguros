import s from "./pages.module.css";

export default function Images({ image }) {
    return (
        <div className={s.image}>
            <img src={image} alt="" className={s.pic} />
            <img src="logo_seguros_monterrey.png" alt="" className={s.brand} />
        </div>
    );
}
