import { useState } from "react"

const Form = ({ 
    handleSubmit, 
    ageInput, 
    setAgeInput, 
    nameInput, 
    setNameInput 
    }) => {

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Enter your name:
                <input 
                    type="text"
                    value={nameInput}
                    onChange={(event) => setNameInput(event.target.value)}
                />
            </label>
            <label>
                Enter your age:
                <input
                    type="text"
                    value={ageInput}
                    onChange={(event) => setAgeInput(event.target.value)}
                />
            </label>
            <input type="submit" />
        </form>
    )
}

export default Form