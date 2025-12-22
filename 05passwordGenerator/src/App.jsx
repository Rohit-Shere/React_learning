import { useState, useCallback, useEffect, useRef } from 'react'


function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] =useState(false)
  const [charAllowed, setCharAllowed]= useState(false)
  const [password, setPassword]= useState("")
  const passwordRef = useRef(null)

  const passwordGenerator= useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*()_+=-[]{}~"

    for (let i  = 1; i <= length; i++) {
      let char = Math.floor(Math.random() *str.length +1)
      pass += str.charAt(char)
    }

    setPassword(pass)
  } , [length, numberAllowed, charAllowed, setPassword])

  useEffect(() =>{
    passwordGenerator()
  },
  [length, numberAllowed, charAllowed, passwordGenerator]
)
  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  },[password])


  return (
    <>
      <div className="w-full h-fit max-w-md mx-auto shadow-md rounded-lg px-4 my-8 py-3 text-center text-white bg-gray-800" >
        Password Generator
        <div className="flex shadow rounded-lg overflow-hidden mb-4 bg-gray-400 my-1 ">
        <input type="text" 
          value= {password}
          className='outline-none w-full py-2 px-4'
          placeholder='password'
          readOnly
          ref={passwordRef}
        />
        <button className="className = mx-1 bg-teal-500 py-2 outline-none px-4 h-full "
        onClick={copyPasswordToClipboard}
        >Copy</button>
      </div>

        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input type="range"
              min ={6}
              max ={25}
              value= {length}
              className='cursor-pointer'
              onChange={(e) => {setLength(e.target.value)}}
            />
            <label htmlFor="">Length:{length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox"
              className='w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft'
              defaultChecked={numberAllowed}
              placeholder='Number'
              onChange={() => {
              setNumberAllowed((prev) => !prev);
          }}
            />
            <label for="checked-checkbox" class="select-none ms-2 text-sm font-medium text-heading">Number</label>
          </div>

          <div class="flex items-center">
              <input 
              defaultChecked={charAllowed} id="checked-checkbox" type="checkbox" value="" class="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft"
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }} />
              <label for="checked-checkbox" class="select-none ms-2 text-sm font-medium text-heading">Special Chars</label>
          </div>
        </div>


      </div>

      
    </>
  )
}

export default App
