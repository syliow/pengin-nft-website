import React from "react";

import config from "../config/index.json";

const Features = () => {
  const { features } = config;
  const {
    title,
    traitsTitle,
    traitsSubtitle,
    subtitle,
    description,
    items: featuresList,
    traits: traitsList,
  } = features;
  return (
    <div className={`py-12 bg-background`} id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2
            className={`text-base text-primary font-semibold tracking-wide uppercase text-center`}
          >
            {title}
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-secondary sm:text-4xl text-center">
            {subtitle}
          </p>
          <a href="https://mumbai.polygonscan.com/address/0x52CaE6483C468C8C0720163a2C0DDfaa0a3b123C">
            {description}
          </a>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-4 md:gap-x-8 md:gap-y-10">
            {featuresList.map((feature) => (
              <div key={feature.description} className="relative">
                <img
                  className="w-full"
                  src={feature.icon}
                  alt="Pengin NFTs"
                ></img>
                <div className="px-6 py-4">
                  <p className="text-white text-base text-center">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </dl>
        </div>
        {/* Section 2 */}
        <div className="lg:text-center mt-20">
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-primary sm:text-4xl text-center">
            {traitsTitle}
          </p>
          <p className="mt-4 max-w-2xl text-xl text-secondary lg:mx-auto">
            {traitsSubtitle}
          </p>
        </div>
        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-5 md:gap-x-8 md:gap-y-10">
            {traitsList.map((traits) => (
              <div key={traits.description} className="relative">
                <img
                  className="w-full hover:animate-bounce"
                  src={traits.icon}
                  alt="Pengin NFTs"
                ></img>
                <div className="px-6 py-4">
                  <p className="text-white text-base text-center">
                    {traits.description}
                  </p>
                </div>
              </div>
            ))}
          </dl>
        </div>
        {/* End of section 2 */}
      </div>
    </div>
  );
};

export default Features;
