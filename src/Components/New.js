import { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavigationBar from './Navbar';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';


function New() {
  const navigate = useNavigate()

  const [petInput, setPetInput] = useState({
    petType: "",
    petName: "",
    isAdopted: "",
    gender: "",
    breed: "",
    color: "",
    age: "",
    image: "",
    bio: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setPetInput({
      ...petInput,
      [e.target.name]: value
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const URL = `${process.env.REACT_APP_BACKEND_URI}/pets`
    console.log('pet input', petInput)
    const response = await fetch(URL, {
      method: 'POST', 
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(petInput)
    })
    const data = await response.json()
    console.log('response', data)
    navigate('/')
  }

  //New Pet Form  
  return (
    <div className = "container-lg font-nice">
      {<NavigationBar/>}
      <Form className='p-3' onSubmit={handleSubmit} style={{backgroundColor:'#B5EB8D', color:"#217605"}} >
        <Row className='mb-3'>
          <Form.Group as={Col} style={{textAlign:'center'}}>
            <Form.Label>
                Please input the URL for an image of the animal: 
            </Form.Label>
            <Form.Control type="text" name="petImage" placeholder="Animal image URL" value={petInput.petImage} onChange={handleChange} style={{textAlign:'center'}}/>
          </Form.Group>

          <Form.Group as={Col} style={{textAlign:'center'}}>
            <Form.Label>
                Please input the animal's name:
            </Form.Label>
            <Form.Control type="text" name="petName" placeholder="Animal name" value={petInput.petName} maxLength={15} onChange={handleChange} required style={{textAlign:'center'}}/>
          </Form.Group>

          <Form.Group as={Col} style={{textAlign:'center'}}>
            <Form.Label>
              Please select the animal's species:
            </Form.Label>
            <Form.Select name="petType" value={petInput.petType} onChange={handleChange} required style={{textAlign:'center'}}> 
                <option value="">Select Pet Type</option>
                <option value="Dog">Dog</option>
                <option value="Cat">Cat</option>
            </Form.Select>
          </Form.Group>
        </Row>
        
        <Row className='mb-3'>
          <Form.Group as={Col} style={{textAlign:'center'}}>
            <Form.Label>
              Please select the animal's sex:
            </Form.Label>
            <Form.Select name="petGender" value={petInput.petGender} onChange={handleChange} required style={{textAlign:'center'}}>
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} style={{textAlign:'center'}}>
            <Form.Label>
              Please input the animal's breed:
            </Form.Label>
            <Form.Control type="text" name="petBreed" placeholder="Animal breed" maxLength={15} value={petInput.petBreed} onChange={handleChange} required style={{textAlign:'center'}}/>
          </Form.Group>

          <Form.Group as={Col} style={{textAlign:'center'}}>
            <Form.Label>
                Please select the animal's age: 
            </Form.Label>
            <Form.Select name="petAge" value={petInput.petAge} onChange={handleChange} required style={{textAlign:'center'}}>
              <option value="">Select Age</option>
              <option value="6-8 weeks">6-8 weeks</option>
              <option value="10-12 weeks">10-12 weeks</option>
              <option value="16-18 weeks">16-18 weeks</option>
              <option value="Under a year">under a year</option>
              <option value="1 year">1 year</option>
              <option value="2 years">2 years</option>
              <option value="3 years">3 years</option>
              <option value="4 years">4 years</option>
              <option value="5 years">5 years</option>
              <option value="6 years">6 years</option>
              <option value="7 years">7 years</option>
              <option value="8 years">8 years</option>
              <option value="9 years">9 years</option>
              <option value="10 years">10 years</option>
              <option value="11 years">11 years</option>
              <option value="12 years">12 years</option>
              <option value="13 years">13 years</option>
              <option value="14 years">14 years</option>
              <option value="15 years">15 years</option>
              <option value="Senior over 16 years">Senior over 16 years</option>
              </Form.Select>
          </Form.Group>
        </Row>

        <Row className='mb-3'>
          <Form.Group as={Col} style={{textAlign:'center'}}>
            <Form.Label>
                Please select the animal's adoption status:  
            </Form.Label>
            <Form.Select name="petAdoptionStatus" value={petInput.petAdoptionStatus} onChange={handleChange} required style={{textAlign:'center'}}>
                  <option value="">Select Adoption Status</option>
                  <option value='Coming Soon'>Coming Soon</option>
                  <option value='Ready to Adopt'>Ready to Adopt</option>
                  <option value='Pending Adoption'>Pending Adoption</option>
                  <option value='Adopted'>Adopted</option>
                </Form.Select>
          </Form.Group>

          <Form.Group as={Col} sm={8} style={{textAlign:'center'}}>
            <Form.Label>
                Please briefly describe the animal's bio: 
            </Form.Label>
            <Form.Control as='textarea' name="petBio" placeholder="Animal bio" maxLength={80} value={petInput.petBio} onChange={handleChange} style={{textAlign:'center'}}/>
          </Form.Group>
        </Row>
        <Form.Group className='mb-3 mx-auto w-50' style={{textAlign: 'center'}}>
          <p>All fields are required.</p>
          <Button type='submit' variant='success'>Submit</Button>
        </Form.Group>
      </Form>
    </div>
  );
}

export default New