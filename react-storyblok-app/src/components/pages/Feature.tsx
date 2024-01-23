import { storyblokEditable } from "@storyblok/react";
import React from "react";

export const Feature = ({ blok }) => (
  <div {...storyblokEditable(blok)} className="column feature">
    {blok.name}
  </div>
);
