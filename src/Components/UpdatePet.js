import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import NavigationBar from './Navbar';

function UpdatePet() {
    const navigate = useNavigate()

    const [petInput, setPetInput] = useState({})

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

const handleSubmit = async (e) => {
    e.preventDefault()
const response = await fetch(URL, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(petInput)
})
    if (response.status !== 204) console.log('error!') // add error handling later
        navigate(`/pets/${id}`)
}


// Update Pet Form

const display = petInput && (
  <div className = "container-lg font-nice">
    {<NavigationBar/>}
    <form name='editPet' onSubmit={handleSubmit}>
      <div>
        <label>
          Animal image URL: <input onChange={handleChange} value={petInput.petImage} name='petImage' placeholder='Animal image URL' />
        </label>
      </div>
      <div>
        <label>
          Animal's name: <input onChange={handleChange} value={petInput.petName} name='petName' required placeholder='Animal name' />
        </label>
      </div>
      <div>
        <label>
          Animal's species: <select onChange={handleChange} value={petInput.petType} name='petType' required>
            <option value=''>Select Pet Type</option>
            <option value='Dog'>Dog</option>
            <option value='Cat'>Cat</option>
          </select>
        </label>
      </div>
      <div>
        <label>
          Animal's gender: <select onChange={handleChange} value={petInput.petGender} name='petGender' required>
            <option value=''>Select Gender</option>
            <option value='Male'>Male</option>
            <option value='Female'>Female</option>
          </select>
        </label>
      </div>
      <div>
        <label>
          Animal's breed: <input onChange={handleChange} value={petInput.petBreed} name='petBreed' placeholder='Animal breed' />
        </label>
      </div>
      <div>
        <label>
          Animal's age: <select onChange={handleChange} value={petInput.petAge} name='petAge' required>
            <option value=''>Select Age</option>
            <option value='Puppy 6-8 weeks'>Puppy 6-8 weeks</option>
            <option value='Puppy 10-12 weeks'>Puppy 10-12 weeks</option>
            <option value='Puppy 16-18 weeks'>Puppy 16-18 weeks</option>
            <option value='Puppy under a year'>Puppy under a year</option>
            <option value='1 year'>1 year</option>
            <option value='2 years'>2 years</option>
            <option value='3 years'>3 years</option>
            <option value='4 years'>4 years</option>
            <option value='5 years'>5 years</option>
            <option value='6 years'>6 years</option>
            <option value='7 years'>7 years</option>
            <option value='8 years'>8 years</option>
            <option value='9 years'>9 years</option>
            <option value='10 years'>10 years</option>
            <option value='11 years'>11 years</option>
            <option value='12 years'>12 years</option>
            <option value='13 years'>13 years</option>
            <option value='14 years'>14 years</option>
            <option value='15 years'>15 years</option>
            <option value='Senior over 16 years'>Senior over 16 years</option>
          </select>
        </label>
      </div>
      <div>
        <label>
            Animal's adoption status: <select onChange={handleChange} value={petInput.petAdoptionStatus} name='petAdoptionStatus' required>
              <option value=''>Select Adoption Status</option>
              <option value='Coming Soon'>Coming Soon</option>
              <option value='Ready to Adopt'>Ready to Adopt</option>
              <option value='Pending Adoption'>Pending Adoption</option>
              <option value='Adopted'>Adopted</option>
          </select>
        </label>
      </div>
      <div>
        <label>
          Animal's bio: <textarea onChange={handleChange} value={petInput.petBio} name='petBio' placeholder='Animal bio' />
        </label>
      </div>
      <div>
        <label>
          <input type='submit' />
        </label>
      </div>
    </form>
  </div>
);  

return (
    <div>
        {display}
    </div>
)
}

export default UpdatePet 
