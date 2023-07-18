'use client'

import { useState } from "react";
import axios from "axios";

const CityFinder = () => {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [country, setCountry] = useState(null);
  const [province, setProvince] = useState(null);
  const [city, setCity] = useState(null);
  const [locality, setLocality] = useState(null);

  const handleChange = (event : any) => {
    const { name, value } = event.target;
    switch (name) {
      case "latitude":
        setLatitude(value || null);
        break;
      case "longitude":
        setLongitude(value || null);
        break;
    }
  };

  const fetchLocation = async () => {
    if (latitude && longitude) {
      const url = `https://open.mapquestapi.com/geocoding/v1/reverse?key=g9PeNU37BLx787xCkeR78rTIAsJeRPIa&location=${latitude},${longitude}&includeRoadMetadata=true&includeNearestIntersection=true`;
      const response = await axios.get(url);
      if (response.status === 200) {
        const location = response.data.results[0].locations[0];
        setCountry(location.adminArea1);
        setProvince(location.adminArea3);
        setCity(location.adminArea5);
        setLocality(location.adminArea6);
      }
    }
  };
  

  return (
    <div>
      <input
        type="text"
        name="latitude"
        placeholder="Latitude"
        value={latitude || ""}
        onChange={handleChange}
      />
      <input
        type="text"
        name="longitude"
        placeholder="Longitude"
        value={longitude || ""}
        onChange={handleChange}
      />
      <button onClick={fetchLocation}>Fetch Location</button>
      <p>Country: {country}</p>
      <p>Province: {province}</p>
      <p>City: {city}</p>
      <p>Locality: {locality}</p>
    </div>
  );
};

export default CityFinder;