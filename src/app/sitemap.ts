import { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${process.env.BASE_URL}`,
    },
    {
      url: `${process.env.BASE_URL}/catalogo`,
    },
    {
      url: `${process.env.BASE_URL}/contacto`,
    },
    {
      url: `${process.env.BASE_URL}/nosotros`,
    },
  ]
}