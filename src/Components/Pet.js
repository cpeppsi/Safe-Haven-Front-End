import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import NavigationBar from './Navbar';

function Pet() {
  const [pet, setPet] = useState({})

  const { id } = useParams()

  const navigate = useNavigate()

  useEffect(() => {
    const fetchData = async () => {
      const URL = `${process.env.REACT_APP_BACKEND_URI}/pets/${id}`
      const response = await fetch(URL)
      const data = await response.json()
      console.log(data)
      setPet(data)
    }
    fetchData()
  }, [id])

  const deletePet = async () => {
    const URL = `${process.env.REACT_APP_BACKEND_URI}/pets/${id}`
    const response = await fetch(URL, {
        method: 'DELETE'
    })
    navigate('/');
    if (response.status !==204) console.log('error') // add error handling later   
  }

  const display = pet && (
    <div className = "font-nice container-lg">
      {<NavigationBar/>}
      <img src={pet.petImage} alt="Pet" height={300} />
      <h1>{pet.petName}</h1>
      <p>Species: {pet.petType}</p>
      <p>Sex: {pet.petGender}</p>
      <p>Breed: {pet.petBreed}</p>
      <p>Age: {pet.petAge}</p>
      <p>Adoption Status: {pet.petAdoptionStatus}</p>
      <p>Bio: {pet.petBio}</p>
      <div>
        <button onClick={() => navigate(`/pet/update/${id}`)}>Edit</button>
        <button onClick={deletePet}>Delete</button>
      </div>
    </div>
  )

  return (
    <div>
      {display}
    </div>
  )
}

export default Pet
