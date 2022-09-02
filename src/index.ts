import { config } from 'dotenv'
config()
import App from './app/App'

const app = new App()
app.listen()