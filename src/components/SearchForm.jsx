import { Search, MapPin } from 'lucide-react';

export default function SearchForm({ city, setCity, handleSubmit, getLocation }) {
  return (
    <form onSubmit={handleSubmit} className="search-form">
      <div className="searchbar">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city name"
          className="city-input"
        />
        <button type="submit" className="search-button">
          <Search size={20} />
        </button>
      </div>
      <button onClick={getLocation} className="location-button" type="button">
        <MapPin size={20} />
        Get Current Location
      </button>
    </form>
  );
}
