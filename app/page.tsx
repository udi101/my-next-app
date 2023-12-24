'use client'
import { RecoilRoot } from 'recoil'
import classes from './app.module.scss'
import { UsersContext } from './state/UsersContext'

export default function Home() {
  return (
    <>
      <UsersContext.Provider value={{ user: 'Udi Mazor' }}>
        <div className={classes.container}></div>
      </UsersContext.Provider>
    </>
  )
}
