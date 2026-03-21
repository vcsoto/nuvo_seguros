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
                                        Seguro de gastos
                                        <br /> médicos mayores
                                    </span>
                                    <span className={s.abrevation}>SGMM</span>
                                </div>
                                <p>
                                    Alfa Medical, el mejor seguro de gastos
                                    médicos
                                </p>
                            </div>
                        </Link>
                        <Link
                            href="/seccion/gastos-medicos"
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
                                        Plan de Retiro
                                    </span>
                                    <span className={s.abrevation}>PPR</span>
                                </div>
                                <p>
                                    Imagina Ser, vive tu Retiro al maximo,
                                    comieza tu Ahorro
                                </p>
                            </div>
                        </Link>
                        <Link href="/" className={s.link} onClick={handleClick}>
                            <img
                                className={s.icon}
                                src="/health_care.svg"
                                alt=""
                            />
                            <div className={s.box}>
                                <div className={s.cont_title}>
                                    <span className={s.link_title}>
                                        Seguro de gastos
                                        <br /> médicos mayores
                                    </span>
                                    <span className={s.abrevation}>SGMM</span>
                                </div>
                                <p>
                                    Alfa Medical, el mejor seguro de gastos
                                    médicos
                                </p>
                            </div>
                        </Link>
                        <Link href="/" className={s.link} onClick={handleClick}>
                            <img
                                className={s.icon}
                                src="/health_care.svg"
                                alt=""
                            />
                            <div className={s.box}>
                                <div className={s.cont_title}>
                                    <span className={s.link_title}>
                                        Plan de Retiro
                                    </span>
                                    <span className={s.abrevation}>PPR</span>
                                </div>
                                <p>
                                    Imagina Ser, vive tu Retiro al maximo,
                                    comieza tu Ahorro
                                </p>
                            </div>
                        </Link>
                        <Link href="/" className={s.link} onClick={handleClick}>
                            <img
                                className={s.icon}
                                src="/health_care.svg"
                                alt=""
                            />
                            <div className={s.box}>
                                <div className={s.cont_title}>
                                    <span className={s.link_title}>
                                        Plan de Retiro
                                    </span>
                                    <span className={s.abrevation}>PPR</span>
                                </div>
                                <p>
                                    Imagina Ser, vive tu Retiro al maximo,
                                    comieza tu Ahorro
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
