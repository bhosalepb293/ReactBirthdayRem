
//Birthday Remainder
import React, {useState} from 'react'
import Data from './birthday/Data.js'
import './birthday/birthday.css'

const App = () => {
  const [data, setData]=useState(Data)
  return (
    <div className='App'>
      <section>
        <main>
      <h1>Today's Birthday {data.length}🍰</h1>
      {data.map((x)=>{
        return(
          <div className='Cards'>
            {/* <h1>{x.id}</h1> */}
            <img src={x.image} alt='' height={"80px"} width={"80px"}></img>
            <ruby><h3>{x.name}</h3>
            <p>{x.age}</p>
            </ruby>
          </div>
        )
      })}
      <button onClick={()=>setData([])}>Click here</button>
      </main>
      </section>
    </div>
  )
}

export default App



