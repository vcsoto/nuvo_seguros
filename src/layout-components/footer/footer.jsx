"use client";
import Link from "next/link";
export default function Footer() {
    return (
        <footer>
            <div className="cmedia">
                <div className="column-1">
                    <img src="Logotipo_nuvo_seguros_white.svg" alt="" />
                </div>
                <div className="column-2">
                    <span className="title-menu">Servicios</span>
                    <ul>
                        <li>
                            <Link href="/gastos-medicos-mayores">
                                Seguro de Gastos Medicos
                            </Link>
                        </li>
                        <li>
                            <a href="#">Plan de Retiro</a>
                        </li>
                        <li>
                            <a href="#">Plan de Ahorro</a>
                        </li>
                        <li>
                            <a href="#">Planes de Inversion</a>
                        </li>
                        <li>
                            <a href="#">Hombre Clave</a>
                        </li>
                        <li>
                            <a href="#">SeguBeca</a>
                        </li>
                    </ul>
                </div>
                <div className="column-3">
                    <div className="info">
                        <span>
                            <i className="fa-solid fa-location-dot"></i> San
                            Pedro Garza Garcia N.L. México
                        </span>
                        <span>
                            <i className="fa-solid fa-phone"></i> 81 8465 8619
                        </span>
                    </div>
                    <div className="redes">
                        <a
                            target="_blank"
                            href="https://www.instagram.com/nuvoseguros"
                        >
                            <i className="fa-brands fa-instagram"></i>
                        </a>
                        <a
                            target="_blank"
                            href="https://www.facebook.com/NuvoSeguros"
                        >
                            <i className="fa-brands fa-facebook"></i>
                        </a>
                        <a
                            target="_blank"
                            href="https://www.linkedin.com/company/nuvoseguros"
                        >
                            <i className="fa-brands fa-linkedin"></i>
                        </a>
                    </div>
                </div>
                <div className="row-bottom">
                    <a href="" className="faqs">
                        Aviso de privacidad
                    </a>
                    <span>
                        2026 Nuvoseguros por&nbsp;
                        <a href="" className="supplier">
                            Victor Soto
                        </a>
                    </span>
                </div>
            </div>
        </footer>
    );
}
