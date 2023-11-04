'use client'
import Button from '@/app/components/Button'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { signIn } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'
import { inputs } from '@/utils/constant/forms'
type FormInputs = {
  email: string
  password: string
}

export default function Signin() {
  const router = useRouter()
  const {
    register,
    setError,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>()

  const handleSignIn = async (data: FormInputs) => {
    const loginData = {
      email: data.email,
      password: data.password,
      // callbackUrl: '/',
      // redirect: false,
    }
    const login = await signIn('credentials', loginData)
    console.log(login)
    if (login?.ok && login.url !== null) {
      router.push(login.url + '/test')
      console.log('test')
    }
  }

  const signUpRoute = () => {
    router.replace('signup')
  }

  const handleSignInError = (e: unknown) => {
    console.log(e)
  }

  return (
    <section className="flex h-screen w-screen items-center justify-center">
      {/* image */}
      <div className="flex h-[80vh] min-h-[500px] w-[95%] gap-x-2 rounded bg-blue-light p-4 sm:w-[80%] lg:w-2/3">
        <div className="w-1/2 rounded bg-white"></div>
        <div className="flex w-1/2 flex-col place-items-center justify-between gap-y-2 rounded bg-blue-primary p-6 md:p-12">
          {/* button  */}
          <div className="flex flex-nowrap space-x-4">
            {/* TODO make a component for this since it will be resused in header */}
            <Button
              key={'signin'}
              size="sm"
              className="whitespace-nowrap rounded-md bg-pink-500 text-white"
            >
              Sign In
            </Button>
            <Button
              key={'signup'}
              onClick={signUpRoute}
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
            onSubmit={handleSubmit(handleSignIn, handleSignInError)}
            action=""
            className="flex w-full flex-col items-center justify-center gap-y-2 "
          >
            {inputs.map(
              ({ value, label, placeHolder, icon, validation }, idx) => (
                <React.Fragment key={value}>
                  {value !== 'confirm' ? (
                    <div className="w-full space-y-1 text-left">
                      <label className="block text-white">{label}</label>
                      {/* input */}
                      <div className="flex border bg-blue-secondary px-4 py-1">
                        <input
                          {...register(value as keyof FormInputs, {
                            required: validation[0].required,
                            minLength: {
                              value:
                                value === 'password' ? 6 : 6 /* 6 for now */,
                              message: `Min lenght is ${
                                value === 'password' ? 6 : 6
                              }`,
                            },
                          })}
                          placeholder={placeHolder}
                          type="text"
                          className="h-full w-full bg-transparent py-2 text-sm text-white outline-none md:text-base"
                        />

                        <button type="button">{icon}</button>
                      </div>
                      <>
                        {errors && Object.keys(errors).includes(value) && (
                          <p role="alert" className="text-sm text-red-400">
                            {errors[value as keyof FormInputs]?.message}
                          </p>
                        )}
                      </>
                    </div>
                  ) : null}
                </React.Fragment>
              )
            )}
            <Button
              size="sm"
              type="submit"
              className="h-4 w-full bg-pink-500 px-6 py-1 text-white"
            >
              Sign In
            </Button>
          </form>

          <div className="mt-5 flex w-full flex-col ">
            <span className="text-center text-white">
              Doesn&apos;t have an account?&nbsp;
              <button onClick={signUpRoute} className=" text-pink-500">
                Singup
              </button>
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
