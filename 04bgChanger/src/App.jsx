import { useState } from 'react'


function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className='w-full h-screen duration-200'
       style={{backgroundColor:color}}>

        <div className='fixed  flex flex-wrap  bottom-12  insert-x-2 px-20'>
           <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl '>
            <button className='outline-none px-4 py-1 rounded-full shadow-lg ' 
            onClick={()=>setColor('red')}
            style={{
              backgroundColor:'red'
            }}>Red</button>
            <button className='outline-none px-4 py-1 rounded-full shadow-lg '
             onClick={()=>setColor('green')} 
            style={{
              backgroundColor:'green'
            }}>Green</button>
            <button className='outline-none px-4 py-1 rounded-full shadow-lg ' 
             onClick={()=>setColor('blue')}
            style={{
              backgroundColor:'blue'
            }}>Blue</button>
           </div>
        </div>
    </div>
  )
}

export default App
