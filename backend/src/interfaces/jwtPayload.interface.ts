import { UserResponsibility } from './users.interface'

export interface JwtPayload {
  id: string
  responsibility: UserResponsibility
}
