import React from "react";
import { Typography } from "@mui/material";

const Movie = ({ title }) => {
  return (
    <div>
      <Typography>{title}</Typography>
    </div>
  );
};

export default Movie;
