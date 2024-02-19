import React from "react";

import "./index.scss";
import { withProviders } from "./providers";
import { Routing } from "../2-pages";
// import { Routing } from "2-pages";


const AppComponent: React.FC = (): JSX.Element => {
  return (
    <Routing />
  );
};


export const App = withProviders(AppComponent);
