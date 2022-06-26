import { useState, useEffect } from 'react'

import '../styles/globals.css'
import UserContext from '../api/user/context'

function MyApp({ Component, pageProps }) {
  const [ user, setUser ] = useState(null)

  const doSetUser = (data) => {
    setUser(data)
    window.localStorage.setItem('user', JSON.stringify(data))
  }

  const clearUser = () => {
    setUser(null)
    window.localStorage.clear()
  }

  useEffect(() => {
    const data = localStorage.getItem('user')
    if (data) setUser(JSON.parse(data))
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser: doSetUser, clearUser }}>
      <Component {...pageProps} />
    </UserContext.Provider>
  )
}

export default MyApp
