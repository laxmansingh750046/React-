import { useState, useCallback, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState();

  //useRef hook
  const passwordRef = useRef(null);
  
  const passwordGenerator = useCallback(()=>{
    let pass = "";
    let str ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numAllowed) str += "0123456789";
    if(charAllowed) str += "!@#$%^&*()-_=+[]{}|;:',.<>?/";

    for(let i=0;i<length;i++){
      pass += str.charAt(Math.floor(Math.random()*str.length));
    }
    setPassword(pass);
  },[length, numAllowed, charAllowed, setPassword])
  
  const copypasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  },[password])

  useEffect(()=>{
    passwordGenerator();
  },[length, numAllowed, charAllowed, passwordGenerator])
  return (
    <>
       <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700'>
        <h1 className='text-white text-center'>password generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input 
          type="text" 
          value={password}
          className='outline-none w-full px-3 py-1'
          placeholder='password'
          readOnly
          ref={passwordRef}
          />
          <button
          onClick={copypasswordToClipboard}
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 hover:bg-blue-500 hover:scale-102' 
          >copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
            type="range" 
            id="lengthtInput"
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e)=>setLength(e.target.value)}
            />
            <label htmlFor='lengthInput'>length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox" 
            defaultChecked ={numAllowed}
            id="numberInput"
            onChange={()=>setNumAllowed(prev=>!prev)}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox" 
            defaultChecked ={numAllowed}
            id="charInput"
            onChange={()=>setCharAllowed(prev=>!prev)}
            />
            <label htmlFor="charInput">Characters</label>
          </div>
        </div>
       </div>
    </>
  )
}

export default App
