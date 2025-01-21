import React, { useEffect, useState } from "react";
import ShowCountry from "./Country/ShowCountry";

const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [visitedCountry, setVisitedCountry] = useState([]);

    // const handleVisitedCountry = (country) => {
    //     // Use filter to check for duplicates
    //     const filteredCountries = visitedCountry.filter(
    //         (cnt) => cnt.cca2 === country.cca2
    //     );
    //     console.log(filteredCountries);

    //     if (filteredCountries.length > 0) {
    //         alert("Country already exists in the visited list");
    //         return;
    //     }

    // Add the new country to the list
    // setVisitedCountry([...visitedCountry, country]);
    // };
    const handleVisitedCountry = (country) => {
        const exist = visitedCountry.find((cnt) => cnt.cca2 === country.cca2);

        if (exist) {
            return alert("Country already exists in the visited list");
        }
        setVisitedCountry([...visitedCountry, country]);
    };
    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
            .then((res) => res.json())
            .then((data) => setCountries(data));
    }, []);

    return (
        <div>
            <h1>React World Tour</h1>
            <h3>All Countries: {countries.length}</h3>
            <div>
                <h2>Visited Country List: {visitedCountry.length}</h2>
                <ul>
                    {visitedCountry.map((visit, idx) => (
                        <li key={idx}>{visit?.name?.common}</li>
                    ))}
                </ul>
            </div>
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(3, 1fr)",
                }}
            >
                {countries.map((country, idx) => (
                    <ShowCountry
                        key={idx}
                        country={country}
                        handleVisitedCountry={handleVisitedCountry}
                    />
                ))}
            </div>
        </div>
    );
};

export default Countries;
