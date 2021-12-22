import * as dotenv from 'dotenv'
dotenv.config()

const AppConfig = {
  port: process.env.PORT,
}

export default AppConfig
