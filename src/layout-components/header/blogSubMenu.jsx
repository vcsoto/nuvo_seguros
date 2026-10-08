"use client";
import Link from "next/link";
import { forwardRef } from "react";
import s from "./subMenu.module.css";

const BlogSubMenu = forwardRef(({ active }, ref) => {
    return (
        <div className={`${s.wrapper_submenu} ${active ? s.active : ""}`}>
            <section>Blog</section>
        </div>
    );
});

export default BlogSubMenu;
