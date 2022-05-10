import React from "react";

import config from "../config/index.json";

const Pricing = () => {
  const { pricing } = config;
  const { title, team: teamList } = pricing;

  return (
    <section className={`bg-background py-8`} id="pricing">
      <div className={`container mx-auto px-2 pt-4 pb-12 text-primary`}>
        <h1 className={`text-5xl font-bold leading-tight text-center`}>
          {title}
        </h1>
        <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10 mt-8">
          {teamList.map((team) => (
            <div
              key={team.name}
              className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
            >
              <div className="flex justify-end px-4 pt-4"></div>
              <div className="flex flex-col items-center pb-10">
                <img
                  className="mb-3 w-24 h-24 rounded-full shadow-lg"
                  src="/assets/images/Pengin.png"
                  alt="Pengin image"
                ></img>
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                  {team.name}
                </h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {team.role}
                </span>
              </div>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default Pricing;
