import { Sun, Cloud, CloudRain, CloudSnow, CloudLightning } from 'lucide-react';

export default function WeatherIcon({ iconCode }) {
    switch (iconCode) {
        case '01d':
        case '01n':
            return <Sun className="weather-icon" />;
        case '02d':
        case '02n':
        case '03d':
        case '03n':
        case '04d':
        case '04n':
            return <Cloud className="weather-icon" />;
        case '09d':
        case '09n':
        case '10d':
        case '10n':
            return <CloudRain className="weather-icon" />;
        case '13d':
        case '13n':
            return <CloudSnow className="weather-icon" />;
        case '11d':
        case '11n':
            return <CloudLightning className="weather-icon" />;
        default:
            return <Cloud className="weather-icon" />;
    }
}
