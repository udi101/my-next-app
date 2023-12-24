import classes from './menu.module.scss'
import { UsersContext } from '../state/UsersContext'
import { useContext } from 'react'
import Link from 'next/link'

export const Menu = () => {
  const { user } = useContext(UsersContext)

  return (
    <div className={classes.menu} style={{ display: 'flex' }}>
      <Link href="/">Home</Link>
      <Link href="/employees/register">Employees</Link>
      <Link href="/calc">Calc</Link>
      <Link href="/game">Game</Link>
      <Link href="/callback">Callback</Link>
    </div>
  )
}
