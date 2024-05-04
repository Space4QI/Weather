import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchWeather } from './actions/actionWeather';
import axios from 'axios';
import InputField from './components/inputField';
import Button from './components/button';
import CityInfo from './components/cityInfo';
import CityPhoto from './components/cityPhoto';
import ErrorDisplay from './components/errorDisplay';

const Weather = () => {
    const [city, setCity] = useState('');
    const [cityPhoto, setCityPhoto] = useState(null);
    const weather = useSelector(state => state.weather);
    const dispatch = useDispatch();

    useEffect(() => {
        if (city) {
            axios
                .get(`https://api.pexels.com/v1/search?query=${city}&per_page=1`, {
                    headers: {
                        Authorization: 'vn4z9o88Xqn6X8EQOHVfQ3osKWHmnD3EbaRFfuOawQyEoDoAxCMDMiW4'
                    }
                })
                .then(response => {
                    const photoUrl = response.data.photos[0].src.large;
                    setCityPhoto(photoUrl);
                })
                .catch(error => {
                    console.error('Error fetching city photo:', error);
                });

        }
    }, [city]);

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(fetchWeather(city));
        setCity('');
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <InputField
                    value={city}
                    onChange={e => setCity(e.target.value)}
                    placeholder="Enter city name"
                />
                <Button type="submit">Get Weather</Button>
            </form>
            {weather.loading ? (
                <p>Loading...</p>
            ) : weather.error ? (
                <ErrorDisplay message={weather.error} />
            ) : (
                <div>
                    {weather.data && (
                        <CityInfo
                            cityName={weather.data.name}
                            description={weather.data.weather[0].description}
                            temperature={weather.data.main.temp}
                            humidity={weather.data.main.humidity}
                        />
                    )}
                    <CityPhoto cityPhoto={cityPhoto} />
                </div>
            )}
        </div>
    );
};

export default Weather;
