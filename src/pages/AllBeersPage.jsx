import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function AllBeersPage() {
const [Beer,setBeer]=useState([]);
const getAllBeers =() => {
    axios.get("https://ih-Beers-api2.herokuapp.com/Beers"
    )
    .then((response) => {
        setBeer(response.data);
        console.log(response);
    })
        .catch((error) => {
            console.log(error);})
            
        };
    useEffect(() => {
        getAllBeers();
    }, []);
return(
    <div className="Beers">
    {Beer.map(() => (
            
      <div key={Beer.Id}>
        <img src={Beer.image_url} alt={Beer.name} />
        <h3>{Beer.name}</h3>
        <p>{Beer.tagline}</p>
        <p>ContriButed By: {Beer.contriButed_By}</p>
        <Link to={`/beers/:beerId/${Beer.id}`}></Link>
      </div>
    ))}
  </div>
);
}



export default AllBeersPage;
