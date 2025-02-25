"use client"
import Image from "next/image"
import React from "react"

interface ErrorPageProps {
  error: Error;
  reset: () => void;
}

export default function GlobalError({ reset }: ErrorPageProps) {
  return (
    <div style={{
      backgroundColor: "#e0ebe6",
      padding: "1rem",
      textAlign: "center",
      fontSize: "1.5rem",
      fontWeight: "bold",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: "1rem",
      width: "100%",
      minHeight: "100vh",
      overflow: "hidden",
    }}>
      <Image
        src="/images/error.png"
        alt="Imagen de Error"
        width={100}
        height={100}
        style={{ objectFit: "cover" }}
      />
      <h1>
        Ha ocurrido un error
      </h1>
      <p>
        Al parecer ha ocurrido un error, pero no te sientas mal
      </p>
      <button
        className="btn btn-primary"
        onClick={reset}
      >
        Volver a intentar
      </button>
    </div>
  )
}