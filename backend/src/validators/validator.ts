export class Validator {
  static isValidEmail(email: string): boolean {
    return /^[^\s@]+@[^\s@.]+(?:\.[^\s@.]+)+$/.test(email)
  }

  static isValidPassword(password: string): boolean {
    return (
      password.length >= 8 &&
      /[A-Z]/.test(password) &&
      /[a-z]/.test(password) &&
      /\d/.test(password)
    )
  }
}
