import { CATEGORIES_URL } from "./urls"

export const getCategories = async () => {
  try {
    const apiUrl = CATEGORIES_URL.all

    const response = await fetch(apiUrl, {
      next: { revalidate: 10 }
    })
  
    const categories = await response.json()
    
    return categories
  } catch (error) {
    if (error) {
      return []
    }
  }
}