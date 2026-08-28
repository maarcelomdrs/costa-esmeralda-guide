import bcrypt from 'bcrypt'

export class Bcrypt {
  static async hashPassword(password: string): Promise<string> {
    const salt = await bcrypt.genSalt(9)
    return bcrypt.hash(password, salt)
  }

  static comparePassword(password: string, hash: string): Promise<boolean> {
    return bcrypt.compare(password, hash)
  }
}
