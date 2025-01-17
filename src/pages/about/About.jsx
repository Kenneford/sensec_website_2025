import React from "react";
import Footer from "../../components/footer/Footer";
import { AboutBanner } from "../../components/forAboutPage/banner/AboutBanner";
import { WhoWeAre } from "../../components/forAboutPage/aboutWhoWeAre/WhoWeAre";
import { OurHistory } from "../../components/forAboutPage/aboutOurHistory/OurHistory";
import { OurVision } from "../../components/forAboutPage/aboutOurVision/OurVision";
import { Achievements } from "../../components/forAboutPage/aboutAchievements/Achievements";
import { Box } from "@mui/material";

export function About() {
  return (
    <Box id="aboutPage">
      <AboutBanner />
      <WhoWeAre />
      <OurHistory />
      <OurVision />
      <Achievements />
      <Footer />
    </Box>
  );
}
