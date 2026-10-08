"use client";
import Link from "next/link";
import { forwardRef } from "react";
import s from "./subMenu.module.css";

const SegurosSubMenu = forwardRef(({ active, handleClick }, ref) => {
    return (
        <div className={`${s.wrapper_submenu} ${active ? s.active : ""}`}>
            <section>
                <div className={s.cmedia}>
                    <div className={s.container_links_1} ref={ref}>
                        <Link
                            href="/gastos-medicos-mayores"
                            className={s.link}
                            onClick={handleClick}
                        >
                            <img
                                className={s.icon}
                                src="/health_care.svg"
                                alt=""
                            />
                            <div className={s.box}>
                                <div className={s.cont_title}>
                                    <span className={s.link_title}>
                                        Seguro de Gastos Médicos Mayores
                                    </span>
                                    <span className={s.abrevation}>SGMM</span>
                                </div>
                                <p>
                                    Alfa Medical — tu solución en Gastos Médicos
                                    Mayores
                                </p>
                            </div>
                        </Link>
                        <Link
                            href="/plan-de-retiro"
                            className={s.link}
                            onClick={handleClick}
                        >
                            <img
                                className={s.icon}
                                src="/health_care.svg"
                                alt=""
                            />
                            <div className={s.box}>
                                <div className={s.cont_title}>
                                    <span className={s.link_title}>
                                        Plan Personal de Retiro
                                    </span>
                                    <span className={s.abrevation}>PPR</span>
                                </div>
                                <p>
                                    Imagina Ser — Vive tu retiro al máximo:
                                    comienza tu ahorro.
                                </p>
                            </div>
                        </Link>
                        <Link
                            href="/ahorro-e-inversion"
                            className={s.link}
                            onClick={handleClick}
                        >
                            <img
                                className={s.icon}
                                src="/health_care.svg"
                                alt=""
                            />
                            <div className={s.box}>
                                <div className={s.cont_title}>
                                    <span className={s.link_title}>
                                        Plan de Ahorro e Inversión
                                    </span>
                                    <span className={s.abrevation}>A&I</span>
                                </div>
                                <p>
                                    Ahorro e inversiones — Protege tu patrimonio
                                    e invierte con confianza.
                                </p>
                            </div>
                        </Link>
                        <Link
                            href="/hombre-clave"
                            className={s.link}
                            onClick={handleClick}
                        >
                            <img
                                className={s.icon}
                                src="/health_care.svg"
                                alt=""
                            />
                            <div className={s.box}>
                                <div className={s.cont_title}>
                                    <span className={s.link_title}>
                                        Hombre Clave
                                    </span>
                                    <span className={s.abrevation}>HC</span>
                                </div>
                                <p>
                                    Seguro empresarial — Protección financiera
                                    para tu empresa.
                                </p>
                            </div>
                        </Link>
                        <Link
                            href="/segubeca"
                            className={s.link}
                            onClick={handleClick}
                        >
                            <img
                                className={s.icon}
                                src="/health_care.svg"
                                alt=""
                            />
                            <div className={s.box}>
                                <div className={s.cont_title}>
                                    <span className={s.link_title}>
                                        SeguBeca
                                    </span>
                                    <span className={s.abrevation}>SB</span>
                                </div>
                                <p>
                                    Ahorro Educativo — Asegura el futuro
                                    educativo de tus hijos.
                                </p>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
});

export default SegurosSubMenu;
