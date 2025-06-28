import Nav from "../shared/Nav";
import Footer from "../shared/Footer";
import Banner from "../Pages/banner/Banner";
import Skills from "../Pages/skills/Skills";
import About from "../Pages/about/About";
import Education from "../Pages/education/Education";
import Contact from "../Pages/contact/Contact";

const HomeLayout = () => {
  return (
    <div className="max-w-11/12 mx-auto text-primary-content">
      <Nav />
      <section id="banner">
        <Banner></Banner>
      </section>
      <section id="about">
        <About></About>
      </section>
      <section id="skills">
        <Skills></Skills>
      </section>
      <section id="education">
        <Education></Education>
      </section>
      <section id="contact">
        <Contact></Contact>
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default HomeLayout;
