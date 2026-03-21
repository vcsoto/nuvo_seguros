"use client";
import s from "./card.module.css";
import Link from "next/link";
import React, { useState, useEffect } from "react";
export default function CardSmarts() {
    return (
        <div className={s.size_offset_small}>
            <Link
                href="/gastos-medicos-mayores"
                className={`${s["card-square"]} ${s.sgmm}`}
            >
                <h2>
                    Seguros de
                    <br />
                    Gastos Médicos
                </h2>
            </Link>
            <button className={`${s["card-square"]} ${s.ppr}`}>
                <h2>
                    Plan de
                    <br />
                    Retiro
                </h2>
            </button>
            <button className={`${s["card-square"]} ${s.pai}`}>
                <h2>
                    Planes de
                    <br />
                    Ahorro e<br />
                    Inversión
                </h2>
            </button>
            <button className={`${s["card-square"]} ${s.hc}`}>
                <h2>Hombre Clave</h2>
            </button>
            <button className={`${s["card-square"]} ${s.sb}`}>
                <h2>Segubeca</h2>
            </button>
        </div>
    );
}
