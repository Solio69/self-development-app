import { User } from '@prisma/client'

export type UserData = Omit<User, 'passwordHash' | 'createdAt' | 'updatedAt'>

export type LoginValues = {
  email: string
  password: string
}

export type RegisterValues = {
  confirm: string
  email: string
  password: string
  username: string
}

export type ResponseLoginData = UserData & { token?: string }
