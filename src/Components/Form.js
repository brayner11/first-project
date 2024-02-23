import { useState } from "react"

const Form = () => {
    const [input, setInput] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        alert(`${input} says hello!!!`)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Enter your name:
                <input 
                    type="text"
                    value={input}
                    onChange={(event) => setInput(event.target.value)}
                />
            </label>
            <h1>{input}</h1>
            <input type="submit" />
        </form>
    )
}

export default Form