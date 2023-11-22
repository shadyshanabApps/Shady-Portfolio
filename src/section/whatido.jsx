import React from 'react';
import AOS from 'aos';
import erp from "../assets/erp.png";
import mobileDevelopment from "../assets/mobile-development.png";
import onlineShopping from "../assets/online-shop.png";
AOS.init();

const whatido = () => {
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center"
                    data-aos="fade-up"
                    data-aos-delay="0"
                    data-aos-duration="1000"
                    data-aos-easing="ease"
                    data-aos-once="true"
                    >
                    <h2>What I Do</h2>
                    <div className="space-border"></div>
                </div>
            </div>
            <div className="spacer-single"></div>
            <div className="row">
                <div className="col-lg-4"
                    data-aos="fade"
                    data-aos-delay="300"
                    data-aos-duration="1000"
                    data-aos-easing="ease"
                    data-aos-once="true"
                    >
                    <div className="de_3d-box">
                        <div className="d-inner">
                            <i >
                                <img style={{width: "50px", height: "50px"}} src={erp} alt="erp" />
                            </i>
                            <div className="text">
                                <h3 style={{marginLeft:'5px'}}
                                >ERP</h3>
                                develop ERP system for small and medium enterprises including (HR, Accounting, Sales, Purchasing, Inventory, Journals ,Production, CRM, POS, etc..)
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4"
                    data-aos="fade"
                    data-aos-delay="400"
                    data-aos-duration="1000"
                    data-aos-easing="ease"
                    data-aos-once="true"
                    >
                    <div className="de_3d-box">
                        <div className="d-inner">
                            <i >
                                <img style={{width: "50px", height: "50px"}} src={onlineShopping} alt="erp" />
                            </i>
                            <div className="text">
                                <h3>E-Commerce</h3>
                                provide all e-commerce solutions including (dashboard,online store, payment gateway, shipping, etc..)
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4"
                    data-aos="fade"
                    data-aos-delay="500"
                    data-aos-duration="1000"
                    data-aos-easing="ease"
                    data-aos-once="true"
                    >
                    <div className="de_3d-box">
                        <div className="d-inner">
                            <i >
                                <img style={{width: "50px", height: "50px"}} src={mobileDevelopment} alt="erp" />
                            </i>
                            <div className="text">
                                <h3>Mobil Apps</h3>
                                develop mobile applications for android and ios
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default whatido;