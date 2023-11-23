import React from 'react';
import Typed from "react-typed";
import AOS from 'aos';
import profile_picture from '../assets/profile_picture.png';
import {Link} from "react-scroll";

AOS.init({
  offset: 200,
  duration: 800,
  easing: 'ease-in-out-sine',
  delay: 200,
  mirror: true
});

const hero = () => {
    return(
        <div className="v-center">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <h6 className="color"
                            data-aos="fade-up"
                            data-aos-delay="0"
                            data-aos-duration="1000"
                            data-aos-easing="ease"
                            data-aos-once="true"
                            >Welcome to My Website
                        </h6>
                        <div className="spacer-20"></div>
                        <div className="h1_big">Hi, I'm Shady Elsayed</div>
                        <div className="h1_big"
                            data-aos="fade-up"
                            data-aos-delay="300"
                            data-aos-duration="1000"
                            data-aos-easing="ease"
                            data-aos-once="true"
                            >
                            <Typed
                                strings={["a Front-End Developer." , "a Freelancer. "]}
                                typeSpeed={60}
                                backSpeed={50}
                                loop
                              />
                        </div>
                        <ul className="list_location"
                            data-aos="fade-up"
                            data-aos-delay="600"
                            data-aos-duration="1000"
                            data-aos-easing="ease"
                            data-aos-once="true"
                            >
                            <li><span>Egypt</span>Qalyobia, Obour</li>
                            {/* <li><span>USA</span>Louisiana, Bayerfurt</li>
                            <li><span>German</span>Hamburg, Dortmund</li>*/}
                        </ul>
                        <Link className="nav-link transition" activeClass="active" spy to="resume">
                        <button className="btn-main mt-3">
                            My Resume
                        </button>
                        </Link>
                    </div>

                    <div className="col-md-6" style={{display: 'flex', justifyContent: 'center'}}>
                        <img src={profile_picture} width={1100} height={800}
                             alt="imghero"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default hero;