import Sparkles from "../components/Sparkles";

import AboutContent from "../components/AboutContent";
import Fotter from "@/components/Fotter";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Trail from "@/components/Trail";

export default function Home() {
  return (
    
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] ">
      
      <Sparkles/>
      <AboutContent/>
      <Trail/>
      <Experience/>
      <Contact/>
      <Fotter link={"https://github.com/Smriti0109"} className={"mt-10"}/>
    </main>
  );
}
