import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import NavigationBar from './Navbar';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

interface PetData {
  _id: string;
  petImage: string;
  petName: string;
  petType: string;
  petGender: string;
  petBreed: string;
  petAge: string;
  petAdoptionStatus: string;
  petBio: string;
}

function Pet() {
  const [pet, setPet] = useState<PetData | null>(null);

  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const URL = `${process.env.REACT_APP_BACKEND_URI}/pets/${id}`;
      const response = await fetch(URL);
      const data: PetData = await response.json();
      console.log(data);
      setPet(data);
    };
    fetchData();
  }, [id]);

  const deletePet = async () => {
    const URL = `${process.env.REACT_APP_BACKEND_URI}/pets/${id}`;
    const response = await fetch(URL, {
      method: 'DELETE',
    });
    navigate('/');
    if (response.status !== 204) console.log('error');
  };

  const display = pet && (
    <div className="font-nice container-lg">
      {<NavigationBar />}
      <div style={{ backgroundColor: '#B5EB8D', textAlign: 'center' }}>
        <Card style={{
          display: 'inline-block',
          border: '2px solid #217605',
          margin: '5px',
          backgroundColor: "#217605",
          textAlign: 'center',
          marginTop: '8px',
          color: 'white',
          maxWidth: '35em',
        }}>
          <div className='card-body'>
            <img className='rounded' src={pet.petImage} alt="Pet" height={300} />
            <h1 className="p-2">{pet.petName}</h1>
            <p className="card-text">Species: {pet.petType}</p>
            <p className="card-text">Sex: {pet.petGender}</p>
            <p className="card-text">Breed: {pet.petBreed}</p>
            <p className="card-text">Age: {pet.petAge}</p>
            <p className="card-text">Adoption Status: {pet.petAdoptionStatus}</p>
            <p className="card-text">Bio: {pet.petBio}</p>
            <div>
              <Button variant='warning' onClick={() => navigate(`/pet/update/${id}`)}>Edit</Button>
              <Button variant='danger' onClick={deletePet}>Delete</Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );

  return (
    <div>
      {display}
    </div>
  );
}

export default Pet;
