"use client";

import React, { useRef, useState, useEffect } from "react";
import s from "./tabsHome.module.css";
import WidgetsHome from "./widgetsHome";
import CardSmarts from "./card/cardSmarts";

export default function TabsHome() {
    const tabsRef = useRef([]);
    const containerRef = useRef(null);
    const selectorRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [isSmall, setIsSmall] = useState(window.innerWidth < 834);

    useEffect(() => {
        const handleResize = () => {
            setIsSmall(window.innerWidth < 834);
        };

        window.addEventListener("resize", handleResize);

        // Limpieza
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const handleClick = (index) => {
        setActiveIndex(index);
        const currentBtn = tabsRef.current[index];
        const container = containerRef.current;
        const selector = selectorRef.current;

        if (currentBtn && container && selector) {
            const itemPos = currentBtn.offsetLeft;
            const itemWidth = currentBtn.clientWidth;

            container.scrollLeft =
                itemPos - container.clientWidth / 2 + itemWidth / 2;

            selector.style.left = `${itemPos}px`;
            selector.style.width = `${itemWidth}px`;
        }
    };

    useEffect(() => {
        handleClick(activeIndex);
    }, []);

    const tabs = ["Seguros", "Pension ley 73"];
    return (
        <section className={s.section_tabs}>
            <div className={`cmedia ${s.crmedia}`}>
                <div className={s.wrapper}>
                    <div className={s.tabs} ref={containerRef}>
                        {tabs.map((tab, i) => (
                            <button
                                key={i}
                                ref={(el) => (tabsRef.current[i] = el)}
                                onClick={() => handleClick(i)}
                                className={`${s.tab_btn} ${
                                    activeIndex === i ? s.active : ""
                                }`}
                            >
                                {tab}
                            </button>
                        ))}
                        <span ref={selectorRef} className={s.selector} />
                    </div>
                    {isSmall ? (
                        <CardSmarts />
                    ) : (
                        <div className={s.tab_content}>
                            {activeIndex === 0 && <WidgetsHome />}
                            {activeIndex === 1 && <h1>London</h1>}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
