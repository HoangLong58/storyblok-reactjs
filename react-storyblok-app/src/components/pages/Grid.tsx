import { StoryblokComponent, storyblokEditable } from "@storyblok/react";
import React from "react";

export const Grid = ({ blok }) => {
  return (
    <div
      style={{ display: "flex", justifyContent: "space-around" }}
      {...storyblokEditable(blok)}
      className="grid"
    >
      {blok.columns.map((blok) => (
        <StoryblokComponent blok={blok} key={blok._uid} />
      ))}
    </div>
  );
};
