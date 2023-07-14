import React, { useState, useEffect } from "react";
import { Position, GeolocationError } from "../../geolocation"

const useGeoLocation = () => {
  const [location, setLocation] = useState<Position>();
  const [error, setError] = useState<GeolocationError>();

  useEffect(() => {
    if (!navigator.geolocation) {
      setError({
        code: 0,
        message: "Geolocation not supported",
      });
    }

    navigator.geolocation.getCurrentPosition(
      (position: Position) => {
        setLocation(position);
      },
      (error: GeolocationError) => {
        setError(error);
      },
    );
  }, []);

  return {
    location,
    error,
  };
};

export default useGeoLocation;
