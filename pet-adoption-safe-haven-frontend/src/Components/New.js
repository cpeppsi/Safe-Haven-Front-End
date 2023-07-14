import { useState } from "react";
import { useNavigate } from "react-router-dom";

function New() {
const navigate = useNavigate()

const [petInput, setPetInput] = useState({
name: '',
hasGluten: true,
image: ''
})

const handleChange = (e) => {
const value = e.target.value;
setPetInput({
...petInput,
[e.target.name]: value
});
}

const handleGlutenCheck = (e) => {
const checked = e.target.checked
setPetInput({
...petInput,
[e.target.name]: checked
});
}

const handleSubmit = async (e) => {
e.preventDefault()
const URL = `${process.env.REACT_APP_BACKEND_URI}/pets`
console.log('pet input', petInput)
const response = await fetch(URL, {
method: 'POST',
headers: {'Content-Type': 'application/json'},
body: JSON.stringify(petInput)
})
if (response.status !== 201) console.log('error')
}

return (
<form onSubmit={handleSubmit}>
<input required onChange={handleChange} value={petInput.name} name='name' placeholder='name' />
<input onChange={handleGlutenCheck} defaultChecked={petInput.hasGluten} value={petInput.hasGluten} name='hasGluten' type='checkbox' />
<input onChange={handleChange} value={petInput.image} name='image' placeholder='image' />
<input type='submit' />
</form>
)
}

export default New 
