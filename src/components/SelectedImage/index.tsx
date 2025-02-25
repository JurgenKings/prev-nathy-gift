"use client"
import React from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "motion/react"
import { FiX } from "react-icons/fi"

interface SelectedImageProps {
  selectedImageData: { src: string, item: string }
  setSelectedImageData: (selectedImageData: { src: string, item: string }) => void
}

function SelectedImage({ selectedImageData, setSelectedImageData }: SelectedImageProps): React.JSX.Element {

  return (
    <AnimatePresence>
      {selectedImageData.src && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImageData({ src: "", item: "" })}
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            className="relative max-w-2xl w-[600px] rounded-lg shadow-2xl bg-white p-0 text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-all"
              onClick={() => setSelectedImageData({ src: "", item: "" })}
            >
              <FiX size={24} />
            </button>
            <Image
              src={selectedImageData.src}
              alt="Imagen seleccionada"
              width={600}
              height={600}
              className="max-h-[80vh] rounded-lg shadow-2xl aspect-square"
            />

            <div className="absolute bottom-0 left-0 p-3 w-auto">
              <div className="backdrop-blur-sm bg-black/50 p-2 rounded-xl">
                <h2 className="text-white font-serif text-2xl lg:text-3xl mb-2">
                  {selectedImageData.item}
                </h2>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default SelectedImage

