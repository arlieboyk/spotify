import { visitParameterList } from 'typescript'

interface User {
  name: string
  password: string
}

const user: Record<string, Partial<User>> = {
  string: {
    name: 'sss',
    password: '222',
  },
  2: {
    name: '2',
  },
}

const createUser = (username: string, password: string) => {
  return { username, password }
}

const userType = typeof createUser

const test = (param: Parameters<typeof createUser>) => {
  console.log(param[1])
}

console.log(test(['test', 'test']))
