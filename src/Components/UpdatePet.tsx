import React, { useState, useEffect, ChangeEvent } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import NavigationBar from './Navbar';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

interface PetInput {
  petImage: string;
  petName: string;
  petType: string;
  petGender: string;
  petBreed: string;
  petAge: string;
  petAdoptionStatus: string;
  petBio: string;
}

function UpdatePet() {
  const navigate = useNavigate();

  const [petInput, setPetInput] = useState<PetInput>({
    petImage: "",
    petName: "",
    petType: "",
    petGender: "",
    petBreed: "",
    petAge: "",
    petAdoptionStatus: "",
    petBio: "",
  });

  const { id } = useParams();
  const URL = `${process.env.REACT_APP_BACKEND_URI}/pets/${id}`;

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(URL);
      const data: PetInput = await response.json();
      setPetInput(data);
    };

    fetchData();
  }, [id, URL]);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setPetInput({
      ...petInput,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await fetch(URL, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(petInput),
    });

    if (response.status !== 204) console.log('error!'); // add error handling later
    navigate(`/pets/${id}`);
  };

  // Update Pet Form

  const display = petInput && (
    <div className="container-lg font-nice">
      {<NavigationBar />}
      <Form className='p-3' onSubmit={handleSubmit} style={{ backgroundColor: '#B5EB8D', color: "#217605" }}>
        <Row className='mb-3'>
          <Form.Group as={Col} style={{ textAlign: 'center' }}>
            <Form.Label>
              Animal image URL:
            </Form.Label>
            <Form.Control type='text' onChange={handleChange} value={petInput.petImage} name='petImage' required placeholder='Animal image URL' style={{ textAlign: 'center' }} />
          </Form.Group>

          <Form.Group as={Col} style={{ textAlign: 'center' }}>
            <Form.Label>
              Animal's name:
            </Form.Label>
            <Form.Control type='text' onChange={handleChange} value={petInput.petName} name='petName' required placeholder='Animal name' style={{ textAlign: 'center' }} />
          </Form.Group>

          <Form.Group as={Col} style={{ textAlign: 'center' }}>
            <Form.Label>
              Animal's species:
            </Form.Label>
            <Form.Select onChange={handleChange} value={petInput.petType} name='petType' required placeholder='Animal species' style={{ textAlign: 'center' }}>
              <option value=''>Select Pet Type</option>
              <option value='Dog'>Dog</option>
              <option value='Cat'>Cat</option>
            </Form.Select>
          </Form.Group>
        </Row>

        <Row className='mb-3'>
          <Form.Group as={Col} style={{ textAlign: 'center' }}>
            <Form.Label>
              Animal's gender:
            </Form.Label>
            <Form.Select onChange={handleChange} value={petInput.petGender} name='petGender' required style={{ textAlign: 'center' }}>
              <option value=''>Select Gender</option>
              <option value='Male'>Male</option>
              <option value='Female'>Female</option>
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} style={{ textAlign: 'center' }}>
            <Form.Label>
              Animal's breed:
            </Form.Label>
            <Form.Control type='text' onChange={handleChange} value={petInput.petBreed} name='petBreed' placeholder='Animal breed' required style={{ textAlign: 'center' }} />
          </Form.Group>

          <Form.Group as={Col} style={{ textAlign: 'center' }}>
            <Form.Label>
              Animal's age:
            </Form.Label>
            <Form.Select onChange={handleChange} value={petInput.petAge} name='petAge' required style={{ textAlign: 'center' }}>
              <option value=''>Select Age</option>
              <option value='Puppy 0-6 weeks'>0-6 weeks</option>
              <option value='Puppy 6-8 weeks'>6-8 weeks</option>
              <option value='Puppy 10-12 weeks'>10-12 weeks</option>
              <option value='Puppy 16-18 weeks'>16-18 weeks</option>
              <option value='Puppy under a year'>under a year</option>
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
            </Form.Select>
          </Form.Group>
        </Row>

        <Row className='mb-3'>
          <Form.Group as={Col} style={{ textAlign: 'center' }}>
            <Form.Label>
              Animal's adoption status:
            </Form.Label>
            <Form.Select onChange={handleChange} value={petInput.petAdoptionStatus} name='petAdoptionStatus' required style={{ textAlign: 'center' }}>
              <option value=''>Select Adoption Status</option>
              <option value='Coming Soon'>Coming Soon</option>
              <option value='Ready to Adopt'>Ready to Adopt</option>
              <option value='Pending Adoption'>Pending Adoption</option>
              <option value='Adopted'>Adopted</option>
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} style={{ textAlign: 'center' }}>
            <Form.Label>
              Animal's bio:
            </Form.Label>
            <Form.Control as='textarea' onChange={handleChange} value={petInput.petBio} name='petBio' placeholder='Animal bio' required style={{ textAlign: 'center' }} />
          </Form.Group>
        </Row>
        <Form.Group className='mb-3 mx-auto w-50' style={{ textAlign: 'center' }}>
          <p>All fields are required.</p>
          <Button type='submit' variant='success'>Submit</Button>
        </Form.Group>
      </Form>
    </div>
  );

  return (
    <div>
      {display}
    </div>
  );
}

export default UpdatePet;
