import React from "react";
import bannerImg from "../../assets/banner.png";

const Shop = () => {
  return (
    <div>
      <section className="min-h-screen">
        {/* Banner */}
        <div
          className="h-screen w-full "
          style={{ backgroundImage: `url(${bannerImg})` }}
        ></div>
      </section>
    </div>
  );
};

export default Shop;
