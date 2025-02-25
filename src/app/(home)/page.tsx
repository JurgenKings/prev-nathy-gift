import React from "react"
import { Metadata } from "next"
import Hero from "@/components/Hero"
import GalleryCategories from "@/components/GalleryCategories"
import Carousel from "@/components/Carrousel"
import Testimonials from "@/components/Testimonials"
import Features from "@/components/Features"
import { getTopEventsProducts } from "@/services/products/product"
import { getCategories } from "@/services/categories/category"
import Banner from "@/components/Banner"

export const metadata: Metadata = {
  title: "Inicio",
  alternates: {
    canonical: `${process.env.BASE_URL}`,
  }
}

async function HomePage() {

  const categories = await getCategories()
  const topEventsProducts = await getTopEventsProducts()

  return (
    <>
      <Hero />
      <h2 className="text-center text-pink-600 text-5xl mt-16 mb-16">
        ¿Qué nos caracteriza?
      </h2>
      <Features />
      <h2 className="text-center text-pink-600 text-5xl mt-16 mb-16">
        Descubre nuestras categorías
      </h2>
      <GalleryCategories categories={categories} />

      {topEventsProducts?.map((eventData) => (
        <div key={eventData.event}>
          <h2 className="text-center text-pink-600 text-5xl mt-8 mb-8">
            {eventData.event === "Todos" ? "Destacados para cualquier ocasión" : eventData.event}
          </h2>
          <Carousel items={eventData.products} />
        </div>
      ))}

      <Banner />

      <Testimonials />

    </>
  )
}

export default HomePage