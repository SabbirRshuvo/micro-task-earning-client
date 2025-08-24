import React from "react";
import Banner from "../../HomeComponents/Banner";
import Testimonials from "../../HomeComponents/Testimonials";
import WorksFeatures from "../../HomeComponents/WorksFeatures";

import OtherFeatures from "../../HomeComponents/OtherFeatures";

const Home = () => {
  return (
    <div>
      <Banner />
      <OtherFeatures />
      <WorksFeatures />
      <Testimonials />
    </div>
  );
};

export default Home;
