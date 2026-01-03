import Hero from "./components/Hero";
import ServicesSection from "./components/ServicesSection";
 import LightBeamSection from "./components/LightBeamSection";
 import ATAHubSection from "./components/ATAHubSection";
 import ATAStorySection from "./components/ATAStorySection";
 import SinceSection from "./components/Since2016Section";
function App() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <LightBeamSection />
      <ATAStorySection />
      <SinceSection />
      {/* <ATAHubSection />;
       <ATAStorySection /> */}
    </>
  );
}

export default App;
