'use client'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'

const pet = 'Jimmy'

const useCustomCallback = (callback: Function, dependencies: any[]) => {
  const callbackRef = useRef<Function>()

  useEffect(() => {
    callbackRef.current = callback
  }, [callback, dependencies])

  const memoizedCallback = useMemo(() => {
    return (...args: any[]) => {
      if (callbackRef.current) {
        return callbackRef.current.apply(this, args)
      }
    }
  }, [callbackRef])
}

const callback = () => {
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)
  const [user, setUser] = useState<{ name: string }>()

  const increment = useCallback(() => {
    setX((x) => x + 1)
  }, [])

  useEffect(() => {
    const getUser = async () => {
      const users = await fetch('/api/users')
      setUser(await users.json())
    }
    getUser()
  }, [])

  console.log('I am rendered')
  return (
    <div>
      This is the callback
      <div>
        <button>Show sum</button>
      </div>
      <div>
        <button onClick={increment}>Increment x</button>
        <div>{x}</div>
      </div>
      <div>{user && user.name}</div>
      <div>{pet}</div>
    </div>
  )
}

export default callback
