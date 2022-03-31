import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function FetchData() {
    const [data, setData] = useState(null);

    async function fetchData() {

        const url = "https://ih-countries-api.herokuapp.com/countries";
        const response = await fetch(url);

        const data = await response.json();
        console.log(data);
        setData(data.results[0]);
    }

    useEffect(() => {
        fetchData();

        const id = setInterval(() => {
            fetchData();
        }, 2000);

        return () => {
            clearInterval(id);
        };
    }, []);

    return (
        <div>
            <Link to={data}></Link>
        </div>
    );
}

export default FetchData;