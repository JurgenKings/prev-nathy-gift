"use client"
import React from "react"
import Image from "next/image"
import { motion } from "motion/react"
import ContactForm from "@/components/ContactForm"
import SocialLinks from "@/components/SocialLinks"

function Contact(): React.JSX.Element {

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  const containerVariantsForm = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  }

  return (
    <section className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 container mx-auto">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="max-w-7xl mx-auto"
      >
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-pink-600 mb-2">
            ¡Nos encantaría saber de usted!
          </h1>
          <p className="text-gray-600">
            Comparta sus pensamientos con nosotros
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/flores-3.jpg"
                alt="Tienda de regalos"
                width={800}
                height={256}
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-pink-600 mb-4">
                ¡Regala una sonrisa!
              </h2>
              <p className="text-gray-600">
                ¡Difunde alegría con cada regalo!
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-pink-600 mb-4">
                Información de contacto
              </h3>
              <div className="space-y-3">
                <p className="text-gray-600">
                  <strong>Ubicación:</strong> Isla de Margarita, Nueva Esparta (Tienda Virtual)
                </p>
                <p className="text-gray-600">
                  <strong>Teléfono:</strong> +584121962130
                </p>
                <p className="text-gray-600">
                  <strong>Correo electrónico:</strong> nathy.gifts@gmail.com
                </p>
                <p className="text-gray-600">
                  <strong>Horario de atención al cliente:</strong> Lunes-Domingo: 9AM-7PM
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariantsForm}
            className="w-full bg-white rounded-2xl shadow-xl p-8 space-y-6"
          >
            <h2 className="text-3xl font-bold text-pink-600 text-center mb-8">
              ¡Contáctenos!
            </h2>

            <ContactForm />
          </motion.div>
        </div>

        <SocialLinks />
      </motion.div>
    </section>
  )
}

export default Contact