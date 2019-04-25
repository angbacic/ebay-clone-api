const express = require('express')
const bodyParser = require('body-parser')
const advertsRouter = require('./adverts/routes')
const cors= require('cors')

const app = express()
const port = process.env.PORT || 4000

app
  .use(cors())
  .use(bodyParser.json())
  .use(advertsRouter)
  .listen(port, () => console.log(`Listening on port ${port}`))
