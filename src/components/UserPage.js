import React, { useState, useEffect } from "react";
import axios from "axios";
import { Box, Typography, Paper, Divider } from "@mui/material";

function UserPage() {
  const welcomeText = "Welcome ";
  const [countryInfo, setCountryInfo] = useState({
    name: "Unknown Country",
    capital: "Unknown Capital",
    population: "Unknown Population",
    region: "Unknown Region",
  });

  const fetchRandomCountry = async () => {
    try {
      const response = await axios.get("https://restcountries.com/v3.1/all");
      const randomIndex = Math.floor(Math.random() * response.data.length);
      const countryData = response.data[randomIndex];

      setCountryInfo({
        name: countryData.name.common || "Unknown Country",
        capital: countryData.capital || "Unknown Capital",
        population: countryData.population || "Unknown Population",
        region: countryData.region || "Unknown Region",
      });
    } catch (error) {
      handleFetchError();
    }
  };

  const handleFetchError = (error) => {
    console.error(error);
  };

  useEffect(() => {
    fetchRandomCountry();
  }, []);

  return (
    <Paper elevation={3} style={{ padding: "20px", borderRadius: "10px" }}>
      <Box
        sx={{
          backgroundColor: "#f2f2f2",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
          textAlign: "center",
        }}
      >
        <Typography variant="h4" style={{ color: "#333" }}>
          {welcomeText}
        </Typography>
        <Typography variant="h5" style={{ color: "#333" }}>
          {countryInfo.name}
        </Typography>
        <Typography variant="body1">Capital: {countryInfo.capital}</Typography>
        <Typography variant="body1">Population: {countryInfo.population}</Typography>
        <Typography variant="body1">Region: {countryInfo.region}</Typography>
      </Box>
      <Divider style={{ margin: "20px 0" }} />
      <Box>
       
        <Typography variant="body1">More info...</Typography>
      </Box>
    </Paper>
  );
}

export default UserPage;
