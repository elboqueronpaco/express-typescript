import { Request, Response } from "express";
import { UserService  } from './user.service'
const service = new UserService()
export class UserController {
    
    constructor() {
       
    }
    async findAll(_req: Request, res: Response){
        const users = await service.findAll()
        res.status(200).json(users)
    }
    async findOne(req: Request, res: Response){
        const {id} = req.params
        res.status(200).json({
            user: `Usuario ${id}`
        })
    }
    async create (req: Request, res: Response){
        const user = req.body
        const newUser = await service.create(user)
        res.status(201).json({
            message: 'usuario creado',
            data: newUser
        })
    }
}