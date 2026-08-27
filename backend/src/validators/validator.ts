export class Validator {
  static isValidEmail(email: string): boolean {
    return /^[^\s@]+@[^\s@.]+(?:\.[^\s@.]+)+$/.test(email)
  }
}
