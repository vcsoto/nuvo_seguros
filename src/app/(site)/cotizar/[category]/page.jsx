"use client";
import { useParams } from "next/navigation";

export default function Page() {
    const params = useParams();
    return (
        <section className="first_section">
            <div className="cmedia">
                <p>Categoría: {params.category}</p>
            </div>
        </section>
    );
}
