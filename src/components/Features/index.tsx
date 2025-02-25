"use client"
import React from "react"
import { motion } from "motion/react"
import { FaGift, FaPalette } from "react-icons/fa6"
import { FaSmile, FaShippingFast } from "react-icons/fa"

const characteristics = [
  {
    title: "Personalización Total",
    description: "Personalización completa para cada cliente.",
    icon: FaGift
  },
  {
    title: "Atención Amigable",
    description: "Servicio dedicado y con una sonrisa para todos nuestros clientes.",
    icon: FaSmile
  },
  {
    title: "Diseños Unicos",
    description: "Diseños exclusivos e innovadores para toda ocasión.",
    icon: FaPalette
  },
  {
    title: "Entrega Rápida",
    description: "Rapidez de entrega de todos nuestros productos.",
    icon: FaShippingFast
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
}

function Features(): React.JSX.Element {

  return (
    <section className="bg-gradient-to-br from-pink-100 to-pink-200 py-16 px-4 sm:px-6 lg:px-8 container mx-auto rounded-lg" aria-labelledby="titulo-caracteristicas">
      <h2 id="titulo-caracteristicas" className="sr-only">Características de Nuestro Servicio</h2>
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {characteristics.map((item, index) => {
            return (
              <motion.article
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300"
                aria-labelledby={`titulo-caracteristica-${index}`}
                aria-describedby={`descripcion-caracteristica-${index}`}
              >
                <div className="p-8 flex flex-col items-center">
                  <div className="bg-pink-100 rounded-full p-6 mb-4">
                    <item.icon className="text-5xl text-pink-500" aria-hidden="true" />
                  </div>
                  <h3 id={`titulo-caracteristica-${index}`} className="text-xl font-semibold text-gray-900 mb-2 text-center">{item.title}</h3>
                  <p id={`descripcion-caracteristica-${index}`} className="text-gray-600 text-center">{item.description}</p>
                </div>
              </motion.article>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Features