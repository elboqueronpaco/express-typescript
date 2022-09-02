import express, { Application } from "express"
import cors from 'cors'
import appRoutes from './app.route'
class App {
    private app: Application
    private port: string
    constructor() {
        this.app = express();
        this.port= process.env.PORT || '8000'
        this.middlewares()
        this.routes()
    }
    middlewares(){
        this.app.use(cors())
        this.app.use(express.json())
        appRoutes(this.app)
    }
    routes(){
        this.app.get('/ping', (_req, res) => {
            console.log('someone pinged here!!')
            res.send('pong')
        })

    }
    async listen(){
        await this.app.listen(this.port)
        console.log(`Server runnign on http://localhost:${this.port}`)
    }
}

export default App