import { model, Schema } from "mongoose";
import { Roles, UserEntity } from "../entities/userEntity";
import uniqueValidator from 'mongoose-unique-validator'

const UserSchema = new Schema<UserEntity>(
    {
        name: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        },
        username: {
            type: String,
            required: true,
            unique: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
        rol: {
            type: String,
            enum: Roles,
            default: Roles.USER
        }
    },
    {
        versionKey: false,
        timestamps: true
    }
)
UserSchema.plugin(uniqueValidator,{ message: 'Error, {PATH} ya existe'})

export const UserModel = model<UserEntity>('Users', UserSchema)