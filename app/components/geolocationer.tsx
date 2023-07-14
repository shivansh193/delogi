'use client'

import React, { useState, useEffect } from "react";
import Link from "next/link";

const Locator = () => {
  
  const [location, setLocation] = useState<Location>();
 
  useEffect(() => {
    if ("geolocation" in navigator) {
      // Retrieve latitude & longitude coordinates from `navigator.geolocation` Web API
      navigator.geolocation.getCurrentPosition(({ coords }) => {
        const { latitude, longitude } = coords;
        setLocation({ latitude, longitude });
      });
    }
  }, []);
  console.log(location);
  const latitude=location?.latitude
  const longitude=location?.longitude
  return (
    <div>
        longitude: {longitude}
        latitude: {latitude}
    </div>
  );
};

interface Location {
  latitude: number;
  longitude: number;
}
export default Locator