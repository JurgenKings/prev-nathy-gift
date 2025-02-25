import type { Metadata } from "next"
import { Toaster } from "react-hot-toast"
import { Lora } from "next/font/google"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import WhatsAppButton from "@/components/WhatsAppButton"
import "./globals.css"

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "700"]
})

export const metadata: Metadata = {
  metadataBase: new URL(`${process.env.BASE_URL}`),
  title: {
    default: "Nathy Gift",
    template: "%s - Nathy Gift",
  },
  description: "Aplicación web que permite a los usuarios comprar productos de manera sencilla y segura, con un enfoque en la transparencia y la responsabilidad.",
  twitter: {
    card: "summary_large_image",
  },
  keywords: "tienda, regalos, arreglos, globos, nathy, gift, nathygift, compras, productos, e-commerce",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {

  return (
    <html lang="es">
      <body className={lora.className}>
        <Header />
        <Toaster position="top-right" />
        <main>
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
