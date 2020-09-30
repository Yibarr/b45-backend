// const express = require('express')
import express from 'express'
import router from '../routers/index.js'
export const app = express()
export const PORT = process.env.PORT || 4000
app.get('/', (_, res) => res.send('Hello world'))
app.use('/api/v1', router)


