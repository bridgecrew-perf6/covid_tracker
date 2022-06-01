import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCountries } from '../Redux/Countries/actions';
import './Sass/Countries.scss';

function Countries() {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries);
  useEffect(() => {
    dispatch(getCountries());
  }, []);
  return (
    <div className="container">
      {countries.map((country) => (
        <div key={country.id} className="card">
          <div className="flex">
            <h3>Country:</h3>
            <h3 className="#">{country.country}</h3>
          </div>
          <img src={country.flag} alt="covid-images" />
          <div className="flex">
            <h3>Population:</h3>
            <h3 className="t_bg">{country.population}</h3>
          </div>
          <div className="flex">
            <h3>Cases:</h3>
            <h3 className="t_bg">{country.cases}</h3>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Countries;
