import classes from './directions.module.scss'
interface DirectionPros {
  selectedState: string
  isWrongAnswer: boolean
  isCorrectAnswer: boolean
  resetGame: Function
}

export const Directions = ({ selectedState, isWrongAnswer, isCorrectAnswer, resetGame }: DirectionPros) => {
  return (
    <div>
      {selectedState && (
        <>
          <div>{`Please select the capital of ${selectedState}`}</div>
        </>
      )}
      {!!isWrongAnswer && <div className={classes.hasError}>You got it wrong, please try again</div>}
      {isCorrectAnswer && <div className={classes.correct}>Way to go!! You are so smart</div>}
      <button className={classes.button} onClick={() => resetGame()}>
        Reset Game
      </button>
    </div>
  )
}
