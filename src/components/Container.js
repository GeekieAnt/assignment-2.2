import React from "react";
import Genre from "./Genre";
import { Typography } from "@mui/material";

const Container = () => {
  return (
    <>
      <Typography variant="h3" mb={3}>
        Movie App
      </Typography>
      <Genre
        name="Comedy"
        description="provoke laughter and amusement"
        movieTitle1="Bridesmaids"
        movieTitle2="Superbad"
      />
      <Genre
        name="Romance"
        description="explores the themes of love, passion, and emotional connection between characters"
        movieTitle1="The Notebook"
        movieTitle2="La La Land"
      />
    </>
  );
};

export default Container;
