import { useState } from "react"

const Input = ({redButtonFunc})=> {
    const [localStorage, setLocalStorage] = useState("")
    const handleChange = (e) =>{
        console.log(localStorage)
        setLocalStorage(e.target.value)
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        redButtonFunc(localStorage)
        console.log(localStorage)
        setLocalStorage('')
    }

    return(
<form onSubmit={handleSubmit}>
    <input type = 'text' value={localStorage} onChange = {handleChange}></input>
    <input type = 'submit'></input>
</form>
    )
}

export default Input