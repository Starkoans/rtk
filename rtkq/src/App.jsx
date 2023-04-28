import { useState } from 'react'
import Item from "./components/Item.jsx";


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Item
        item={{
          id: 1,
          name:'Capybara',
          description: 'Coconut dog.'
        }}
    ></Item>
      <Item
          item={{
            id: 2,
            name:'Penguin',
            description: 'Arctic bird.'
          }}
      ></Item>
    </>
  )
}

export default App
