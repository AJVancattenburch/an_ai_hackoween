const { default: OpenAI } = require("openai")

require('dotenv').config()
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
})
// @ts-ignore
// eslint-disable-next-line no-global-assign
require = require('esm')(module)
module.exports = require('./src/main')
