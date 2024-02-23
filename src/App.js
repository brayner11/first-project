import { useState } from 'react'
import Form from './Components/Form'
import Person from './Components/Person'

const App = () => {
  const [persons, setPersons] = useState([])
  const [nameInput, setNameInput] = useState("")
  const [ageInput, setAgeInput] = useState("")
 
  const handleSubmit = (e) => {
    e.preventDefault()
    setPersons([...persons, { name: nameInput, age: parseInt(ageInput)}])
    setNameInput("")
    setAgeInput("")
  }
  return (
    <div>
      <h1>Introduction to React</h1>
      <Form nameInput={nameInput}
      setNameInput={setNameInput}
      ageInput={ageInput}
      setAgeInput={setAgeInput}
      handleSubmit={handleSubmit}/>
    


{persons.map((person) => {
  return <Person name={person.name} age={person.age} />
})}
</div>
  )
}

export default App