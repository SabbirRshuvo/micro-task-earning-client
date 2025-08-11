import React from "react";
import Banner from "../../HomeComponents/Banner";
import Testimonials from "../../HomeComponents/Testimonials";
import WorksFeatures from "../../HomeComponents/WorksFeatures";
import Responsive from "../../HomeComponents/Responsive";
import OtherFeatures from "../../HomeComponents/OtherFeatures";

const Home = () => {
  return (
    <div>
      <Banner />
      <WorksFeatures />
      <Responsive />
      <OtherFeatures />
      <Testimonials />
    </div>
  );
};

export default Home;
