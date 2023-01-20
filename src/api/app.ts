import express from 'express'
import userRouter from '../route/userRouter'

const app = express()

app.use(express.json())

app.get('/', (req, res) => res.status(200).json('ok'))
app.use(userRouter)

export default app
