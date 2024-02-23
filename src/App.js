import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([])
  const [nameInput, setNameInput] = useState("")
  const [ageInput, setAgeInput] = useState("")
  return (
    <div>
      <h1>Introduction to React</h1>
    </div>
  )
}

export default App