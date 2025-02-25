import mongoose, { Schema } from "mongoose"
import { ICategory } from "@/interfaces/ICategory"

const CategorySchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, default: "/images/not-found.jpg" },
}, { timestamps: true })

const mCategory = mongoose.models.Category || mongoose.model<ICategory>("Category", CategorySchema, "categories")

export default mCategory