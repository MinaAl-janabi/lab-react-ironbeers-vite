import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
const API='https://ih-beers-api2.herokuapp.com/beers/:id';
function BeerDetailsPage() {
    const [beerDetails, setBeerDetails] = useState(null);
    const {BeerId}=useParams();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const getBeer=() => {
        axios.get(`${API}/Beer/${BeerId}`)
        .then((Response)=>{
            setBeerDetails(Response.data);
        })
        .catch((error)=>console.log(error))
    };
    useEffect(()=>{
        getBeer();
    },[getBeer])
    return(
        <div className='BeerDetailsPage'>
            {beerDetails&&(
                <section className='imgCard'key={beerDetails.id}>
                   <img src='{Beer.image_url' ></img>
                   <h2>{beerDetails.name}</h2>
                   <p>{beerDetails.tagline}</p>
      <p>First Brewed: {beerDetails.first_brewed}</p>
      <p>Attenuation Level: {beerDetails.attenuation_level}</p>
      <p>Description: {beerDetails.description}</p>
      <p>Contributed By: {beerDetails.contributed_by}</p>
                </section>

            )}
        </div>
    )
}
export default BeerDetailsPage;
