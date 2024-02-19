import React, { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { CircularProgress } from "@mui/material";


export const withRowter: React.FC<React.FC> = (Component: React.FC): JSX.Element => {
  return (
    <BrowserRouter>
      <Suspense
        fallback={<CircularProgress />}
      >
        <Component />
      </Suspense>
    </BrowserRouter>
  );
};
