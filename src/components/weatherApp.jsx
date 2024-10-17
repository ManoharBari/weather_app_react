import { useState } from 'react';
import SearchForm from './SearchForm';
import WeatherInfo from './WeatherInfo';
import ErrorMessage from './ErrorMessage';
import '../weatherApp.css';

export default function WeatherApp() {
    const [city, setCity] = useState('');
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const API_KEY = import.meta.env.VITE_API_KEY;

    const fetchWeather = async (searchQuery) => {
        setLoading(true);
        try {
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?${searchQuery}&appid=${API_KEY}&units=metric`
            );
            const data = await response.json();
            if (data.cod === '404') {
                setError('Location not found. Please try again.');
                setWeather(null);
            } else {
                setWeather(data);
                setError('');
            }
        } catch (err) {
            setError('An error occurred. Please try again.');
            setWeather(null);
        }
        setLoading(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (city.trim() !== '') {
            fetchWeather(`q=${city}`);
        }
        setCity('');
    };

    const getLocation = () => {
        setLoading(true);
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    fetchWeather(`lat=${latitude}&lon=${longitude}`);
                },
                () => {
                    setLoading(false);
                    setError('Unable to retrieve your location. Please check your browser settings.');
                }
            );
        } else {
            setLoading(false);
            setError('Geolocation is not supported by your browser');
        }
    };

    return (
        <div className="weather-app">
            <h1 className="app-title">Weather Forecast</h1>
            <SearchForm
                city={city}
                setCity={setCity}
                handleSubmit={handleSubmit}
                getLocation={getLocation}
            />
            {error && <ErrorMessage error={error} />}
            {loading && <p className="loading-message">Loading weather data...</p>}
            {weather && <WeatherInfo weather={weather} />}
        </div>
    );
}
