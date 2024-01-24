import { apiPlugin, storyblokInit } from "@storyblok/react";
import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "./index.css";
import { Page } from "./components/pages/Page";
import { Teaser } from "./components/pages/Teaser";
import { Feature } from "./components/pages/Feature";
import { Grid } from "./components/pages/Grid";
import { PsychologistList } from "./components/pages/PsychologistList";
import { BrowserRouter } from "react-router-dom";
import { Footer } from "./components/pages/Footer";

storyblokInit({
  accessToken: "kbafkL87wmanvvONMwVJXgtt",
  use: [apiPlugin],
  components: {
    page: Page,
    teaser: Teaser,
    feature: Feature,
    grid: Grid,
    psychologistList: PsychologistList,
    footer: Footer
  },
  apiOptions: {
    region: "us",
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
