import React from "react";
import { Typography, List, ListItem } from "@mui/material";
import Movie from "./Movie";

const Genre = ({ name, description, movieTitle1, movieTitle2 }) => {
  return (
    <>
      <Typography variant="h3">{name}</Typography>
      <Typography>{description}</Typography>
      <List sx={{ mb: 3 }}>
        <ListItem>
          {" "}
          <Movie title={movieTitle1} />
        </ListItem>
        <ListItem>
          {" "}
          <Movie title={movieTitle2} />
        </ListItem>
      </List>
    </>
  );
};

export default Genre;
