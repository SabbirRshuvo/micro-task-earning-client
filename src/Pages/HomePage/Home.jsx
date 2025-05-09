import React from "react";
import Banner from "../../HomeComponents/Banner";
import Testimonials from "../../HomeComponents/Testimonials";
import ExtraSection from "../../HomeComponents/ExtraSection";
import BestWorkers from "../../HomeComponents/BestWorkers";

const Home = () => {
  return (
    <div>
      <Banner />
      <BestWorkers />
      <ExtraSection />
      <Testimonials />
    </div>
  );
};

export default Home;
