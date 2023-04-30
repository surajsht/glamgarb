import { useState } from "react";
import { trendingProducts } from "../Data";
import SectionHeader from "./SectionHeader";

let uniqueBtnCategories = [
  ...new Set(trendingProducts.map((item) => item.category)),
];

const Trending = () => {
  let [btnCategories, setBtnCategories] = useState(uniqueBtnCategories);
  let [activeBtn, setActiveBtn] = useState(btnCategories[0]);
  let [productItem, setProductItem] = useState(getFirstProduct());

  function getFirstProduct() {
    let getFeaturedProducts = trendingProducts.filter(
      (product) => product.category === activeBtn
    );
    return getFeaturedProducts;
  }

  let filterTrends = (btn) => {
    setActiveBtn(btn);

    let findProducts = trendingProducts.filter(
      (product) => product.category === btn
    );
    setProductItem(findProducts);
  };

  return (
    <div className="container mb-16">
      <SectionHeader
        title="trending products"
        subTitle="Get Ready to Turn Heads: Our Top Picks for the Hottest Clothing Trends of the Season That You Can't Afford to Miss!"
      />

      <div className="mb-6 space-x-6 text-center">
        {btnCategories.map((btn, btnIdx) => {
          return (
            <button
              key={btnIdx}
              className={`text-lg capitalize ${
                activeBtn === btn ? "text-blue-700" : ""
              }`}
              onClick={() => filterTrends(btn)}
            >
              {btn}
            </button>
          );
        })}
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {productItem.map((product) => {
          let { id, title, image, price, sale, salePercentage } = product;
          let saleAmount = (salePercentage / 100) * price;
          let priceAfterSale = price - saleAmount;

          return (
            <div className="product-item text-center" key={id}>
              <div className="relative mb-4 h-96 w-full">
                <img
                  src={image}
                  alt={title}
                  className="h-full w-full object-cover"
                />
                {sale && (
                  <span className="absolute right-4 top-4 bg-red-600 px-4 py-0.5 text-sm text-white">
                    {salePercentage}%
                  </span>
                )}
              </div>
              <h2 className="mb-1 text-base"> {title} </h2>
              <div>
                <span
                  className={`${sale ? "mr-2 text-red-600 line-through" : ""}`}
                >
                  ${price}
                </span>
                {sale && <span> ${priceAfterSale.toFixed(2)} </span>}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Trending;
