import WeatherIcon from './WeatherIcon';
import { Thermometer, Droplet, Wind } from 'lucide-react';

export default function WeatherInfo({ weather }) {
    return (
        <div className="weather-info">
            <h2 className="city-name">
                {weather.name}, {weather.sys.country}
            </h2>
            <div className="weather-details">
                <WeatherIcon iconCode={weather.weather[0].icon} />
                <p className="temperature">{Math.round(weather.main.temp)}°C</p>
            </div>
            <p className="weather-description">{weather.weather[0].description}</p>
            <div className="additional-info">
                <div className="info-item">
                    <Thermometer size={20} />
                    <p>Feels like: {Math.round(weather.main.feels_like)}°C</p>
                </div>
                <div className="info-item">
                    <Droplet size={20} />
                    <p>Humidity: {weather.main.humidity}%</p>
                </div>
                <div className="info-item">
                    <Wind size={20} />
                    <p>Wind: {weather.wind.speed} m/s</p>
                </div>
            </div>
        </div>
    );
}
