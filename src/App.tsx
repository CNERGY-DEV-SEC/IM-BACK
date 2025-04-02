import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Profile from './components/Profile.jsx'
import LoginButton from './components/LoginComponent.jsx'
import LogoutButton from './components/LogoutButton.jsx'
import {useAuth0} from '@auth0/auth0-react'





function App() {
  const { user, isAuthenticated } = useAuth0();
  return (
    <>
      
      {isAuthenticated ? (
        <>
          <h2>Welcome, {user?.name}</h2>
          <Profile />
          <LogoutButton />
        </>
      ) : (
        <>
        <h1>You need to login click the button below!</h1>
        <LoginButton />
      </>
      )}
      
    
    </>
  )
}

export default App
