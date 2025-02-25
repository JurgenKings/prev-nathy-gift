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

export const createCategory = async (token: string, category) => {
  try {
    const apiUrl = CATEGORIES_URL.create

    const response = await fetch(apiUrl, {
      method: "POST",
      body: JSON.stringify(category),
      next: { revalidate: 10 },
      headers: {
        "Content-Type": "multipart/form-data",
        "Authorization": `Bearer ${token}`,
      },
    })
  
    const responseData = await response.json()
    
    return responseData
  } catch (error) {
    if (error) {}
  }
}

export const updateCategory = async (token: string, _id: string, category) => {
  try {
    const apiUrl = CATEGORIES_URL.update(_id)

    const response = await fetch(apiUrl, {
      method: "PUT",
      body: JSON.stringify(category),
      next: { revalidate: 10 },
      headers: {
        "Content-Type": "multipart/form-data",
        "Authorization": `Bearer ${token}`,
      },
    })
  
    const responseData = await response.json()
    
    return responseData
  } catch (error) {
    if (error) {}
  }
}

export const deleteCategory = async (token: string, _id: string) => {
  try {
    const apiUrl = CATEGORIES_URL.delete(_id)

    const response = await fetch(apiUrl, {
      method: "DELETE",
      headers: {
        "Authorization": `Bearer ${token}`,
      },
      next: { revalidate: 10 },
    })
  
    const responseData = await response.json()
    
    return responseData
  } catch (error) {
    if (error) {}
  }
}