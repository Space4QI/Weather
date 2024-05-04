import React from 'react';

const CityPhoto = ({ cityPhoto }) => {
    return cityPhoto && <img src={cityPhoto} alt="City" />;
};

export default CityPhoto;
