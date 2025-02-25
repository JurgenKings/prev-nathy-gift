import {create } from "zustand"
import { ICategory } from "@/interfaces/ICategory"
import { getCategories } from "@/services/categories/category"
import notify from "@/utils/notify"

interface CategoriesState {
  categories: ICategory[]
  setCategories: (categories: ICategory[]) => void
  getAllCategories: () => void
}

const useCategories = create<CategoriesState>((set) => ({
  categories: [],

  setCategories: (categories) => set({ categories }),

  getAllCategories: async () => {
    try {
      const categoriesData = await getCategories()
      set({ categories: categoriesData })
    } catch (error) {
      if (error) notify("error", "error", { error: "Ocurrió un error inesperado al obtener las categorías" })
    }
  },
}))

export default useCategories