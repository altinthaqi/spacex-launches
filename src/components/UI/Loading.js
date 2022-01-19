import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";

export default function Loading() {
  return (
    <CircularProgress
      sx={{
        position: "absolute",
        bottom: "50%",
        right: "50%",
        height: "100%",
        width: "100%",
      }}
    />
  );
}
