import { useState } from "react"

const Form = () => {
    const [input, setInput] = useState('')

    const handleSubmit = () => {}

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Enter your name:
                <input 
                

                />
            </label>
            <input type="submit" />
        </form>
    )
}

export default Form