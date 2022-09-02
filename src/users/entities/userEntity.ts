export interface UserEntity {
    name: string
    lastName: string
    username: string
    email: string
    password: string
    avatar?: string
    rol?: Roles
}
export enum Roles {
    USER = 'user',
    ADMIN = 'admin',
    SUPER_ADMIN = 'superadmin'
}

export interface CreateUserDto {
    name: string
    lastName: string
    username: string
    email: string
    password: string
}