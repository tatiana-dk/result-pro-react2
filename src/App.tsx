// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { Signin } from './form/Signin';
import { Signup } from './form/Signup.tsx';
import type {Control} from './form/types.ts';
import './App.css'

type Inputs = Control[];

function App() {
  const handleSubmit = (inputs: Inputs): void => {
    const inputsString = inputs.map(c => `${c.name}: ${c.value}`).join('\n');
    // const inputsString: string = Object.entries(inputs).reduce((acc, cur) => `${acc}${cur[0]}: ${cur[1]}\n`, '');
    alert(`Значения полей:\n${inputsString}`)
  };

  return (
    <div className="grid">
      <div className='column'>
        <Signin onSubmit={handleSubmit}/>
      </div>
      <div className='column'>
        <Signup onSubmit={handleSubmit} />
      </div>
    </div>
  )
}

export default App
