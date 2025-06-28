import Nav from "../shared/Nav";
import Footer from "../shared/Footer";
import Banner from "../Pages/banner/Banner";
import Skills from "../Pages/skills/Skills";
import About from "../Pages/about/About";

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
      <section>
        <Skills></Skills>
      </section>
      <Footer />
    </div>
  );
};

export default HomeLayout;
