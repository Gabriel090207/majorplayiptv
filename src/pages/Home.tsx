import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import Hero from "../components/Home/Hero/Hero";
import Highlights from "../components/Home/Highlights/Highlights";
import HowItWorks from "../components/Home/HowItWorks/HowItWorks";
import Devices from "../components/Home/Devices/Devices";
import Trending from "../components/Home/Trending/Trending";
import Plans from "../components/Home/Plans/Plans";
import Testimonials from "../components/Home/Testimonials/Testimonials";
import FAQ from "../components/Home/FAQ/FAQ";
import CTA from "../components/Home/CTA/CTA";

const Home = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const state = location.state as { scrollTo?: string } | null;

const scrollTo = state?.scrollTo;

if (!scrollTo) return;

setTimeout(() => {
  document.getElementById(scrollTo)?.scrollIntoView({
    behavior: "smooth",
  });

  navigate(".", {
    replace: true,
    state: null,
  });
}, 100);
  }, [location, navigate]);

  return (
    <>
      <Hero />
      <Highlights />
      <HowItWorks />
      <Devices />
      <Trending />
      <Plans />
      <Testimonials />
      <FAQ />
      <CTA />
    </>
  );
};

export default Home;