import { useState, useEffect } from "react";

function App() {
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
        <p>{pet.petName}</p>
      </div>
    )
  })

  return (
    <div>
      <h1>Safe-Haven CRUD</h1>
      {display}
    </div>
  );
}

export default App;
