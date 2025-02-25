import { NextRequest, NextResponse } from "next/server"
import jwt from "jsonwebtoken"

const verifyToken = (req: NextRequest) => {
  const token = req.headers.get("authorization")?.split(" ")[1]
  const jwtSecret: string = process.env.JWT_SECRET || ""

  if (!token) {
    return NextResponse.json({ error: "No has enviado el token bearer" }, { status: 401 })
  }

  try {
    const decoded = jwt.verify(token, jwtSecret)
    return { user: decoded } 
  } catch (error) {
    return NextResponse.json({ error: "El token bearer no es válido" }, { status: 401 })
  }
}

export default verifyToken
