export type StateCapital = {
  state: string
  capital: string
}

interface Location {
  name: string
  isActive: boolean
}

export interface Capital extends Location {}

export interface State extends Location {}
