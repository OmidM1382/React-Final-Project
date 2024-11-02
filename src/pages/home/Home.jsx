import HeroSection from "../../components/heroSection/HeroSection";
import AboutSection from "../../components/aboutSection/AboutSection";
import CountsSection from "../../components/countsSection/Countssection";
import CoursesSection from "../../components/coursesSection/CoursesSection";
import FeaturesSection from "../../components/featuresSection/FeaturesSection";
import WhyUsSection from "../../components/whyUsSection/WhyUsSection";
import "../../../public/css/home.css";

const Home = () => {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <CountsSection />
      <WhyUsSection />
      <FeaturesSection />
      <CoursesSection />
    </main>
  );
};

export default Home;