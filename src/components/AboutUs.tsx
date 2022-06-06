import React from "react";

import config from "../config/index.json";
import Divider from "./Divider";

const AboutUs = () => {
  const { about } = config;
  const [firstItem, secondItem] = about.items;

  return (
    <section className={`bg-background py-8`} id="aboutUs">
      <div className={`container max-w-5xl mx-auto m-8`}>
        <h1
          className={`w-full my-2 text-5xl font-bold leading-tight text-center text-primary`}
        >
          {about.title.split(" ").map((word, index) => (
            <span
              key={index}
              className={index % 2 ? "text-primary" : "text-secondary"}
            >
              {word}{" "}
            </span>
          ))}
        </h1>
        <div className={`flex flex-wrap`}>
          <div className={`sm:w-1/2 p-6 mt-20 align-middle `}>
            <h3
              className={`text-3xl text-tertiary font-bold leading-none mb-3 text-center`}
            >
              {firstItem?.title}
            </h3>
            <Divider />
            <p className={`text-white`}>{firstItem?.description}</p>
          </div>
          <div className={`w-full sm:w-1/2 p-6 `}>
            <img
              className="h-6/6 border-4 border-indigo-500/75"
              src={firstItem?.img}
              alt={firstItem?.title}
            />
          </div>
        </div>
        <div className={`flex flex-wrap flex-col-reverse sm:flex-row`}>
          <div className={`w-full sm:w-1/2 p-6`}>
            <img
              className="h-6/6 border-4 border-indigo-500/75"
              src={secondItem?.img}
              alt={secondItem?.title}
            />
          </div>
          <div className={`w-full sm:w-1/2 p-6 mt-20`}>
            <div className={`align-middle`}>
              <h3
                className={`text-3xl text-tertiary font-bold leading-none mb-3 text-center`}
              >
                {secondItem?.title}
              </h3>
              <Divider />
              <p className={`text-white mb-8`}>{secondItem?.description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
