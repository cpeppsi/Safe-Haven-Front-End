import React, { useState } from "react";
import axios from "axios";


const New = () => {
  const [petInput, setPetInput] = useState({
    petType: "",
    petName: "",
    gender: "",
    breed: "",
    age: "",
    adoptionStatus: "",
    image: "",
    introduction: "",
    details: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPetInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/pets", petInput);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Pet Type:
        <select
          name="petType"
          value={petInput.petType}
          onChange={handleChange}
          required
        >
          <option value="">Select Pet Type</option>
          <option value="Dog">Dog</option>
          <option value="Cat">Cat</option>
        </select>
      </label>

      <label>
        Pet Name:
        <input
            type="text"
            name="petName"
            value={petInput.petName}
            onChange={handleChange}
            required
        />
      </label>

      <label>
        Gender:
        <select
          name="gender"
          value={petInput.gender}
          onChange={handleChange}
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </label>

      <label>
        Breed:
        <input
            type="text"
            name="breed" 
            value={petInput.breed}
            onChange={handleChange}
            required
        />
      </label>

      <label>
        Age:
        <select
          name="age"
          value={petInput.age}
          onChange={handleChange}
          required
        >
          <option value="">Select Age</option>
          <option value="6-8 weeks">6-8 weeks</option>
          <option value="10-12 weeks">10-12 weeks</option>
          <option value="16-18 weeks">16-18 weeks</option>
          <option value="under a year">under a year</option>
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

      <label>
        Adoption Status:
        <select
          name="Adoption Status"
          value={petInput.adoptionStatus}
          onChange={handleChange}
        >
        <option value=''>Select Adoption Status</option>
        <option value='Coming Soon'>Coming Soon</option>
        <option value='Ready to Adopt'>Ready to Adopt</option>
        <option value='Pending Adoption'>Pending Adoption</option>
        <option value='Adopted'>Adopted</option>
        </select>
      </label>

      <label>
        Image URL:
        <input
          type="text"
          name="image"
          value={petInput.image}
          onChange={handleChange}
        />
      </label>

      <label>
        Introduction:
        <textarea
          name="introduction"
          value={petInput.introduction}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Details:
        <textarea
          name="details"
          value={petInput.details}
          onChange={handleChange}
          required
        />
      </label>

      <button type="submit">Submit</button>
    </form>
  );
};

export default New;

