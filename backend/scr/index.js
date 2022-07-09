import { connectToDatabase } from "./data.js"
import { startWebServer } from "./web.js"

connectToDatabase()
startWebServer()
