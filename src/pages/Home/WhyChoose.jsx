import React from "react";
import Button from "../../components/button/Button";

const WhyChoose = () => {
  return (
    <section className="container mx-auto px-6 py-6">
      <div className="my-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center gap-8 text-left">
        <div>
          <h3 className="text-4xl font-bold">
            Why <br />
            Choosing use.
          </h3>
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-3">Luxury Facilities</h3>
          <p className="text-base mb-2">
            Experience a world of refined elegance with our carefully curated
            luxury facilities, designed to offer unmatched comfort and
            sophistication.
          </p>
          <Button text="More Info"></Button>
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-3">Afordable Prices</h3>
          <p className="text-base mb-2">
            Experience a world of refined elegance with our carefully curated
            luxury facilities, designed to offer unmatched comfort and
            sophistication.
          </p>
          <Button text="More Info"></Button>
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-3">Money choise</h3>
          <p className="text-base mb-2">
            Experience a world of refined elegance with our carefully curated
            luxury facilities, designed to offer unmatched comfort and
            sophistication.
          </p>
          <Button text="More Info"></Button>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
