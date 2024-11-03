import { useState } from 'react'
import axios from 'axios'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const link = import.meta.env.VITE_LINK;
  const [text, setText] = useState('')

  const handleClick = () => {
    axios.post(`${link}/write`, { content: text })
    setText('')
  }

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <textarea
          style={{ height: "500px" }}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={handleClick}>Submit</button>
      </div>
    </>
  )
}

export default App