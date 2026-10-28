
import "./home-page.css";
import Navbar from "../components/Navbar";
import HomePage from "../components/HomePage";
import HomeSections from "../components/HomeSections";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <HomePage />
      <HomeSections />
      <Footer />
    </>
  );
}
