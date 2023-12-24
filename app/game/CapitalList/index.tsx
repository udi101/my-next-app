import { useRecoilValue } from 'recoil'
import { Card } from '../Card'
import { Capital } from '../interfaces/stateCapital.type'
import classes from './capitalList.module.scss'
import { selectedCapitalState } from '../state/game'

interface CapitalListProps {
  capitals: Capital[]
  onCapitalSelect: Function
}

export const CapitalList = ({ capitals, onCapitalSelect }: CapitalListProps) => {
  const selectedCapital = useRecoilValue(selectedCapitalState)
  return (
    <div id="capitalList" className={classes.capitalList}>
      {capitals?.map((item) => (
        <div key={item.name}>
          <Card text={item.name} onClick={onCapitalSelect} isSelected={item.name === selectedCapital}></Card>
        </div>
      ))}
    </div>
  )
}
