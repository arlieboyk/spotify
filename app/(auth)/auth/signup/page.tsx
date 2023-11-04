'use client'
import Button from '@/app/components/Button'
import type { User } from '@prisma/client'
import { signIn } from 'next-auth/react'
import React, { useReducer } from 'react'
import { useForm } from 'react-hook-form'

type FormInputs = {
  email: string
  password: string
}

export default function Page() {
  const {
    register,
    setError,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>()
  const inputs = [
    {
      value: 'email',
      label: 'Email',
      placeHolder: 'Enter Email',
      icon: '',
    },
    {
      value: 'password',
      label: 'Password',
      placeHolder: 'Enter Password',
      icon: '',
    },
    {
      value: 'confirm',
      label: 'Confirm',
      placeHolder: 'Confirm Password',
      icon: '',
    },
  ]

  const handleSignInNavigation = () => {
    signIn()
  }

  const handleSignUp = (data: FormInputs) => {
    console.log(data)
    fetch('http://localhost:3000/api/singup', {
      method: 'POST',
      body: JSON.stringify(data), // Convert the data object to a JSON string
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        // Handle the response here if needed
      })
      .catch((error) => {
        console.error('Error:', error)
      })
  }

  const handleSingUpError = () => {}

  return (
    <section className="flex h-[100svh] w-screen items-center justify-center">
      {/* image */}
      <div className="flex h-[80svh] min-h-[500px] w-[95%] gap-x-2 rounded bg-blue-light p-4 sm:w-[80%] lg:w-2/3">
        <div className="w-1/2 rounded bg-white"></div>
        <div className="flex w-1/2 flex-col place-items-center justify-between gap-y-2 rounded bg-blue-primary p-6 md:p-12">
          {/* button  */}
          <div className="flex flex-nowrap space-x-4">
            {/* TODO make a component for this since it will be resused in header */}
            <Button
              onClick={handleSignInNavigation}
              size="sm"
              className="whitespace-nowrap rounded-md bg-pink-500 text-white"
            >
              Sign In
            </Button>
            <Button
              size="sm"
              className="whitespace-nowrap rounded-md bg-orange-500 text-white"
            >
              Sign Up
            </Button>
          </div>
          {/* icons */}
          <div className="flex space-x-2">
            <div className="h-8 w-8 rounded-full border-2 border-orange-400"></div>
            <div className="h-8 w-8 rounded-full border-2 border-orange-400"></div>
            <div className="h-8 w-8 rounded-full border-2 border-orange-400"></div>
          </div>
          <span className="text-center text-white">
            lorem ipsum media accounts
          </span>

          <div className="h-[1.5px]  w-full bg-slate-400" />
          <form
            onSubmit={handleSubmit(handleSignUp, handleSingUpError)}
            action=""
            className="flex w-full flex-col items-center justify-center gap-y-2 "
          >
            {inputs.map(({ value, label, placeHolder, icon }, idx) => (
              <div key={idx} className="w-full space-y-1 text-left">
                <label className="block text-white">{label}</label>
                {/* input */}
                <div className="flex rounded bg-blue-secondary px-4 py-1">
                  <input
                    {...register(value as keyof FormInputs)}
                    placeholder={placeHolder}
                    type="text"
                    className="h-full w-full bg-transparent py-2 text-sm text-white outline-none md:text-base"
                  />
                  <button type="button">{icon}</button>
                </div>
              </div>
            ))}
            <Button
              size="sm"
              className="h-4 w-full bg-pink-500 px-6 py-1 text-white"
            >
              Sign Up
            </Button>
          </form>

          <div className="mt-5 flex w-full flex-col ">
            <span className="text-center text-white">
              Or you have an account?
              <button
                onClick={handleSignInNavigation}
                className=" text-pink-500"
              >
                Signin
              </button>
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
