import { State } from '../interfaces/stateCapital.type'
import { Card } from '../Card'
import classes from './stateList.module.scss'
import { rightAnswerState, selectedStateState } from '../state/game'
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { useEffect } from 'react'

interface StateListProps {
  states: State[]
  onStateSelect: Function
}

export const StateList = ({ states, onStateSelect }: StateListProps) => {
  const selectedState = useRecoilValue(selectedStateState)
  const [rightAnswer, setRightAnswer] = useRecoilState(rightAnswerState)
  const setSelectedState = useSetRecoilState(selectedStateState)

  return (
    <div id="stateList" className={classes.stateList}>
      {states?.map((item) => (
        <div className={classes.cardContainer} key={item.name}>
          <Card text={item.name} onClick={onStateSelect} isSelected={item.name === selectedState}></Card>
        </div>
      ))}
    </div>
  )
}
