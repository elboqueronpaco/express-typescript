import { Application } from "express";
import UserModule from '../users/user.module'
const routes = (app:Application) =>{
    app.use('/api/v1/users', new UserModule().router)
}

export default routes