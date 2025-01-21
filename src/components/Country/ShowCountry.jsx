import React, { useState } from "react";
// import PropTypes from "prop-types";
import "./ShowCountry.css";

const ShowCountry = ({ country, handleVisitedCountry }) => {
    const [visited, setVisited] = useState(false);

    const handleVisited = () => {
        setVisited(true);
        handleVisitedCountry(country);
    };
    return (
        // <div
        //     style={{
        //         border: "1px solid red",
        //         textAlign: "center",
        //         padding: "10px",
        //         margin: "10px",
        //     }}
        // >
        //     <img src={country?.flags?.png} alt="" />
        //     <p>{country?.name?.common}</p>
        //     <button onClick={handleVisited}>
        //         {visited ? "Visited" : "Going"}
        //     </button>
        //     {visited && <p>This country is visited</p>}
        // </div>
        <div className="card-container">
            <div className="card">
                <img
                    src={country?.flags?.png}
                    alt="Card Image"
                    className="card-image"
                />
                <div className="card-content">
                    <h3 className="card-title">{country.name.common}</h3>
                    <p className="card-description">
                        This is a description of the card. It adjusts to
                        different screen sizes.
                    </p>
                    {/* <button onClick={handleVisited} className="card-button">
                        Read More
                    </button> */}
                    <button onClick={handleVisited}>
                        {visited ? "Visited" : "Going"}
                    </button>
                    {visited && (
                        <p style={{ color: "#000" }}>
                            This country is already visited
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};
// Props validation
// ShowCountry.propTypes = {
//     country: PropTypes.shape({
//         flags: PropTypes.shape({
//             png: PropTypes.string.isRequired,
//         }).isRequired,
//         name: PropTypes.shape({
//             common: PropTypes.string.isRequired,
//         }).isRequired,
//     }).isRequired,
// };
export default ShowCountry;
