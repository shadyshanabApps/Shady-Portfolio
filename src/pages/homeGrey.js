import { Parallax } from "react-parallax";
import { Link } from "react-scroll";
import Navbar from '../layout/Navbar';
import Hero from '../section/heroGrey';
import About from '../section/about';
import Blockquote from '../section/blockquoteGrey';
import Whatido from '../section/whatido';
import Gallery from '../section/gallery';
import Resume from '../section/resume';
import Counter from '../section/counterGrey';
import Blog from '../section/blog';
import Contact from '../section/contactGrey';
import Footer from '../section/footer';
import Preloader from "../layout/Preloader";
import ScrollToTopBtn from '../layout/ScrollToTop';
import { GlobalStyles } from './style/grey';
import {useContext, useEffect} from "react";
import {ScrollContext} from "./HomeGreyPages/ScrollContext";

const image1 ="./img/background/l11.jpg";

function HomeGrey() {
  const { prevScrollPosition, setPrevScrollPosition } = useContext(ScrollContext);

  useEffect(() => {
    if (prevScrollPosition !== 0)
    window.scrollTo({ top: prevScrollPosition, behavior: 'smooth' });
       setPrevScrollPosition(0);
  }, [prevScrollPosition]);

  return (
    <>
    <GlobalStyles/>
    <Preloader/>
    <div className="home">

      <header id="header-wrap">
        <Navbar />
      </header>

      {/* HERO */}
      <section id="hero-area" className="bg-bottom py-0">
        <Parallax bgImage={image1} strength={300}>
        <Hero/>
        <Link smooth spy to="about">
          <span className="mouse transition" id="fly">
              <span className="scroll"></span>
          </span>
        </Link>
        </Parallax>
      </section>

      {/* ABOUT */}
      <section id="about" className="pb-0">
        <About/>
        <Blockquote/>
      </section>

      {/* What I DO */}
      <section id="whatido">
        <Whatido/>
      </section>

      {/* Gallery */}
      <section id="gallery">
        <Gallery/>
      </section>

      {/* Gallery */}
      <section id="resume" className="pb-0">
        <Resume/>
        {/*<Counter/>*/}
      </section>

      {/* Gallery */}
      <section id="blog" className="pb-0">
        <Blog/>
      </section>

      {/* contact */}
      <section id="contact" className="pb-0">
        <Contact/>
        <Footer/>
      </section>

      


      <div className="float-text">
          <div className="de_social-icons">
              <span className="buton"><i className="fa fa-facebook fa-lg"></i></span>
              <span className="buton"><i className="fa fa-twitter fa-lg"></i></span>
              <span className="buton"><i className="fa fa-instagram fa-lg"></i></span>
          </div>
          <span>Follow Me</span>
      </div>
    </div>
    <ScrollToTopBtn />
    </>
  );
}

export default HomeGrey;
