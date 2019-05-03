import { Request, Response } from 'express'
import { User, users }  from './users'
import * as jwt from 'jsonwebtoken'
import { apiConfig } from './api-config'

export const handleAuthentication = (req: Request, resp: Response) => {
  const user = req.body

  if(isValid(user)){
    const dbUser = users[user.userName]
    const token = jwt.sign({sub: dbUser.userName, iss:'meat-api'}, dbUser.email, { expiresIn: '1m' })
    resp.json({name: dbUser.name, userName: dbUser.userName, email: dbUser.email, acessToken: token})
  } else{
    resp.status(403).json({message: 'Dados Inválidos!'})
  }
}

function isValid(user: User): boolean{
  if(!user){
    return false
  }
  const dbUser = users[user.userName]
  return dbUser !== undefined && dbUser.matches(user)
}
