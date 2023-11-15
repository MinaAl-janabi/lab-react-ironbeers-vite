import { useState } from "react";
import axios from "axios";
const API = "https://ih-beers-api2.herokuapp.com/beers/new";
function AddBeerPage(props) {
  const [input, setinput] = useState("");

  const handleInput = (e) => {
    e.preventDefault();
    const id = beerInt(props.BeerId);
    const requestBody = {
      input: input,
      textarea: textarea,
      BeerId: id,
    };
    axios
      .post(`${API}`, input, requestBody)
      .then((response) => {
        props.callbackToUpdateProject();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="AddBeer">
      <h3>Add New Beer</h3>

      <div onSubmit={handleInput}>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" />
        </div>
        <div>
          <label htmlFor="tagline">Tagline</label>
          <input type="text" id="tagline" name="tagline"></input>{" "}
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <textarea id="description" name="description" />
        </div>
        <div>
          <label htmlFor="first_brewed">First Brewed</label>
          <input type="text" id="first_brewed" name="first_brewed" />
        </div>
        <div>
          <label htmlFor="brewers_tips">Brewer Tips</label>
          <input type="text" id="brewers_tips" name="brewers_tips" />
        </div>
        <div>
          <label htmlFor="attenuation_level">Attenuation Level</label>
          <input
            type="number"
            id="attenuation_level"
            name="attenuation_level"
          />
        </div>
        <div>
          <label htmlFor="contributed_by">Contributed By</label>
          <input type="text" id="contributed_by" name="contributed_by" />
        </div>
        <div>
          <button type="submit">Add Beer</button>
        </div>
      </div>
    </div>
  );
}

export default AddBeerPage;
