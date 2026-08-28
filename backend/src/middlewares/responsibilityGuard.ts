import { Request, Response, NextFunction } from 'express'

import { JwtPayload } from '../interfaces/jwtPayload.interface'
type UserResponsibility = 'user' | 'admin' | 'moderator'

export function responsibilityGuard(
  requiredResponsibility: UserResponsibility
) {
  return (
    req: Request,
    res: Response<unknown, { user: JwtPayload }>,
    next: NextFunction
  ) => {
    const user = res.locals.user

    if (user.responsibility !== requiredResponsibility) {
      return res.status(403).json({
        message: 'Acesso negado'
      })
    }

    next()
  }
}
