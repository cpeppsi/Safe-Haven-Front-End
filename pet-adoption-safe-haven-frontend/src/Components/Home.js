import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [pets, setPets] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const URL = `${process.env.REACT_APP_BACKEND_URI}/pets`
      const response = await fetch(URL)
      const data = await response.json()
      setPets(data)
    }

    fetchData()
  }, [])

  const display = pets.map(pet => {
    return (
      <div key={pet._id}>
        <Link to={`/pet/${pet._id}`}>
          {pet.name}
        </Link>
      </div>
    )
  })

  return (
    <div>
      <h1>Pet Adoption Safe Haven</h1>
      {display}
    </div>
  );
}

export default Home;