import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Ideasmakers — La serie de tu empresa",
  description:
    "No hay serie de Netflix que supere la épica de tu trabajo cada día. Filmamos el día a día de tu empresa y lo convertimos en una serie que inspira y une a tu equipo.",
  openGraph: {
    title: "Ideasmakers — La serie de tu empresa",
    description:
      "No hay serie de Netflix que supere la épica de tu trabajo cada día.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
