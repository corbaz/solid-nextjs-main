"use client";
import React from "react";
import featuresData from "./featuresData";
import SingleFeature from "./SingleFeature";
import SectionHeader from "../Common/SectionHeader";

const Feature = () => {
  return (
    <section id="features" className="py-20 lg:py-25 xl:py-30">
      <div className="max-w-c-1315 mx-auto px-4 md:px-8 xl:px-0">
        {/* <!-- Section Title Start --> */}
        <SectionHeader
          headerInfo={{
            title: "SOLID FEATURES",
            subtitle: "Core Features of Solid",
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
            convallis tortor eros. Donec vitae tortor lacus. Phasellus aliquam
            ante in maximus.`,
          }}
        />
        {/* <!-- Section Title End --> */}

        <div className="mt-12.5 grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:mt-15 lg:grid-cols-3 xl:mt-20 xl:gap-12.5">
          {/* <!-- Features item Start --> */}

          {featuresData.map((feature) => (
            <SingleFeature feature={feature} key={feature.id} />
          ))}
          {/* <!-- Features item End --> */}
        </div>
      </div>
    </section>
  );
};

export default Feature;
