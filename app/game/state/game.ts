import { atom } from 'recoil'
import { State, StateCapital } from '../interfaces/stateCapital.type'

export const selectedStateState = atom({
  key: 'selectedState',
  default: '',
})

export const selectedCapitalState = atom({
  key: 'selectedCapital',
  default: '',
})

export const wrongAnswerState = atom<boolean>({
  key: 'wrongAnswer',
  default: false,
})

export const rightAnswerState = atom<boolean>({
  key: 'rightAnswer',
  default: false,
})

const stateAndCapitals: StateCapital[] = [
  { state: 'Israel', capital: 'Jerusalem' },
  { state: 'USA', capital: 'Washington' },
  { state: 'France', capital: 'Paris' },
  { state: 'Italy', capital: 'Rome' },
  { state: 'Spain', capital: 'Madrid' },
]

export const stateListState = atom<State[]>({
  key: 'stateList',
  default: shuffleArray(stateAndCapitals.map((sac) => ({ name: sac.state, isActive: true }))),
})

export const capitalListState = atom<State[]>({
  key: 'capitalList',
  default: shuffleArray(stateAndCapitals.map((sac) => ({ name: sac.capital, isActive: true }))),
})

function shuffleArray<T>(array: T[]): T[] {
  const shuffledArray = [...array]
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]]
  }
  return shuffledArray
}
