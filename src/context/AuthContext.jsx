import React, { createContext, useState, useContext } from 'react'

const AuthContext = createContext(null)

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)

  const accounts = [
    { username: 'administrator', password: 'teadmin' },
    { username: 'root', password: 'rootadmin' },
  ]

  const login = (username, password) => {
    const foundUser = accounts.find((account) => account.username === username)

    if (foundUser && foundUser.password === password) {
      setUser({ username })
      return true
    }

    return false
  }

  const logout = () => {
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, accounts }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
