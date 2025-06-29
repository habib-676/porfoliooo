import Nav from "../shared/Nav";
import Footer from "../shared/Footer";
import Banner from "../Pages/banner/Banner";
import Skills from "../Pages/skills/Skills";
import About from "../Pages/about/About";
import Education from "../Pages/education/Education";
import Contact from "../Pages/contact/Contact";
import { FaAngleDoubleUp } from "react-icons/fa";
import { Link } from "react-scroll";
import Projects from "../Pages/projects/Projects";
import AnimatedCursor from "react-animated-cursor";

const HomeLayout = () => {
  return (
    <div className="max-w-11/12 mx-auto text-primary-content relative">
      <AnimatedCursor
        innerSize={8}
        outerSize={35}
        innerScale={1}
        outerScale={2}
        outerAlpha={0}
        showSystemCursor={false}
        hasBlendMode={true}
        outerStyle={{
          border: "3px solid #007f5f",
        }}
        innerStyle={{
          backgroundColor: "#6ede8a",
        }}
      />
      <nav className="sticky top-0 z-50">
        <Nav />
      </nav>
      <main className="space-y-24">
        <section id="banner">
          <Banner></Banner>
        </section>
        <section id="about">
          <About></About>
        </section>
        <section id="skills" className="min-h-[80vh]">
          <Skills></Skills>
        </section>
        <section id="education" className="min-h-[80vh]">
          <Education></Education>
        </section>
        <section id="projects" className="min-h-[80vh]">
          <Projects></Projects>
        </section>
        <section id="contact">
          <Contact></Contact>
        </section>
      </main>
      <Link
        to="banner"
        smooth={true}
        duration={500}
        className="flex flex-col items-center mt-20 mb-10 hover:cursor-pointer"
      >
        <span className="text-accent p-3 transition-all duration-200 hover:animate-pulse hover:scale-110 hover:rounded-full hover:border-accent hover:border ">
          <FaAngleDoubleUp size={30} />
        </span>
        <span className="text-lg text-gray-500">Go to top</span>
      </Link>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default HomeLayout;
