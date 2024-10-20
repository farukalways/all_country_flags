import { useState } from 'react';
import './Country.css';

const Country = ({country, handleVisitedCountry}) => {
const {name, flags, population, area, cca3} = country;

const [visited, setVisited] = useState(false);

const handleVisited = () =>{
  setVisited(!visited)
}

const passWithParams = () =>{
  handleVisitedCountry(country)
}

  return (
    <div className="country">
         <h3>Name: {name.common} </h3>
         <img src={flags.png} />
         <p>Population: {population}</p>
         <p>area: {area}</p>
         <p><small>Code: {cca3}</small></p>
         <button onClick={passWithParams}>Mark visited</button>
         <button onClick={handleVisited}>Visited</button>
         {visited ? 'I have visited this country.' : 'I want to visited'}

    </div>
  );
};

export default Country;