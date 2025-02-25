import connectDB from "@/database/db"
import mCategory from "@/models/mCategory"
import verifyToken from "@/utils/verifyToken"
import { NextRequest, NextResponse } from "next/server"

export async function DELETE(req: NextRequest, { params }) {
  const resolvedParams = await params
  const { id } = resolvedParams

  const tokenVerification = verifyToken(req)
  if (tokenVerification instanceof NextResponse) {
    return tokenVerification 
  }

  await connectDB()

  try {
    const category = await mCategory.findByIdAndDelete(id)

    if (!category) {
      return NextResponse.json({ error: "Categoría no encontrada" }, { status: 404 })
    }

    return NextResponse.json({ message: "Categoría eliminada con éxito" }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}