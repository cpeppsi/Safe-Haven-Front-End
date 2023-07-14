import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function UpdatePet() {
    const navigate = useNavigate()

    const [petInput, setPetInput] = useState(null)

    const { id } = useParams()
    const URL = `${process.env.REACT_APP_BACKEND_URI}/pets/${id}`

useEffect(() => {
    const fetchData = async () => {
    const response = await fetch(URL)
    const data = await response.json()
    setPetInput(data)
}

fetchData()
}, [id, URL])

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
const response = await fetch(URL, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(petInput)
})
    if (response.status !== 204) console.log('error!') // add error handling later
        navigate(`/pet/${id}`)
}

const categories = ['Dog', 'Cat', 'Other'];

const display = petInput && (
  <form onSubmit={handleSubmit}>
    <select required onChange={handleChange} value={petInput.category} name='category'>
      {categories.map(category => (
        <option key={category} value={category}>{category}</option>
      ))}
    </select>
    <input required onChange={handleChange} value={petInput.name} name='name' placeholder='Name' />
    <input onChange={handleGlutenCheck} defaultChecked={petInput.hasGluten} value={petInput.hasGluten} name='hasGluten' type='checkbox' />
    <input onChange={handleChange} value={petInput.image} name='image' placeholder='image' />
    <input type='submit' />
  </form>
);  

const display = petInput && (
    <form onSubmit={handleSubmit}>
        <input required onChange={handleChange} value={petInput.category} category=['Dog', 'Cat', 'Other'] />
        <input required onChange={handleChange} value={petInput.name} name='Name' placeholder='Name' />
        <input onChange={handleGlutenCheck} defaultChecked={petInput.hasGluten} value={pet.hasGluten} name='hasGluten' type='checkbox' />
        <input onChange={handleChange} value={petInput.image} name='image' placeholder='image' />
        <input type='submit' />
    </form>
)

return (
    <div>
        {display}
    </div>
)
}

export default UpdatePet 
