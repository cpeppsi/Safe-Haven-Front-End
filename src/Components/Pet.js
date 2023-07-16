import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Pet() {
  const [pet, setPet] = useState({})

  const { id } = useParams()

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

  return (
    <div>
      PET
    </div>
  )
}

export default Pet