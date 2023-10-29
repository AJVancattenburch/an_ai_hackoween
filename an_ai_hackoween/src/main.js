import express from 'express'
import { createServer } from 'http'
import { DbConnection } from './db/DbConfig'
import { socketProvider } from './SocketProvider'
import { Startup } from './Startup'
import { logger } from './utils/Logger'
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

// create server & socketServer
const app = express()
const port = process.env.PORT || 3000

if (process.env.NODE_ENV == 'dev') {
  // @ts-ignore
  process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 1;
}

const httpServer = createServer(app)
Startup.ConfigureGlobalMiddleware(app)
Startup.ConfigureRoutes(app)

// Establish Socket
socketProvider.initialize(httpServer)

// Connect to Atlas MongoDB
DbConnection.connect()

// Access the OpenAI API key
const apiKey = process.env.OPENAI_API_KEY;

// Start Server
httpServer.listen(port, () => {
  logger.log(`[SERVING ON PORT: ${port}]`)
})
