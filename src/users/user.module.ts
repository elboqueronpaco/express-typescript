import { Router } from "express";
import { UserController } from './user.controller'

export default class UserModule {
    public router: Router
    private controller: UserController = new UserController()
    constructor() {
       this.router = Router()
        this.routes()

    }
    protected routes():void {
        this.router.get('/', this.controller.findAll)
        this.router.get('/:username', this.controller.findOne)
        this.router.post('/', this.controller.create)
    }
}