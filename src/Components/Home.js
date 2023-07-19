import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card'


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
        <Card style={{ display: 'inline-block'}} key={pet._id}>
          <img src='/images/pets-placeholder2.png' alt="pet placeholder" />
          <Link to={`/pets/${pet._id}`}>
            <h4 style={{textAlign:'center'}}>{pet.petName}</h4>
          </Link>
        </Card>
    )
  })

  return (
    <div className='container-lg'>
      <h1 className='text-center'>Safe Haven Pet Adoption</h1>
      <img src="/images/pets.jpg" alt="Dog & Cat Cuddles" className='rounded img-fluid d-block mx-auto mt-4'/>
      <div className='text-center p-4'>
        Photo by <a href="https://unsplash.com/photos/9gz3wfHr65U">Krista Mangulsone</a> on <a href="https://unsplash.com/s/photos/dogs-and-cats?license=free">Unsplash</a>
      </div>
      {display}
    </div>
  );
}

export default Home;
