import { Request, Response, NextFunction } from 'express'

import { Jwt } from '../utils/jwt'

export function jwtAuthGuard(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization
  if (!authHeader) {
    return res.status(401).json({
      message: 'Token não informado'
    })
  }

  const [, token] = authHeader.split(' ')
  if (!token) {
    return res.status(401).json({
      message: 'Token não informado'
    })
  }

  try {
    const payload = Jwt.verify(token)

    res.locals.user = payload

    next()
  } catch {
    return res.status(401).json({
      message: 'Token inválido ou expirado'
    })
  }
}
