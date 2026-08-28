import { Request, Response } from 'express'

import { authLogin } from '../services/auth.service'
import { Validator } from '../validators/validator'

export async function loginAuth(req: Request, res: Response) {
  try {
    const body: unknown = req.body
    if (typeof body !== 'object' || body === null) {
      return res.status(400).json({ error: 'Body inválido' })
    }

    if (
      !('email' in body) ||
      typeof body.email !== 'string' ||
      body.email.trim() === '' ||
      !Validator.isValidEmail(body.email)
    ) {
      return res.status(400).json({ error: 'Formato de email inválido' })
    }

    if (
      !('password' in body) ||
      typeof body.password !== 'string' ||
      body.password.trim() === '' ||
      !Validator.isValidPassword(body.password)
    ) {
      return res.status(400).json({ error: 'Formato de senha inválido' })
    }

    const token = await authLogin(body.email, body.password)

    return res.json({ token })
  } catch (error) {
    console.error(error)

    return res.status(500).json({ error: 'Erro interno' })
  }
}
