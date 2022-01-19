import { styled, alpha } from "@mui/material/styles";

export const Image = styled("img")(({ theme }) => ({
  height: "100vh",
  width: "100%",
  position: "absolute",
  top: "0px",
  right: "0px",
  zIndex: "-1",
  objectFit: "cover",
}));
