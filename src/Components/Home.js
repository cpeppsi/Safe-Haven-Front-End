import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import NavigationBar from './Navbar';


function Home() {
  const [pets, setPets] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const URL = `${process.env.REACT_APP_BACKEND_URI}/pets`
      const response = await fetch(URL, {
        mode: 'no-cors',
        method: "post",
        headers: {
             "Content-Type": "application/json"
        },
        body: JSON.stringify(ob)
      })
      const data = await response.json()
      setPets(data)
    }

    fetchData()
  }, [])

  const display = pets.map(pet => {
    return (
        <Card style={{ 
          display: 'inline-block', 
          border:'2px solid #217605', 
          margin: '5px', 
          backgroundColor:"#217605",
          }} key={pet._id}>
          <img src={pet.petImage} alt="Pet"/>
          <Link to={`/pets/${pet._id}`} style={{color:'#B5EB8D'}}>
            <h5 style={{textAlign:'center', marginTop: '8px', color:'white'}}>{pet.petName}</h5>
          </Link>
        </Card>
    )
  })

  return (
    <div className='container-lg font-nice'>
      {<NavigationBar/>}
      <div  style={{position:'relative'}}>
        <img
          src="https://images.unsplash.com/photo-1450778869180-41d0601e046e"
          alt="Dog & Cat Cuddles"
          className="object-fit-cover img-fluid m0"
        />
        <div className='p-2' style={{
          position:'absolute', 
          bottom:'0px', 
          zIndex:'1', 
          marginLeft: 'auto', 
          marginRight:'auto', 
          width:'100%', 
          textAlign: 'center', 
          color:'black', 
          backgroundColor:'rgb(255,255,255, 0.5)'}}>
          Photo by <a href="https://unsplash.com/photos/9gz3wfHr65U">Krista Mangulsone</a> on <a href="https://unsplash.com/s/photos/dogs-and-cats?license=free">Unsplash</a>
        </div>
      </div>
      <div style={{
        width:'100%',
        margin:'auto', 
        textAlign:'center', 
        backgroundColor:'#B5EB8D',
        backgroundImage: 'repeating-linear-gradient(30deg, #ffffff 0, #ffffff 1px, #a7e57b 0, #a7e57b 2%)'
        }}>
        <h2 style={{
            paddingTop:'12px', 
            color: 'darkgreen', 
            fontWeight: '700'
          }}>Our Pets</h2>
        {display}
      </div>
    </div>
  );
}

export default Home;
