import classNames from 'classnames'
import classes from './stateCard.module.scss'
import { useRecoilValue } from 'recoil'
import { wrongAnswerState } from '../state/game'

interface CardProps {
  text: string
  isSelected: boolean
  onClick: Function
}

export const Card = ({ text, isSelected, onClick }: CardProps) => {
  const wrongAnswer = useRecoilValue(wrongAnswerState)

  return (
    <button
      onClick={() => {
        onClick(text)
      }}
      className={classNames(classes.stateCard, {
        [classes.selected]: isSelected,
        [classes.hasError]: wrongAnswer,
      })}
    >
      {text}
    </button>
  )
}
