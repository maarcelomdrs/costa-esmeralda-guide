import jwt from 'jsonwebtoken'

import { JwtPayload } from '../interfaces/jwtPayload.interface'

export class Jwt {
  static generate(payload: JwtPayload): string {
    const jwtSecret = process.env.JWT_SECRET
    if (!jwtSecret) {
      throw new Error('JWT_SECRET não definida')
    }

    return jwt.sign(payload, jwtSecret, {
      expiresIn: '1h'
    })
  }

  static verify(token: string) {
    const jwtSecret = process.env.JWT_SECRET
    if (!jwtSecret) {
      throw new Error('JWT_SECRET não definida')
    }

    const decoded = jwt.verify(token, jwtSecret)
    if (typeof decoded === 'string') {
      throw new Error('Payload do JWT inválido')
    }

    return decoded as JwtPayload
  }
}
