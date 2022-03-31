import { Link } from 'react-router-dom';

function CountriesList({ countries }) {
    return (
        <div>
            {countries.map((country, index) => {
                return (
                    <div>
                        <Link to={country.alpha3Code}>{country.name.common}</Link>
                    </div>
                );
            })}
        </div>
    );
}

export default CountriesList;