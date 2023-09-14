import { useState } from 'react'
import './App.css'
import './index.css'

function App() {
  const [color, setColor] = useState("white")
  return (
   <>
   <h2 className='text-3xl'>When You click on button then the card color chnge same as the button colo</h2>
    <div className=' w-full h-screen flex items-end mb-4 justify-center  '>
      
      <div className='card w-60 h-52 mb-5 absolute top-40 border-2 rounded-b-xl ' style={{ backgroundColor: color }}>
      </div>
      <div className='flex flex-wrap gap-5 mb-28 border border-double py-3 px-5 border-red-700 '>
        <button onClick={() => setColor("red")} className="bg-red-600 px-8 rounded-7 text-white">Red</button>
        <button onClick={() => setColor("green")} className="bg-green-600  text-white">Green</button>
        <button onClick={() => setColor("blue")} className="bg-blue-600  text-white">Blue</button>
        <button onClick={() => setColor("gray")} className="bg-gray-600  text-white">Gray</button>
        <button onClick={() => setColor("yellow")} className="bg-yellow-600  text-white">Yellow</button>
        <button onClick={() => setColor("orange")} className="bg-orange-600  text-white">Orange</button>
        <button onClick={() => setColor("#000")} className="bg-black  text-white"> Black</button>
        <button onClick={() => setColor("#fff")} className="bg-white  text-black">White</button>
      </div>
    </div>
    </>
  )
}

export default App
