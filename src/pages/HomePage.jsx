import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import BeerDetailsPage from "./BeerDetailsPage";


const HomePage = () => {
  return (
    <div>
      <h1> IronBeers</h1>
      <Navbar/>

      <Link to="/beers">
        <img src="src/assets/beers.png" alt="All Beers" />
        <p>All Beers</p>{" "}
      </Link>
      <Link to="/random-beer">
        <img src="src/assets/random-beer.png" alt="Random Beer" />
        <p>Random Beer</p>{" "}
      </Link>
      <Link to="/new-beer">
        <img src="src/assets/new-beer.png" alt="New Beer" />
        <p>New Beer</p>{" "}
      </Link>
    </div>
  );
};

export default HomePage;
