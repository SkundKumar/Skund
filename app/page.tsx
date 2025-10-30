import Hero from "./components/Hero";
import ScrollBar from "./components/ScrollBar";
import WorkSection from "./components/WorkSection";

export default function Home() {
  return (
    <main>
      <Hero/>

      {/* ✅ Add your scroll bar here */}
      <ScrollBar />

      <WorkSection />

      <section className="outro">
        <h1>(Outro)</h1>
      </section>
    </main>
  );
}
