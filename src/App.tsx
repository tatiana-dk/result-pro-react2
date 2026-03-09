// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { Signin } from './form/Signin';
import { Signup } from './form/Signup';
import './App.css'

interface Inputs {
  [key: string]: string;
};

function App() {
  const handleSubmit = (inputs: Inputs) => {
    const inputsString: string = Object.entries(inputs).reduce((acc, cur) => `${acc}${cur[0]}: ${cur[1]}\n`, '');
    alert(`Значения полей:\n${inputsString}`)
  };

  return (
    <div className="grid">
      <div className='column'>
        <Signin onSubmit={handleSubmit}/>
      </div>
      <div className='column'>
        <Signup />
      </div>
    </div>
  )
}

export default App
