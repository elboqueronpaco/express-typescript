import express, { Application } from "express";

const app: Application = express()
const port: string = process.env.PORT || '8000'
/* Middlewares */
app.use(express.json())

app.get('/ping', (_req, res) => {
    console.log('someone pinged here!!')
    res.send('pong')
})

app.listen(port, () =>{
    console.log(`Server runnign on http://localhost:${port}`)
})