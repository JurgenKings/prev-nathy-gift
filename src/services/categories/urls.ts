import { domain } from "@/services/enviroments"

export const CATEGORIES_URL = {
  all: `${domain}/api/categories`,
  create: `${domain}/api/categories`,
  update: (_id: string) => `${domain}/api/categories/${_id}`,
  delete: (_id: string) => `${domain}/api/categories/${_id}`,
}