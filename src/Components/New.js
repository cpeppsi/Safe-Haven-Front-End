import { useState } from "react";
import { useNavigate } from "react-router-dom";

function New() {
  const navigate = useNavigate()

  const [petInput, setPetInput] = useState({
    category: '',
    petName: '',
    gender: '',
    breed: '',
    age: '',
    image: '',
    bio: ''
  })

  const handleChange = (e) => {
    const value = e.target.value;
    setPetInput({
      ...petInput,
      [e.target.name]: value
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
    const data = await response.json()
    console.log('response', data)
    navigate('/')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input onChange={handleChange} value={petInput.category} name='category' placeholder='Dog, Cat, Other' />
      <input onChange={handleChange} value={petInput.petName} name='petName' placeholder='Name' />
      <input onChange={handleChange} value={petInput.gender} name='gender' placeholder='Female / Male' />
      <input onChange={handleChange} value={petInput.breed} name='breed' placeholder='Breed Here' />
      <input onChange={handleChange} value={petInput.age} name='age' placeholder='Age' />
      <input onChange={handleChange} value={petInput.image} name='image' placeholder='Image' />
      <input onChange={handleChange} value={petInput.bio} name='bio' placeholder='Bio' />
      <input type='submit' />
    </form>
  )
}

export default New