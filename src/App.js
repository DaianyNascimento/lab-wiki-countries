import './App.css';
import { Route, Routes } from 'react-router-dom';
import CountriesList from './components/CountriesList';
import CountryDetail from './components/CountryDetails';
import Navbar from './components/Navbar';
import allCountries from './countries.json';
import { useState } from 'react';

function App() {
  const [countries] = useState(allCountries);

  return (
    <div className="App">
      <Navbar />
      <CountriesList countries={countries} />
      <Routes>
        <Route path="/:aplha" element={<CountryDetail allCountries={countries} />} />
      </Routes>
    </div>
  );
}

export default App;
