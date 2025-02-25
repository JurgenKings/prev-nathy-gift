"use client"
import { motion } from "motion/react"
import { HiHome } from "react-icons/hi"
import { BiSolidContact } from "react-icons/bi"
import { FaBookOpen, FaUsers } from "react-icons/fa6"
import { NavLink } from "@/interfaces/INavLink"

export default function NotFound () {

  const navLinks: NavLink[] = [
    { name: "Inicio", href: "/", icon: HiHome },
    { name: "Catálogo", href: "/catalogo", icon: FaBookOpen },
    { name: "Contacto", href: "/contacto", icon: BiSolidContact },
    { name: "Nosotros", href: "/nosotros", icon: FaUsers },
  ]

  return (
    <div className="min-h-screen bg-pink-50 flex items-center justify-center p-4 overflow-hidden relative">
      <h2>
        Codigo eliminado
      </h2>
    </div>
  )
}