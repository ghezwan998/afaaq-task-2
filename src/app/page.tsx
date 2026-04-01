import Card from "@/components/organisms/Card";
import About from "@/components/organisms/About";
import Contact from "@/components/organisms/Contact";
import HeroSecion from "@/components/organisms/HeroSecion";
import Navbar from "@/components/organisms/Navbar";
import LoginSection from "@/components/organisms/LoginSection";
import RegisterSection from "@/components/organisms/RegisterSection";

export default function page() {
  return (
    <div>
      <Navbar/>
      <HeroSecion/>
      <Contact/>
      <About/>
      <Card/>
      <LoginSection/>
      <RegisterSection/>
    </div>
  );
}
