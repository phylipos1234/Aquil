import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ProfessinalsMain from "./components/ProfessinalsMain";
import Authenticity from "./components/Authenticity";
import Pricing from "./components/Pricing";
import Dedication from "./components/Dedication";
import Support from "./components/Support";
import Amenities from "./components/Amenities";
import Precision from "./components/Precision";
import Experts from "./components/Experts";
import Preparation from "./components/Preparation";
import ExclusiveInsights from "./components/ExclusiveInsights";

const ProfessionalsPage = () => {
  return (
    <div className=" min-h-screen mt-[190px] flex flex-col justify-between ">
      <Header textColor="text-[#000]" />
      <ProfessinalsMain />
      <Authenticity />
      <Pricing />
      <Dedication />
      <Support />
      <Amenities />
      <Precision />
      <Experts />
      <Preparation />
      <ExclusiveInsights />

      {/* <Footer /> */}
    </div>
  );
};

export default ProfessionalsPage;
