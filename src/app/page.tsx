import { Preloader } from "@/components/Preloader";
import { Nav } from "@/components/Nav";
import { Cursor } from "@/components/Cursor";
import { Marquee } from "@/components/motion";
import { Hero } from "@/components/sections/Hero";
import { Showreel } from "@/components/sections/Showreel";
import { About } from "@/components/sections/About";
import { Works } from "@/components/sections/Works";
import { Videos } from "@/components/sections/Videos";
import { Photos } from "@/components/sections/Photos";
import { Journey } from "@/components/sections/Journey";
import { Tech } from "@/components/sections/Tech";
import { Services } from "@/components/sections/Services";
import { Contact } from "@/components/sections/Contact";
import { EstimatorProvider } from "@/components/estimator/EstimatorProvider";
import { EstimatorDock } from "@/components/estimator/EstimatorDock";
import { crafts } from "@/data/site";

export default function Home() {
  return (
    <EstimatorProvider>
      <Preloader />
      <Nav />
      <Cursor />
      <main>
        <Hero />
        <Showreel />
        <Marquee items={crafts} className="border-y-2 border-navy-deep/10 bg-canvas py-5" />
        <About />
        <Works />
        <Videos />
        <Photos />
        <Journey />
        <Tech />
        <Services />
      </main>
      <Contact />
      <EstimatorDock />
    </EstimatorProvider>
  );
}
