import { StoryblokComponent, storyblokEditable } from "@storyblok/react";
import React from "react";

export const Page = ({ blok }) => {
  return (
    <main {...storyblokEditable(blok)}>
      {blok.body
        ? blok.body.map((blok) => (
            <StoryblokComponent blok={blok} key={blok._uid} />
          ))
        : null}
    </main>
  );
};
