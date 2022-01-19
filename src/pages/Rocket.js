import React from "react";
import { useParams } from "react-router-dom";
import { useRocket } from "../hooks/useRocket";
import falcon9 from "../assets/img/falcon9.webp";
import falconheavy from "../assets/img/falconheavy.jpg";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { Image } from "../components/rocket/RocketStyled";
import starship from "../assets/img/starship.jpg";
import Typography from "@mui/material/Typography";

function Rocket() {
  const { id } = useParams();
  let rocketInfo = {};

  if (id === "falconheavy") {
    rocketInfo = {
      name: "Falcon Heavy",
      image: falconheavy,
    };
  } else if (id === "falcon9") {
    rocketInfo = {
      name: "Falcon 9",
      image: falcon9,
    };
  } else if (id === "starship") {
    rocketInfo = {
      name: "Starship",
      image: starship,
    };
  }

  console.log(id);

  const { error, loading, data } = useRocket(id);

  if (loading) return <p>Loading...</p>;

  console.log(data);
  return (
    <Container
      disableGutters
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Image src={rocketInfo.image} alt="" />
      <Box
        justifyContent="center"
        maxWidth="600px"
        width="100%"
        height="90vh"
        sx={{ display: "flex", flexDirection: "column" }}
      >
        <Typography
          variant="h1"
          component="h1"
          align="center"
          sx={{ color: "white", fontWeight: 500 }}
        >
          {rocketInfo.name}
        </Typography>
        <Stack direction="row" spacing={2} justifyContent="center">
          <Typography
            variant="subtitle1"
            component="h3"
            sx={{ color: "white" }}
          >
            {" "}
            {data.rocket.company}
          </Typography>
          <Typography
            variant="subtitle1"
            component="h3"
            sx={{ color: "white" }}
          >
            {data.rocket.country}
          </Typography>
        </Stack>
        <Typography
          maxWidth={600}
          textAlign="center"
          mt={4}
          variant="body1"
          component="h3"
          sx={{ color: "white", fontWeight: 500 }}
        >
          {data.rocket.description}
        </Typography>
      </Box>
    </Container>
  );
}

export default Rocket;
