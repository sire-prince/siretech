import Image from "next/image";
import NavBar from "./components/Navbar";
import Hero from "./components/Hero";
import Banner from "./components/Banner";
import About from "./components/About";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import WhatsAppbtn from "./components/WhatsAppbtn";
import Corevalues from "./components/Corevalues";
import Myprocess from "./components/Myprocess";
import Contact from "./components/Contact";
import Services from "./components/Services";
import FAQ from "./components/Faq";
import Blog from "./components/blog";


export default function Home() {
  return (
    <main>
<Hero />
<Banner />
<Services />
<Projects />
<Testimonials />
<Myprocess />
<Blog />
<FAQ />



    </main>
  );
}
