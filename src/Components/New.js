import { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavigationBar from './Navbar';

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
      <form className onSubmit={handleSubmit}>
        <div>
          <label>
              Please input the URL for an image of the animal: <input type="text" name="petImage" placeholder="Animal image URL" value={petInput.petImage} onChange={handleChange}/>
          </label>
        </div>

        <div>
          <label>
              Please input the animal's name: <input type="text" name="petName" placeholder="Animal name" value={petInput.petName} onChange={handleChange} required/>
          </label>
        </div>

        <div>
          <label>
            Please select the animal's species: <select name="petType" value={petInput.petType} onChange={handleChange} required>
              <option value="">Select Pet Type</option>
              <option value="Dog">Dog</option>
              <option value="Cat">Cat</option>
              </select>
          </label>
        </div>

        <div>
          <label>
            Please select the animal's sex: <select name="petGender" value={petInput.petGender} onChange={handleChange} required>
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              </select>
          </label>
        </div>

        <div>
          <label>
            Please input the animal's breed:<input type="text" name="petBreed" placeholder="Animal breed" value={petInput.petBreed} onChange={handleChange}/>
          </label>
        </div>

        <div>
          <label>
              Please select the animal's age: <select name="petAge" value={petInput.petAge} onChange={handleChange} required>
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
              </select>
          </label>
        </div>

        <div>
          <label>
              Please select the animal's adoption status: <select name="petAdoptionStatus" value={petInput.petAdoptionStatus} onChange={handleChange} required>
                <option value="">Select Adoption Status</option>
                <option value='Coming Soon'>Coming Soon</option>
                <option value='Ready to Adopt'>Ready to Adopt</option>
                <option value='Pending Adoption'>Pending Adoption</option>
                <option value='Adopted'>Adopted</option>
              </select>
          </label>
        </div>

        <div>
          <label>
              Please briefly describe the animal's bio: <textarea name="petBio" placeholder="Animal bio" value={petInput.petBio} onChange={handleChange}/>
          </label>
        </div>
        <input type="submit"/>
      </form>
    </div>
  );
}

export default New