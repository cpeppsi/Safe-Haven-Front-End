import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Pet() {
    const navigate = useNavigate()

    const [pet, setPet] = useState(null)

    const { id } = useParams()
    
    useEffect(() => {
        const fetchData = async () => {
            const URL = `${process.env.REACT_APP_BACKEND_URI}/pets/${id}`
            const response = await fetch(URL)
            const data = await response.json()
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
                <h1>{pet.name}</h1>
                <p>Has Gluten: {pet.hasGluten.toString()}</p>
                <img src={pet.image} alt={pet.name} height={300} />
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
