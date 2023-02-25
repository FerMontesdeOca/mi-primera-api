import mongoose from 'mongoose'
import {
  DB_HOSTNAME,
  DB_NAME,
  DB_PASSWORD,
  DB_USERNAME
} from './environment'

console.log(DB_HOSTNAME)

const uri = `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOSTNAME}/${DB_NAME}?retryWrites=true&w=majority`

export const mongoDbConnection = async () => {
  try {
    await mongoose.set('strictQuery', false).connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    console.log('Conexion con mongo atlas existosa')
  } catch(error) {
    console.error('Ocurrio un error cuando intento conectarse a mongo Atlas', error)
    process.exit(1)
  }
}
