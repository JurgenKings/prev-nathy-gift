"use server"
import React from "react"
import { Resend } from "resend"
import { ISendEmail } from "@/interfaces/ISendEmail"
import ContactFormEmail from "@/components/EmailTemplate"
import jwt, { JwtPayload } from "jsonwebtoken"

export const sendEmail = async (body: ISendEmail) => {

  const apiKeyResend = process.env.RESEND_API_KEY || ""
  const to = process.env.RESEND_TO_EMAIL || ""

  const resend = new Resend(apiKeyResend)

  let data
  try {
    data = await resend.emails.send({
      from: "onboarding@resend.dev",
      to,
      subject: body.subject,
      react: React.createElement(ContactFormEmail, {
        name: body.name,
        message: body.message,
        email: body.email,
        subject: body.subject
      }),
    })
  } catch (error) {
    if (error) { }
  }

  return {
    data
  }
}