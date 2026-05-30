import About from "./components/home/About";
import Admissions from "./components/home/Admissions";
import Gallery from "./components/home/Gallery";
import Hero from "./components/home/Hero";
import WhyChooseUs from "./components/home/WhyChooseUs";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";


export default function Home() {
  return (
    <>
      <Header />
      
      <main className="flex-grow font-['Plus_Jakarta_Sans']">
        <Hero />
        <About />
        <WhyChooseUs />
        <Gallery />
        <Admissions />
      </main>
      
      <Footer />
    </>
  );
}