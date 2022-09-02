import { hashSync } from "bcryptjs";
import { MongoDBConnect } from "../database/db";
import { CreateUserDto } from "./entities/userEntity";
import { UserModel } from "./model/user.model";

export class UserService {
    //private model : any
    private db: any
    constructor() {

        this.db = new MongoDBConnect()
    }

    public async findAll (){
        await this.db.connect()
        const model = UserModel
        const user = await model.find().select('name lastName username _id email rol').lean()
        return user
    }

    public async create(user: CreateUserDto) {
        const model = UserModel
        const { password } = user
        await this.db.connect()
        const newUser = new model( user )
        newUser.password = hashSync(password, 10)
        return await newUser.save()
        
    }
}