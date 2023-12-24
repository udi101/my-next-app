'use client'
import { createContext, useCallback, useState } from 'react'
import { useStates } from './hooks/useStates'
import classes from './game.module.scss'
import { StateList } from './StateList'
import { CapitalList } from './CapitalList'
import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil'
import {
  capitalListState,
  rightAnswerState,
  selectedCapitalState,
  selectedStateState,
  stateListState,
  wrongAnswerState,
} from './state/game'
import { Directions } from './Directions'

const Game = () => {
  const selectedState = useRecoilValue(selectedStateState)
  const selectedCapital = useRecoilValue(selectedCapitalState)

  const stateList = useRecoilValue(stateListState)
  const capitalList = useRecoilValue(capitalListState)
  const [rightAnswer, setRightAnswer] = useRecoilState(rightAnswerState)
  const [wrongAnswer, setWrongAnswer] = useRecoilState(wrongAnswerState)
  const { onCapitalSelect, onStateSelect, resetGame } = useStates()
  return (
    <div className={classes.game}>
      <div className={classes.lists}>
        <div>
          <div>Choose a state from the list:</div>
          <StateList states={stateList} onStateSelect={onStateSelect}></StateList>
        </div>
        <CapitalList capitals={capitalList} onCapitalSelect={onCapitalSelect}></CapitalList>
      </div>
      <div className={classes.spacer}></div>

      <Directions
        selectedState={selectedState}
        isWrongAnswer={wrongAnswer}
        isCorrectAnswer={rightAnswer}
        resetGame={resetGame}
      />
    </div>
  )
}

export default Game
