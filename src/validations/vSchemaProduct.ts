import z from "zod"

const includeSchema = z.object({
  id: z.number(),
  name: z.string()
    .min(3, { message: "Las incluidas deben tener al menos 3 caracteres" })
    .max(200, { message: "Las incluidas no pueden tener más de 200 caracteres" }),
})

const vSchemaProduct = z.object({
  name: z
    .string({ message: "El nombre del producto no puede estar vacío y debe de ser una cadena de texto" })
    .min(3, { message: "El nombre del producto debe tener al menos 3 caracteres" })
    .max(100, { message: "El nombre del producto no puede tener más de 100 caracteres" }),
  category: z
    .string({ message: "Seleccione una categoría de producto" })
    .min(3, { message: "La categoría del producto debe tener al menos 3 caracteres" })
    .max(50, { message: "La categoría del producto no puede tener más de 50 caracteres" }),
  description: z
    .string({ message: "La descripción del producto no puede estar vacía y debe de ser una cadena de texto" })
    .min(3, { message: "La descripción del producto debe tener al menos 3 caracteres" })
    .max(500, { message: "La descripción del producto no puede tener más de 500 caracteres" }),
  price: z
    .string({ message: "El precio del producto no puede estar vacío" })
    .min(0, { message: "El precio del producto debe ser mayor o igual a 0" }),
  specialEvent: z
    .string({ message: "Seleccione un evento de producto o seleccione 'Todos'" })
    .min(3, { message: "El evento especial debe tener al menos 3 caracteres" })
    .max(50, { message: "El evento especial no puede tener más de 50 caracteres" }),
  includes: z
    .array(includeSchema)
    .optional(),
  images: z.array(z.object({ id: z.string(), url: z.string() })).optional(),
})

export default vSchemaProduct