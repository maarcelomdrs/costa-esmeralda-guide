import { Request, Response } from 'express'

import * as usersService from '../services/users.service'
import { Validator } from '../validators/validator'

export async function registerUser(req: Request, res: Response) {
  try {
    const body: unknown = req.body
    if (typeof body !== 'object' || body === null) {
      return res.status(400).json({ error: 'Body inválido' })
    }

    if (
      !('name' in body) ||
      typeof body.name !== 'string' ||
      body.name.trim() === ''
    ) {
      return res.status(400).json({ error: 'Formato de nome inválido' })
    }

    if (
      !('email' in body) ||
      typeof body.email !== 'string' ||
      body.email.trim() === '' ||
      !Validator.isValidEmail(body.email)
    ) {
      return res.status(400).json({ error: 'Formato de email inválido' })
    }

    /// TODO: add verificação de formato de senha
    if (
      !('password' in body) ||
      typeof body.password !== 'string' ||
      body.password.trim() === ''
    ) {
      return res.status(400).json({ error: 'Formato de senha inválido' })
    }

    const user = await usersService.registerUser(
      body.email,
      body.password,
      body.name
    )

    return res.status(201).json(user)
  } catch (error) {
    console.error(error)

    return res.status(500).json({ error: 'Erro interno' })
  }
}
