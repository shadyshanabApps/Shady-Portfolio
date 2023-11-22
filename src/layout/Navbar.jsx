import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";

const Navbar= function() {

  const [showmenu, btn_icon] = useState(false);
  useEffect(() => {
    const header = document.getElementById("header-wrap");
    const flytext = document.getElementById("fly");
    const totop = document.getElementById("scroll-to-top");
    const sticky = header.offsetTop;
    const scrollCallBack = window.addEventListener("scroll", () => {
       btn_icon(false);
        if (window.pageYOffset > sticky) {
          header.classList.add("sticky");
          totop.classList.add("show");
          flytext.classList.add("hide");
        } else {
          header.classList.remove("sticky");
          flytext.classList.remove("hide");
          totop.classList.remove("show");
        } 
      });
      return () => {
        window.removeEventListener("scroll", scrollCallBack);
      };
    }, []);
    return(
        <nav className="navbar transition">
        <div className="container">
          <Link  className="navbar-brand" activeClass="active" spy to="hero-area">
            {/*<img src="./img/logo.png" className="img-fluid d-block imginit" alt="logo"/>*/}
            {/*<img src="./img/logo-3.png" className="img-fluid imgsaly" alt="logo"/>*/}
            {/*<img src={shadyLogo} className="img-fluid imggrey" alt="logo"  width={100} height={50} />*/}

            {/*<img src="./img/logo-7.png" className="img-fluid imgchef" alt="logo"/>*/}
            {/*<img src="./img/logo-5.png" className="img-fluid imgdesigner" alt="logo"/>*/}
            {/*<img src="./img/logo-4.png" className="img-fluid imglawyer" alt="logo"/>*/}
            {/*<img src="./img/logo-2.png" className="img-fluid imgdark" alt="logo"/>*/}
              <h5 className="id-color" style={{font: 'normal normal 700 15px/25px Poppins',
                   fontFamily: 'Poppins, sans-serif',
                  fontWeight: 800,
                  lineHeight: '1.2',
                  textAlign: 'center',
                  textTransform: 'uppercase',
                  border: '3px solid #333',
                  padding: '10px',
                  maxWidth: 'fit-content',
                  margin: '0 auto',
                  letterSpacing: '2px',
                  boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                  color: '#333',
                  backgroundColor: '#fff',
              }}
              ><span style={{backgroundColor: 'black', color: 'white', padding: '5px 0px 5px 5px', borderRadius: '5px',marginRight: '5px'}}
              >Shady </span>
                  Elsayed</h5>
          </Link>
          {/* Desktop menu Here */}
          <div className="dekstopmenu">
             <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link transition" activeClass="active" spy to="hero-area">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link transition" activeClass="active" spy to="about">
                  About me
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link transition" activeClass="active" spy to="whatido">
                  What I Do
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link transition" activeClass="active" spy to="gallery">
                  Portofolio
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link transition" activeClass="active" spy to="resume">
                  My resume
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link transition" activeClass="active" spy to="blog">
                  Blog
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link transition" activeClass="active" spy to="contact">
                  Contact Me
                </Link>
              </li>
            </ul>
          </div>
          {/* Desktop menu Here */}

          {/* mobile menu here */}
          {showmenu && 
          <div className="mobilemenu" >
            <ul className="navbar-nav mr-auto w-100 justify-content-end clearfix">
              <li className="nav-item">
                <Link className="nav-link" activeClass="active" smooth spy to="hero-area">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" activeClass="active" smooth spy to="about">
                  About me
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link transition" smooth activeClass="active" spy to="whatido">
                  What I Do
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link transition" smooth activeClass="active" spy to="gallery">
                  Portofolio
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link transition" smooth activeClass="active" spy to="resume">
                  My resume
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link transition"smooth activeClass="active" spy to="blog">
                  Blog
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link transition" smooth activeClass="active" spy to="contact">
                  Contact Me
                </Link>
              </li>
            </ul>
          </div>
          }
          <button className="burgermenu" type="button" onClick={() => btn_icon(!showmenu)}>
            <i className="fa fa-bars" aria-hidden="true"></i>
          </button>
          {/* mobile menu here */}
        </div>
      </nav>
    )
}

export default Navbar;