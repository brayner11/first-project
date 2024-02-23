const Person = ({ name, age }) => {
    return (
       <div>
        <h2>{name}</h2>
        <p>{age}</p>
        <button>delete</button>
       </div> 
    )
}

export default Person