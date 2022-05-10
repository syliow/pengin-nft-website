import React from "react";

import config from "../config/index.json";
import Divider from "./Divider";

const Product = () => {
  const { product } = config;
  const [firstItem, secondItem] = product.items;

  return (
    <section className={`bg-background py-8`} id="product">
      <div className={`container max-w-5xl mx-auto m-8`}>
        <h1
          className={`w-full my-2 text-5xl font-bold leading-tight text-center text-primary`}
        >
          {product.title.split(" ").map((word, index) => (
            <span
              key={index}
              className={index % 2 ? "text-primary" : "text-secondary"}
            >
              {word}{" "}
            </span>
          ))}
        </h1>
        <div className={`flex flex-wrap`}>
          <div className={`w-5/6 sm:w-1/2 p-6 mt-20`}>
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
          <div className="flex flex-row bg-tertiary mt-10">
            <div className="text-white uppercase text-center p-10">
              Buy a Pengin
            </div>
            <div className="text-white text-center p-10">
              To get your Pengin, Mint it now or check out the collection on
              OpenSea.
            </div>
            <div className="p-5 sm:mt-0 sm:ml-3">
              <a
                href={"https://testnets.opensea.io/collection/pengin-nft"}
                className={`w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md border-primary text-secondary bg-primary hover:bg-border hover:text-primary md:py-4 md:text-lg md:px-10 text-center`}
              >
                {/* {mainHero.secondaryAction.text} */}
                Buy on OpenSea
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
