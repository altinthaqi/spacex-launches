import React from "react";
import { useParams } from "react-router-dom";
import { useRocket } from "../hooks/useRocket";
import falcon9 from "../assets/img/falcon9.webp";
import falconheavy from "../assets/img/falconheavy.jpg";
import Container from "@mui/material/Container";
import { Image } from "../components/rocket/RocketStyled";
import starship from "../assets/img/starship.jpg";
import Loading from "../components/UI/Loading";
import Error from "../components/UI/Error";
import Content from "../components/rocket/Content";

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

  const { error, loading, data } = useRocket(id);
  if (loading) return <Loading />;
  if (error) return <Error />;

  return (
    <Container
      disableGutters
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Image src={rocketInfo.image} alt="" />

      <Content data={data} rocketInfo={rocketInfo} />
    </Container>
  );
}

export default Rocket;
