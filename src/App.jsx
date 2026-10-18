import "./App.css";
import About from "./components/about/About";
import Campus from "./components/campus/Campus";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Programs from "./components/programs/Programs";
import Title from "./components/title/Title";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle="Our Programs" title="What We Offer" />
        <Programs />
        <About />
        <Title subTitle="Gallery" title="Campus Photos" />
        <Campus />
      </div>
    </>
  );
}

export default App;
