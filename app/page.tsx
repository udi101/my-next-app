"use client"
import { Menu } from './Menu'
import classes from './app.module.scss'
import { UsersContext } from './state/UsersContext'



export default function Home() {
  return (
    <>
    <UsersContext.Provider value={{user:'Udi Mazor'}}>
    <Menu />
    <div className={classes.container}>
    </div>
    </UsersContext.Provider>
    </>
  )
}

