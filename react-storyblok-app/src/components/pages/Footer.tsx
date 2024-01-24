import { storyblokEditable } from "@storyblok/react";
import React from "react";
import { Link } from "react-router-dom";

export const Footer = ({ blok }) => {
  console.log("[blok]: >>", blok);

  return (
    <div
      {...storyblokEditable(blok)}
      className="w-full flex flex-col leading-6"
    >
      <div className="flex justify-center items-center py-5 border-y-2 border-gray-300">
        {blok.message}
      </div>

      <div className="w-full bg-gray-500 flex flex-row py-10 px-10 items-center justify-between text-white">
        <div className="w-2/5 flex flex-col gap-8">
          <img src={blok.logo} alt="Someone logo" className="w-48" />
          <div>{blok.description}</div>
          <div className="flex gap-x-7">
            {blok.buttons.map((button, index) => (
              <Link to={button.link.url} key={index}>
                <button className={button.isPrimary && "bg-pink-300"}>
                  {button.name}
                </button>
              </Link>
            ))}
          </div>
        </div>

        <div className="w-3/5 grid grid-rows-3 grid-flow-col auto-rows-auto">
          {blok.categories.map((category, index) => (
            <div className="w-full" key={index}>
              <div className="font-bold text-lg">{category.name}</div>
              <div className="flex flex-col gap-y-2 mt-2">
                {category.sub_categories.map((sub_category, index) => (
                  <Link to={sub_category.url} key={index}>
                    <div key={index}>{sub_category.name}</div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
          <div>{blok.end_text}</div>
        </div>
      </div>

      <div className="flex flex-row justify-center items-center gap-3">
        <div>{blok.established}</div>
        <div className="flex flex-row gap-3">
          {blok.policies.map((policy, index) => (
            <div
              className={index && "border-l-4 border-indigo-500"}
              key={index}
            >
              <Link to={policy.url} key={index}>
                {policy.name}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
