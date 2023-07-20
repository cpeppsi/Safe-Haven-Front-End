import { useState } from "react";
import { useNavigate } from "react-router-dom";

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

  //Pet Form  
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
            Image URL:
            <input
            type="text"
            name="image"
            value={petInput.image}
            onChange={handleChange}
            />
        </label>
      </div>

      <div>
        <label>
            Pet Name:
            <input
                type="text"
                name="petName"
                value={petInput.petName}
                onChange={handleChange}
            />
        </label>
      </div>

      <div>
        <label>
            Pet Type:
            <select
            name="petType"
            value={petInput.petType}
            onChange={handleChange}
            >
            <option value="">Select Pet Type</option>
            <option value="dog">Dog</option>
            <option value="cat">Cat</option>
            </select>
        </label>
      </div>

      <div>
        <label>
            Gender:
            <select
            name="gender"
            value={petInput.gender}
            onChange={handleChange}
            >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            </select>
        </label>
      </div>

      <div>
        <label>
            Breed:
            <input
                type="text"
                name="breed" 
                value={petInput.breed}
                onChange={handleChange}
            />
        </label>
      </div>

      <div>
        <label>
            Age:
            <select
            name="age"
            value={petInput.age}
            onChange={handleChange}
            >
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
            Adoption Status:
            <select
            name="adoptionStatus"
            value={petInput.adoptionStatus}
            onChange={handleChange}
            >
              <option value='Select Adoption Status'>Select Adoption Status</option>
              <option value='Coming Soon'>Coming Soon</option>
              <option value='Ready to Adopt'>Ready to Adopt</option>
              <option value='Pending Adoption'>Pending Adoption</option>
              <option value='Adopted'>Adopted</option>
            </select>
        </label>
      </div>

      <div>
        <label>
            Bio:
            <textarea
            name="bio"
            value={petInput.bio}
            onChange={handleChange}
            />
        </label>
      </div>
      <input type="submit"/>
    </form>
  );

  // return (
  //   <form onSubmit={handleSubmit}>
  //     <input onChange={handleChange} value={petInput.category} name='category' placeholder='Dog, Cat, Other' />
  //     <input onChange={handleChange} value={petInput.petName} name='petName' placeholder='Name' />
  //     <input onChange={handleChange} value={petInput.gender} name='gender' placeholder='Female / Male' />
  //     <input onChange={handleChange} value={petInput.breed} name='breed' placeholder='Breed Here' />
  //     <input onChange={handleChange} value={petInput.age} name='age' placeholder='Age' />
  //     <input onChange={handleChange} value={petInput.image} name='image' placeholder='Image' />
  //     <input onChange={handleChange} value={petInput.bio} name='bio' placeholder='Bio' />
  //     <input type='submit' />
  //   </form>
  // )
}

export default New