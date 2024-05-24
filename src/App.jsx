import { createContext, useRef } from "react";
import {
  Contact,
  Footer,
  Hero,
  Navbar,
  News,
  ParticlesComponent,
  Projects,
  Reviews,
  Services,
} from "./Components";
export const RefCon = createContext(null);

function App() {
  const HeroRef = useRef(null);
  const ServicesRef = useRef(null);
  const ReviewsRef = useRef(null);
  const ProjectsRef = useRef(null);
  const NewsRef = useRef(null);
  const ContactRef = useRef(null);
  const FooterRef = useRef(null);
  return (
    <RefCon.Provider
      value={{
        HeroRef,
        ServicesRef,
        ReviewsRef,
        ProjectsRef,
        NewsRef,
        ContactRef,
        FooterRef,
      }}
    >
      <div className="flex flex-col items-center justify-center ">
        {/* <ParticlesComponent id="main" /> */}
        <Navbar />
        <Hero />
        <Services />
        <Reviews />
        <Projects />
        <News />
        <Contact />
        <Footer />
      </div>
    </RefCon.Provider>
  );
}

export default App;
