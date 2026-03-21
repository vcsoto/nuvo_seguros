import "./globals.css";
import Header from "@/layout-components/header/header";
import Footer from "@/layout-components/footer/footer";
import Script from "next/script";

export const metadata = {
    title: "Nuvo Seguros | seguros y finanzas",
    description:
        "Protección financiera, Asesoramiento y contratación de seguros, fondos de inversión, planes de vida",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <Script
                    src="https://kit.fontawesome.com/c4ecc9e304.js"
                    crossOrigin="anonymous"
                    strategy="lazyOnload"
                    key="fontawesome-kit" // Clave única para evitar recargas
                />
            </head>
            <body>
                <Header />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    );
}
