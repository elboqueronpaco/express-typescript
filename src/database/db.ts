import { connect, connections, disconnect } from "mongoose"

const mongoConnection = {
    isConnected: 0
}

export class MongoDBConnect {
    private url: string
    private mongoConnection: any
    constructor() {
        this.url= process.env.MONGODB_URL || ''
        this.mongoConnection= mongoConnection
    }
    public async connect() {
        if(this.mongoConnection.isConnected) {
            console.log('Ya estamos conectados...')
            return
        }
        if(connections.length > 0) {
            this.mongoConnection.isConnected = connections[0].readyState
            if(this.mongoConnection.isConnected === 1) {
                console.log('Usando conexión anterior...')
                return
            }
            await disconnect()
        }
        await connect(this.url)
        this.mongoConnection.isConnected = 1
        console.log('Conectado a Mongo')
    }
    public async disconnect () {
        if (this.mongoConnection.isConnected === 0) return
        await disconnect()
        this.mongoConnection.isConnected = 0
        console.log('Desconectado de MongoDB')
        
    }
}