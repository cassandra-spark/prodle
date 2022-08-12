import { createContext } from 'react'

const user = {
  user: null,
  setUser: (_user) => {},
  clearUser: () => {},
}

const UserContext = createContext(user)

export default UserContext
