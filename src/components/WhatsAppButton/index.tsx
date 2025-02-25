"use client"
import React, { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import { FaWhatsapp } from "react-icons/fa6"
import { motion } from "motion/react"

function WhatsAppButton(): React.JSX.Element {

  const url = usePathname()

  const [showTooltip, setShowTooltip] = useState<boolean>(false)
  const [shouldShowWaButton, setShouldShowWaButton] = useState<boolean>(true)

  useEffect(() => {
    if (url.startsWith("/office")) {
      setShouldShowWaButton(false)
    } else {
      setShouldShowWaButton(true)
    }
  }, [url])

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    bounce: {
      y: [0, -10, 0],
      opacity: [1],
      transition: {
        duration: 0.5,
        ease: "easeInOut",
        repeat: Infinity,
        repeatDelay: 1,
      },
    },
  }

  return (
    <>
      {shouldShowWaButton && (
        <div className="relative">
          <motion.button
            className="fixed bottom-6 right-6 p-3 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300 z-10"
            type="button"
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
            variants={itemVariants}
            initial="hidden"
            animate={showTooltip ? "visible" : "bounce"}
            aria-label="Contactar por WhatsApp"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaWhatsapp size={40} />
          </motion.button>
          {showTooltip && (
            <motion.div
              className="fixed bottom-11 right-20 bg-white text-pink-600 text-sm rounded py-1 px-3 mr-4 z-40 shadow-lg shadow-pink-300"
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              role="tooltip"
              aria-live="polite"
            >
              WhatsApp
            </motion.div>
          )}
        </div>
      )}
    </>

  )
}

export default WhatsAppButton
