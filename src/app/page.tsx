import Card from "@/components/organisms/Card";
import About from "@/components/organisms/About";
import Contact from "@/components/organisms/Contact";
import HeroSecion from "@/components/organisms/HeroSecion";
import Navbar from "@/components/organisms/Navbar";

export default function page() {
  return (
    <div>
      <Navbar/>
      <HeroSecion/>
      <Contact/>
      <About/>
      <Card/>
    </div>
  );
}
