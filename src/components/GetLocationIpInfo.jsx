import { useState, useEffect } from "react";

const UserLocation = () => {
  const [userLocation, setUserLocation] = useState(null);

  useEffect(() => {
    const fetchUserLocation = async () => {
      try {
        // Fetch the user's IP information from the ipinfo.io API
        const response = await fetch(
          "https://ipinfo.io/json?token=133cfef00064be"
        );
        const data = await response.json();

        // Extract the country from the response
        const country = data;

        // Set the userLocation state
        setUserLocation(country);
      } catch (error) {
        console.error("Error fetching user location:", error);
        setUserLocation("Unknown"); // Set a default value in case of an error
      }
    };

    fetchUserLocation();
  }, []);

  return (
    <div className="main-container">
      <div className="section-title">Get data from 3rd party : ipinfo.io</div>
      <div className="inner-container">
        <div>{JSON.stringify(userLocation, null, "\t")}</div>
      </div>
    </div>
  );
};

export default UserLocation;
