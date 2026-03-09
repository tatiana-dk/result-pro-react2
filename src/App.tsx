// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { Signin } from './form/Signin';
import { Signup } from './form/Signup';
import './App.css'

function App() {
  return (
    <div className="grid">
      <div className='column'>
        <Signin />
      </div>
      <div className='column'>
        <Signup />
      </div>
    </div>
  )
}

export default App
