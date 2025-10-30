import Hero from "./components/Hero";
import ScrollBar from "./components/ScrollBar";

import WorkSection from "./components/WorkSection";
import BouncingTags from "./components/BouncingTags";
import Outro from "./components/Outro";
export default function Home() {
  return (
    <main>
      <Hero/>
      <ScrollBar />
      <WorkSection />       
      <Outro/>     
    </main>
  );
}
