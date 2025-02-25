import { NextRequest, NextResponse } from "next/server"
import connectDB from "@/database/db"
import mCategory from "@/models/mCategory"
import verifyToken from "@/utils/verifyToken"

export async function GET() {
  await connectDB()

  try {
    const categories = await mCategory.find()
    return NextResponse.json(categories, { status: 200 })
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}