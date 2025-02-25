import mongoose from "mongoose"

const MONGODB_URI = process.env.MONGODB_URI || (() => {
  const dbName = process.env.DB_NAME || ""
  const dbPassword = process.env.DB_PASSWORD || ""
  const dbUser = process.env.DB_USER || ""
  const dbHost = process.env.DB_HOST || ""
  const dbOptions = process.env.DB_OPTIONS || ""
  const dbFormat = process.env.DB_FORMAT || ""

  return `${dbFormat}://${dbUser}:${dbPassword}@${dbHost}/${dbName}${dbOptions}`
})()

let cached = global.mongo

if (!cached) {
  cached = global.mongo = { conn: null, promise: null }
}

let isConnected = false

async function connectDB() {
  if (isConnected) {
    return
  }
  if (cached.conn) {
    return cached.conn
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    }

    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
      console.log("Conexión exitosa a la base de datos")
      isConnected = true
      return mongoose
    }).catch(error => {
      console.error("Error de conexión a la base de dato", error)
      process.exit(1)
    })
  }

  cached.conn = await cached.promise
  return cached.conn
}

export default connectDB