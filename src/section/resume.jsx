import React from 'react';
import AOS from 'aos';
AOS.init();



const hero = () => {
	return(
		<div className="container">
			<div className="row">
				<div className="col-md-12 text-center">
	                <h2>My Resume</h2>
	                <div className="space-border"></div>
	            </div>
			</div>
			<div className="row gh-5">

				<div className="col-lg-6"
                    data-aos="fade-up"
                        data-aos-once="true"
                    >
                    <div className="p-4">
                        <h3 className="s_border">Experiences</h3>
                        <ul className="d_timeline">
                            <li className="d_timeline-item">
                                <h3 className="d_timeline-title">2022 - Present</h3>
                                <p className="d_timeline-text">
                                	<span className="d_title">Front End Developer</span>
                                	<span className="d_company">Egy Codes</span>
                                	Developed and maintained responsive web pages using React, HTML, CSS, and JavaScript, Typescript
                                    Worked closely with designers to ensure the website'sdesign and layout were accurately implemented
                                    Collaborated with back-end developers to integratefront-end and back-end systems
                                    Used Reducer pattern to manage application stateand improve user experience
                                    Assisted in the development of new features andfunctionality
                                    Debugged and tested code to ensure high-quality andbug-free application
                                    Gained hands-on experience with Git version controlsystem
                                </p>
                            </li>
                            <li className="d_timeline-item">
                                <h3 className="d_timeline-title">2020 - 2022</h3>
                                <p className="d_timeline-text">
                                	<span className="d_title">WordPress Developer</span>
                                	<span className="d_company">Freelance</span>
                                	Customized and developed WordPress themes and plugins Developed custom post types and taxonomies
                                    to suit project requirements Integrated third-party tools and plugins to improve functionality integrating
                                    ecommerce functionality using WooCommerce and other platforms. develop and maintain ecommerce
                                    websites, optimizing for speed, usability, and search engine optimization (SEO).
                                </p>
                            </li>
                            <li className="d_timeline-item">
                                <h3 className="d_timeline-title">JULY 2021 - NOV 2021</h3>
                                <p className="d_timeline-text">
                                	<span className="d_title">CUSTOMER SERVICE REPRESENTATIVE</span>
                                	<span className="d_company">Lanex</span>
                                	Answered customer inquiries via phone, email, and in-person
                                    Provided information about products and services
                                    Resolved customer complaints
                                    Maintained a positive attitude and worked with team members to ensure customer satisfaction
                                    Gained hands-on experience with CRM software
                                </p>
                            </li>
                            <li className="d_timeline-item">
                                <h3 className="d_timeline-title">JAN 2019 - MAR 2019</h3>
                                <p className="d_timeline-text">
                                	<span className="d_title">TECHNICAL SUPPORT</span>
                                	<span className="d_company">Telecom Egypt</span>
                                    	solve customer problems
                                        provide technical support to customers
                                        answer customer inquiries
                                        maintain a positive attitude and work with team members to ensure customer satisfaction
                                        gain hands-on experience with CRM software
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="col-lg-6" 
                    data-aos="fade-up"
                        data-aos-once="true"
                    >
                    <div className="p-4">
                        <h3 className="s_border">Education</h3>
                        <ul className="d_timeline">
                            <li className="d_timeline-item">
                                <h3 className="d_timeline-title">2019 - 2023</h3>
                                <p className="d_timeline-text">
                                	<span className="d_title">Bachelor of Computer Science</span>
                                	<span className="d_company">Arab Academy For Science, Technology and Maritime</span>
                                    First of batch , excellent with honor
                                </p>
                            </li>
                        </ul>
                    </div>
                    <div className="p-4">
                        <h3 className="s_border">Certifications and Licenses</h3>
                        <ul className="d_timeline">
                            <li className="d_timeline-item">
                                <h3 className="d_timeline-title">2019 - 2023</h3>
                                <p className="d_timeline-text">
                                	<span className="d_title">EXCELLENCE CERTIFICATES AS FIRST OF BATCH SEMESTER 1 – SEMESTER 8</span>
                                	<span className="d_company">Arab Academy For Science, Technology and Maritime</span>
                                </p>
                            </li>
                            <li className="d_timeline-item">
                                <h3 className="d_timeline-title">2021 - 2022</h3>
                                <p className="d_timeline-text">
                                	<span className="d_title">MOBILE APPLICATION DEVELOPMENT</span>
                                	<span className="d_company">Ministry of Communications and Information Technology</span>
                                </p>
                            </li>
                            <li className="d_timeline-item">
                                <h3 className="d_timeline-title">2021 - 2022</h3>
                                <p className="d_timeline-text">
                                	<span className="d_title">RELENTLESS PROGRAMMERS</span>
                                	<span className="d_company">Africa and Arab Collegiate Programming Championship</span>
                                </p>
                            </li>
                            <li className="d_timeline-item">
                                <h3 className="d_timeline-title">2019 - 2023</h3>
                                <p className="d_timeline-text">
                                	<span className="d_title">AMERICAN ENGLISH</span>
                                	<span className="d_company">Ain Shams University</span>
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="spacer-double"></div>
			</div>
		</div>
	);
}

export default hero;