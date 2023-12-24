'use client'
import { FormEvent } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import classes from './register.module.scss'
import { useCalc } from '@/app/hooks/useCalc'

type Inputs = {
  firstName: string
  lastName: string
  age: number
}

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data.lastName)
  }
  const { sum, x } = useCalc()
  return (
    <div>
      <div>This is registeration</div>
      {/* <div className={classes.bubble}></div> */}

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-2">
          <label htmlFor="">First Name</label>
          <input type="text" {...register('firstName')} />
        </div>
        <div>
          <label htmlFor="">Last Name</label>
          <input
            style={{ borderWidth: '2px', borderRadius: '8px', borderColor: '#2050c0', paddingLeft: '4px', outline: 0 }}
            autoComplete="no"
            type="text"
            {...register('lastName', { required: true })}
          />
          {errors.lastName?.type && <div className="text-xs text-red-500">* Please enter your last name</div>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Register
