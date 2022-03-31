import React from 'react';
import { useParams } from 'react-router-dom';
import allCountries from '../countries.json'

export function CountryDetails(country) {

    const imgUrl = 'https://flagpedia.net/data/flags/icon/72x54/de.png';
    const params = useParams();
    console.log('The params', params);
    const countryObj = allCountries.find((country) => {
        return country.alpha3Code === params.alpha3Code;
    });

    return (
        <>
            <div>
                <h1>Country Details</h1>
                <h3>{countryObj.name.common}</h3>
            </div>

            <img
                src={imgUrl + countryObj.alpha2Code + '.png'}
                alt={country.name.common}
            ></img>
        </>
    );
}

export default CountryDetails;