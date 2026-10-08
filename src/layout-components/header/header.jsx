"use client";
import "./headerstyle.css";
import Link from "next/link";
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";
import { useState, useEffect, useRef } from "react";
import { useSelectedLayoutSegment } from "next/navigation";
import SegurosSubMenu from "./segurosSubMenu";
import BlogSubMenu from "./blogSubMenu";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [openSubMenu, setOpenSubMenu] = useState(false);
    const tabsRef = useRef([]);
    const subMenuRef = useRef([]);
    const overlayRef = useRef(null);
    const overlayRef_child = useRef(null);
    const [activeIndex, setActiveIndex] = useState(null);
    const [currentMenu, setCurrentMenu] = useState(null);

    const toggleMenu = () => {
        if (window.innerWidth <= 834) {
            setIsOpen(!isOpen);
        }
    };

    const segment = useSelectedLayoutSegment();

    // Si estás dentro de (site), habrá un segmento
    const isSite = segment !== null;

    const handleClick = (i) => {
        const activeElement = subMenuRef.current[i];
        const height = activeElement.offsetHeight + 100;

        if (currentMenu === null) {
            setCurrentMenu(i);
            setActiveIndex(i);
            setOpenSubMenu(!openSubMenu);
            overlayRef.current.classList.toggle("active");
            overlayRef_child.current.style.height = height + "px";
            return;
        }
        if (currentMenu !== i) {
            setActiveIndex(i);
            setCurrentMenu(i);
            overlayRef_child.current.style.height = height + "px";
            return;
        }
        setOpenSubMenu(!openSubMenu);
        overlayRef.current.classList.toggle("active");
        setCurrentMenu(null);
    };

    const handleClickOverlay = () => {
        setOpenSubMenu(false);
        if (openSubMenu) {
            overlayRef.current.classList.toggle("active");
        }

        setCurrentMenu(null);
    };

    useEffect(() => {
        if (isOpen) {
            document.body.classList.add("noscroll");
        } else {
            document.body.classList.remove("noscroll");
        }
    }, [isOpen]);
    return (
        <header className={`${openSubMenu ? "active" : ""}`}>
            <div
                className={`cmedia ${isSite ? "sections" : ""} ${openSubMenu ? "active" : ""}`}
            >
                <div className="head-box">
                    <Link
                        href="/"
                        className="head-logo"
                        onClick={() => {
                            isOpen(false);
                            handleClickOverlay();
                        }}
                    >
                        <img
                            src={
                                openSubMenu
                                    ? "/logotipo_nuvoseguros.svg"
                                    : "/Logotipo_nuvo_seguros_white.svg"
                            }
                            alt="Nuvo Seguros"
                        />
                    </Link>
                </div>
                <div className={`menubox ${isOpen ? "active" : ""}`}>
                    <ul>
                        <li>
                            <button
                                className={`link-button ${activeIndex === 0 && openSubMenu ? "active" : ""}`}
                                key={0}
                                ref={(el) => (tabsRef.current[0] = el)}
                                onClick={() => {
                                    if (window.innerWidth < 834) return;
                                    handleClick(0);
                                }}
                            >
                                Servicios
                                {activeIndex === 0 && openSubMenu ? (
                                    <FaAngleUp size={18} className="icon" />
                                ) : (
                                    <FaAngleDown size={18} className="icon" />
                                )}
                            </button>
                            <ul className="submenu">
                                <li>
                                    <Link
                                        href="/gastos-medicos-mayores"
                                        onClick={() => isOpen(false)}
                                    >
                                        Seguro de Gastos Médicos
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/plan-de-retiro"
                                        onClick={() => isOpen(false)}
                                    >
                                        Plan de Retiro
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/ahorro-e-inversion"
                                        onClick={() => isOpen(false)}
                                    >
                                        Ahorro e inversión
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/hombre-clave"
                                        onClick={() => isOpen(false)}
                                    >
                                        Hombre Clave
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/segubeca"
                                        onClick={() => isOpen(false)}
                                    >
                                        SeguBeca
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <button
                                className={`link-button ${activeIndex === 1 && openSubMenu ? "active" : ""}`}
                                key={1}
                                ref={(el) => (tabsRef.current[1] = el)}
                                onClick={() => {
                                    if (window.innerWidth < 834) return;
                                    handleClick(1);
                                }}
                            >
                                Blog
                                {activeIndex === 1 && openSubMenu ? (
                                    <FaAngleUp size={18} className="icon" />
                                ) : (
                                    <FaAngleDown size={18} className="icon" />
                                )}
                            </button>
                        </li>
                        <li>
                            <Link href="#" onClick={toggleMenu}>
                                contacto
                            </Link>
                        </li>
                    </ul>
                    <nav className="nav-top">
                        <div className="container">
                            <div className="btns">
                                <Link
                                    href="#"
                                    className="btn-type-top btn-menu-type-1"
                                    onClick={toggleMenu}
                                >
                                    Cotiza tu plan
                                </Link>
                                <Link
                                    href="#"
                                    className="btn-type-top-white-bg-type-1 btn-menu-type-1"
                                    onClick={toggleMenu}
                                >
                                    Agendar Asesoria
                                </Link>
                            </div>
                        </div>
                    </nav>
                </div>
                <button className="bars" onClick={toggleMenu}>
                    <i className="fas fa-bars" id="iconMenu"></i>
                </button>
            </div>
            <div
                className="overlay_submenu"
                ref={overlayRef}
                onClick={(e) => {
                    if (e.target === e.currentTarget) {
                        handleClickOverlay();
                    }
                }}
            >
                <div
                    className={`overlay_submenu_child ${openSubMenu ? "active" : ""}`}
                    ref={overlayRef_child}
                >
                    <SegurosSubMenu
                        active={activeIndex === 0 && openSubMenu}
                        handleClick={handleClickOverlay}
                        ref={(el) => {
                            if (el) subMenuRef.current[0] = el;
                        }}
                    />
                    <BlogSubMenu
                        active={activeIndex === 1 && openSubMenu}
                        ref={(el) => {
                            if (el) subMenuRef.current[1] = el;
                        }}
                    />
                </div>
            </div>
            {/* Overlay */}
            {isOpen && (
                <div
                    className="overlay_menubox"
                    onClick={() => setIsOpen(false)}
                ></div>
            )}
        </header>
    );
}
