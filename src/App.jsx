import { useState } from "react";
import "./App.css";
import About from "./components/about/About";
import Campus from "./components/campus/Campus";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Programs from "./components/programs/Programs";
import Testimonials from "./components/testimonials/Testimonials";
import Title from "./components/title/Title";
import VideoPlayer from "./components/video-player/VideoPlayer";

function App() {
  const [play, setplay] = useState(false);

  return (
    <>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle="Our Programs" title="What We Offer" />
        <Programs />
        <About setplay={setplay} />
        <Title subTitle="Gallery" title="Campus Photos" />
        <Campus />
        <Title subTitle="Testimonials" title="What students says" />
        <Testimonials />
        <Title subTitle="Contact Us" title="Get in Touch" />
        <Contact />
        <Footer />
      </div>
      <VideoPlayer play={play} setplay={setplay} />
    </>
  );
}
export default App;
