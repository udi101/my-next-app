import classes from './menu.module.scss'
import { UsersContext } from '../state/UsersContext'
import { useContext } from 'react'

export const Menu = () => {
    const {user} = useContext(UsersContext)
    return (
       <div className={classes.menu}>
        the user is: {user}
       </div>

    )
}