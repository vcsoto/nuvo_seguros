import { useRef, useEffect } from "react";
import s from "./card.module.css";

export default function Card(props) {
    const cardRef = useRef(null);
    useEffect(() => {
        if (props.width && cardRef.current) {
            cardRef.current.style.width = `${props.width}px`;
        }
    }, [props.width]);
    return (
        <div
            className={s.widget}
            onMouseEnter={props.onMouseEnter}
            onMouseLeave={props.onMouseLeave}
            ref={props.ref}
        >
            <div className={`${s.card} ${props.nameclass}`} ref={cardRef}>
                <div className={s.head}>
                    <h2 dangerouslySetInnerHTML={{ __html: props.title }} />
                </div>
                <div className={s.image}>
                    <img src={props.image} alt="" />
                </div>
            </div>
            <div className={s.card_info}>
                <div className={s.mask} ref={props.refmask}></div>
                <div className="container-info">
                    <img src={props.icon} alt="" />
                    <h2>{props.subTitle1}</h2>
                    <p className={s.subtitle}>{props.subTitle2}</p>
                    <p className={s.description}>
                        {props.description}
                        <br />
                        <span className={s.link}>
                            <a href="">mas información</a>
                        </span>
                    </p>
                </div>
                <div className="container-buttons">
                    <button className="btn-type-top-white-bg btn-padding-type-2">
                        Agendar asesoria
                    </button>
                    <a href="#" className="btn-type-3-red">
                        {props.textoLink}
                    </a>
                </div>
            </div>
        </div>
    );
}
