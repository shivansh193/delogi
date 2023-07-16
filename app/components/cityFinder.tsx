// 'use client'
// import { useState } from "react";
// import axios from "axios";


// const CityFinder = () => {
//   const [latitude, setLatitude] = useState(null);
//   const [longitude, setLongitude] = useState(null);
//   const [country, setCountry] = useState(null);
//   const [province, setProvince] = useState(null);
//   const [city, setCity] = useState(null);
//   const [locality, setLocality] = useState(null);

//   const handleChange = (event : any) => {
//     const { name, value } = event.target;
//     switch (name) {
//       case "latitude":
//         setLatitude(value ?? "Unknown");
//         break;
//       case "longitude":
//         setLongitude(value ?? "Unknown");
//         break;
//     }
//   };

//   const fetchLocation = async () => {
//     const url = `https://api.opencagedata.com/geocode/v1/json?q=${latitude},${longitude}&key=YOUR_API_KEY`;
//     const response = await axios.get(url);
//     if (response.status === 200) {
//       const location = response.data.results[0];
//       setCountry(location.country);
//       setProvince(location.admin1);
//       setCity(location.city);
//       setLocality(location.sublocality);
//     }
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         name="latitude"
//         placeholder="Latitude"
//         value={latitude}
//         onChange={handleChange}
//       />
//       <input
//         type="text"
//         name="longitude"
//         placeholder="Longitude"
//         value={longitude}
//         onChange={handleChange}
//       />
//       <button onClick={fetchLocation}>Fetch Location</button>
//       <p>Country: {country}</p>
//       <p>Province: {province}</p>
//       <p>City: {city}</p>
//       <p>Locality: {locality}</p>
//     </div>
//   );
// };

// export default CityFinder;
