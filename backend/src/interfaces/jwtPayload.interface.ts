type UserResponsibility = 'user' | 'admin' | 'moderator'

export interface JwtPayload {
  id: string
  responsibility: UserResponsibility
}
