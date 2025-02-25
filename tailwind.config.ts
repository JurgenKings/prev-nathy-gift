import type { Config } from "tailwindcss"

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "bg-hover": "#e5e7eb",
        "bg-primary": "#f9fafb",  
        "bg-darker": "#9ca3af",  
        "text-primary": "#111827",  
      },
    },
  },
  plugins: [],
} satisfies Config
