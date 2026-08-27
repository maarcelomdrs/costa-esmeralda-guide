type UserResponsibility = 'user' | 'admin' | 'moderator'

export interface User {
  id: number
  email: string
  password_hash: string
  name: string
  responsibility: UserResponsibility
  creation_date: Date
}
