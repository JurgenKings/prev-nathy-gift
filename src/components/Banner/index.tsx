"use client"
import React from "react"
import { motion } from "motion/react"
import { BsGift, BsHeartFill } from "react-icons/bs"
import { GiButterfly } from "react-icons/gi"
import Image from "next/image"

function Banner(): React.JSX.Element {

  const butterflies = Array(6).fill(null)

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  const butterflyVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      x: Math.sin(i * 0.5) * 50,
      y: Math.cos(i * 0.5) * 30,
      transition: {
        duration: 2,
        repeat: Infinity,
        delay: i * 0.2,
        repeatType: "reverse" as "reverse" | "mirror" | "loop"
      }
    })
  }

  return (
    <div className="relative min-h-[600px] w-full overflow-hidden bg-gradient-to-br from-pink-400 to-pink-500 mt-16 mb-16">

      {butterflies.map((_, index) => (
        <motion.div
          key={index}
          custom={index}
          variants={butterflyVariants}
          initial="hidden"
          animate="visible"
          className={`absolute ${index % 2 === 0 ? "text-pink-300" : "text-white"}`}
        >
          <GiButterfly className={`text-${20 + index * 5}px`} />
        </motion.div>
      ))}

      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <motion.div
            className="lg:w-1/2 text-center lg:text-left"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.3
                }
              }
            }}
          >
            <motion.h1
              variants={textVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-serif"
            >
              El local te lo debo...
            </motion.h1>
            <motion.p
              variants={textVariants}
              className="text-xl md:text-2xl text-pink-100 mb-8 font-light"
            >
              Pero desde mi casa resuelvo tus dudas, tomo tu pedido y te lo envuelvo con AMOR.
            </motion.p>
            <motion.div
              variants={textVariants}
              className="flex items-center justify-center lg:justify-start gap-4"
            >
              <BsHeartFill className="text-pink-100 text-2xl animate-pulse" />
              <BsGift className="text-white text-2xl animate-bounce" />
            </motion.div>
          </motion.div>

          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-full h-[400px] rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="/images/flores-3.jpg"
                alt="Gift boxes wrapped with love"
                height={400}
                width={400}
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pink-500/50 to-transparent">
                <div className="absolute bottom-8 left-8 right-8">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-white text-center"
                  >
                    <BsGift className="text-4xl mx-auto mb-4" />
                    <p className="text-lg font-medium">
                      Envuelto con amor y cuidado
                    </p>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Banner