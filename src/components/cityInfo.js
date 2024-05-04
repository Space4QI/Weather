import React from 'react';

const CityInfo = ({ cityName, description, temperature, humidity }) => {
    return (
        <div>
            <h2>{cityName}</h2>
            <p>{description}</p>
            <p>Temperature: {temperature}°C</p>
            <p>Humidity: {humidity}%</p>
        </div>
    );
};

export default CityInfo;
