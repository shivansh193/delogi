'use client'
import { useState, useEffect } from "react";
import CityFinder from "./cityFinder";

const Locator = () => {
  const [location, setLocation] = useState<Location | null>(null);

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(({ coords }) => {
        const { latitude, longitude } = coords;
        setLocation({ latitude, longitude });
      });
    }
  }, []);

  return (
    <div>
      {location && (
        <CityFinder
          latitude={location.latitude}
          longitude={location.longitude}
        />
      )}
    </div>
  );
};

interface Location {
  latitude: number;
  longitude: number;
}

export default Locator;
