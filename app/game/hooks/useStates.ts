'use client'

import { useEffect, useMemo, useState } from 'react'
import { Capital, State, StateCapital } from '../interfaces/stateCapital.type'
import { useRecoilState, useResetRecoilState } from 'recoil'
import {
  capitalListState,
  rightAnswerState,
  selectedCapitalState,
  selectedStateState,
  stateListState,
  wrongAnswerState,
} from '../state/game'
import { Tinos } from 'next/font/google'

export const useStates = () => {
  // Selections
  const [selectedState, setSelectedState] = useRecoilState(selectedStateState)
  const [selectedCapital, setSelectedCapital] = useRecoilState(selectedCapitalState)

  const [stateList, setStateList] = useRecoilState(stateListState)
  const [capitalList, setCapitalList] = useRecoilState(capitalListState)

  const resetStateList = useResetRecoilState(stateListState)
  const resetCapitalState = useResetRecoilState(capitalListState)

  const [wrongAnswer, setWrongAnswer] = useRecoilState(wrongAnswerState)
  const [rightAnswer, setRightAnswer] = useRecoilState(rightAnswerState)

  const onStateSelect = (stateName: string) => {
    setSelectedCapital('')
    setWrongAnswer(false)
    setRightAnswer(false)
    const stateToUpdate = stateList.find((s) => s.name === stateName)
    setSelectedState(stateName === selectedState ? '' : stateName)
    setStateList((prevStateList) =>
      prevStateList.map((sl) => (sl.name === stateName ? { ...sl, isActive: false } : { ...sl, isActive: true })),
    )
  }

  const onCapitalSelect = (capital: string) => {
    setSelectedCapital(capital)
    if (!selectedState) return
  }

  const resetGame = () => {
    resetCapitalState()
    resetStateList()
    setSelectedCapital('')
    setSelectedState('')
  }

  const removeSelectedFromList = (_capital: string) => {
    setStateList((prevStateList) => prevStateList.filter((state) => state.name !== selectedState))
    setCapitalList((prevCapitalList) => prevCapitalList.filter((capital) => capital.name !== _capital))
  }

  const resetSelections = () => {
    setSelectedCapital('')
    setSelectedState('')
  }
  // This is checking when capital is clicked
  useEffect(() => {
    if (!selectedCapital || !selectedState) {
      return
    }
    setWrongAnswer(false)
    if (isCapitalOfState(selectedState, selectedCapital)) {
      setRightAnswer(true)
      setTimeout(() => {
        setRightAnswer(false)
      }, 3000)
      removeSelectedFromList(selectedCapital)
      resetSelections()
    } else {
      setTimeout(() => {
        setWrongAnswer(true)
      }, 0)
    }
  }, [selectedCapital])

  return { onStateSelect, onCapitalSelect, resetGame }
}

const stateAndCapitals: StateCapital[] = [
  { state: 'Israel', capital: 'Jerusalem' },
  { state: 'USA', capital: 'Washington' },
  { state: 'France', capital: 'Paris' },
  { state: 'Italy', capital: 'Rome' },
  { state: 'Spain', capital: 'Madrid' },
]

function shuffleArray<T>(array: T[]): T[] {
  const shuffledArray = [...array]
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]]
  }
  return shuffledArray
}

// Detecting whether a capital and state are true
const isCapitalOfState = (state: string, capital: string): boolean => {
  return stateAndCapitals.find((v) => v.state === state)?.capital === capital
}
