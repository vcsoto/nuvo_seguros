import s from "./widgetsHome.module.css";
import Card from "./card/card";
import data from "./card/cardData.json";
import { useRef, useEffect, useState } from "react";

export default function WidgetsHome() {
    const cardRefs = useRef([]);
    const maskRefs = useRef([]);
    const [firstCardWidth, setFirstCardWidth] = useState(0);

    useEffect(() => {
        const updateWidth = () => {
            if (cardRefs.current[0]) {
                setFirstCardWidth(cardRefs.current[0].offsetWidth);
            }
        };

        // calcular al inicio
        updateWidth();

        // escuchar resize
        window.addEventListener("resize", updateWidth);

        // limpiar listener cuando el componente se desmonte
        return () => {
            window.removeEventListener("resize", updateWidth);
        };
    }, []);

    const handleSlideout = (index) => {
        const mask = maskRefs.current[index];
        mask.removeAttribute("style");
        cardRefs.current.forEach((card, i) => {
            if (i !== index) {
                card.removeAttribute("style");
            }
        });
    };

    const handleSlide = (index) => {
        // Card actual

        const currentCard = cardRefs.current[index];
        const mask = maskRefs.current[index];

        if (currentCard) {
            setTimeout(() => {
                if (mask) mask.style.display = "none";
            }, 500);
        }

        // Ajustar las demás
        cardRefs.current.forEach((card, i) => {
            if (i !== index) {
                if (window.innerWidth <= 1366) {
                    card.style.width = "12%";
                } else {
                    card.style.width = "12%";
                }
            }
        });
    };
    return (
        <div className={s.wrapper}>
            {data.map((item, index) => (
                <Card
                    key={index}
                    title={item.title}
                    image={item.image}
                    nameclass={item.class}
                    ref={(el) => (cardRefs.current[index] = el)}
                    refmask={(el) => (maskRefs.current[index] = el)}
                    onMouseEnter={() => handleSlide(index)}
                    onMouseLeave={() => handleSlideout(index)}
                    width={firstCardWidth}
                    icon={item.icon}
                    subTitle1={item.sub_title_1}
                    subTitle2={item.sub_title_2}
                    description={item.description}
                    textoLink={index === 2 ? "invertir" : "Cotizar Seguro"}
                />
            ))}
        </div>
    );
}
