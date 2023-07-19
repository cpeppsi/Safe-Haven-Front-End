import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

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
    if (response.status !==204) console.log('error') // add error handling later   
  }

  const display = pet && (
    <div>
      <img src={pet.image} alt={pet.petName} height={300} />
      <h1>{pet.petName}</h1>
      <p>{pet.petType}</p>
      <p>{pet.gender}</p>
      <p>{pet.breed}</p>
      <p>{pet.age}</p>
      <p>{pet.adoptionStatus}</p>
      <p>{pet.bio}</p>
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
