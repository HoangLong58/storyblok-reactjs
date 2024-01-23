import { storyblokEditable } from "@storyblok/react";
import React from "react";

export const Teaser = ({ blok }) => {
  return (
    <h2 style={{ textAlign: "center" }} {...storyblokEditable(blok)}>
      {blok.headline}
    </h2>
  );
};
