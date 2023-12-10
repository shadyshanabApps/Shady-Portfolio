import React, {useState} from 'react';
import AOS from 'aos';
import semester1 from '../assets/certificates/semester1.jpg';
import semester2 from '../assets/certificates/semester2.jpg';
import semester3 from '../assets/certificates/semester3.jpg';
import semester4 from '../assets/certificates/semester4.jpg';
import semester5 from '../assets/certificates/semester5.jpg';
import semester6 from '../assets/certificates/semester6.jpg';
import semester7 from '../assets/certificates/semester7.jpg';
import bachelorEnglishCertificate from '../assets/certificates/bachelorEnglishCertificate.jpeg';
import bachelorArabicCertificate from '../assets/certificates/bachelorArabicCertificate.jpeg';
import honorCertificate from '../assets/certificates/honorCertificate.jpeg';
import mobileAppDev from '../assets/certificates/mobileAppDev.jpg';
import relentlessProgrammers from '../assets/certificates/relentlessProgrammers.jpg';
import lifeSkills from '../assets/certificates/lifeSkills.jpg';
import Network from '../assets/certificates/Network+.jpeg';
import ICDL from '../assets/certificates/ICDL.jpeg';
import goldenJubileeHonor1 from '../assets/certificates/goldenJubileeHonor 1.jpeg';
import goldenJubileeHonor2 from '../assets/certificates/goldenJubileeHonor 2.jpeg';
import statementFirstOfBatch from '../assets/certificates/statementFirstOfBatch.jpeg';

AOS.init();



const Resume = () => {

    const [lighbx, setlighbx] = useState(0);
    const handleBtnClick = (index) => {
        setlighbx(index);
        var x = document.getElementsByTagName("BODY")[0];
        x.style.overflow = "hidden";
    };
    const handleBtnClickclose = () => {
        setlighbx(0);
        var x = document.getElementsByTagName("BODY")[0];
        x.style.overflow = "auto";
    };

    const experience = [
        {
            title : "Front End Developer",
            company : "Egy Codes",
            date : "2022 - Present",
            description : "Developed and maintained responsive web pages using React, HTML, CSS, and JavaScript, Typescript Worked closely with designers to ensure the website'sdesign and layout were accurately implemented Collaborated with back-end developers to integratefront-end and back-end systems Used Reducer pattern to manage application stateand improve user experience Assisted in the development of new features andfunctionality Debugged and tested code to ensure high-quality andbug-free application Gained hands-on experience with Git version controlsystem",
        },
        {
            title : "WordPress Developer",
            company : "Freelance",
            date : "2020 - 2022",
            description : "Customized and developed WordPress themes and plugins Developed custom post types and taxonomies to suit project requirements Integrated third-party tools and plugins to improve functionality integrating ecommerce functionality using WooCommerce and other platforms. develop and maintain ecommerce websites, optimizing for speed, usability, and search engine optimization (SEO).",
        },
        {
            title : "Customer Service Representative",
            company : "Lanex",
            date : "JULY 2021 - NOV 2021",
            description : "Answered customer inquiries via phone, email, and in-person Provided information about products and services Resolved customer complaints Maintained a positive attitude and worked with team members to ensure customer satisfaction Gained hands-on experience with CRM software",
        },
        {
            title : "Technical Support",
            company : "Telecom Egypt",
            date : "JAN 2019 - MAR 2019",
            description : "solve customer problems provide technical support to customers answer customer inquiries maintain a positive attitude and work with team members to ensure customer satisfaction gain hands-on experience with CRM software",
        }
    ]

    const education = [
        {
            grade : "Bachelor of Computer Science",
            university : "Arab Academy For Science, Technology and Maritime",
            date : "2019 - 2023",
            description : "First of batch , excellent with honor",
            lightbx : 1
        }
    ]

    const certificates = [
        {
            title : "EXCELLENCE CERTIFICATES AS FIRST OF BATCH SEMESTER 1 – SEMESTER 8",
            issuer : "Arab Academy For Science, Technology and Maritime",
            date : "2019 - 2023",
            description : "",
            lighbx : 2
        },
        {
            title : "MOBILE APPLICATION DEVELOPMENT",
            issuer : "Ministry of Communications and Information Technology",
            date : "2020",
            description : "",
            lighbx : 3
        },
        {
            title : "RELENTLESS PROGRAMMERS",
            issuer : "Africa and Arab Collegiate Programming Championship",
            date : "2020",
            description : "",
            lighbx : 4
        },
        {
            title : "AMERICAN ENGLISH",
            issuer : "Ain Shams University",
            date : "2019",
            description : "",
            lighbx : 5
        },
        {
            title : "LIFE SKILLS",
            issuer : "Ministry of Communications and Information Technology",
            date : "2020",
            description : "",
            lighbx : 6
        }

    ]

   const LightbxList = [
       {
           title : "Education Attachments",
           issuer : "Arab Academy For Science, Technology and Maritime",
           date : "2019 - 2023",
           images: [bachelorEnglishCertificate , bachelorArabicCertificate , honorCertificate , goldenJubileeHonor1 , goldenJubileeHonor2 , statementFirstOfBatch],
           lightbx : 1,
       },
       {
              title : "Excellence Certificates Semester 1 – Semester 8",
                issuer : "Arab Academy For Science, Technology and Maritime",
                date : "2019 - 2023",
            images: [semester1 , semester2 , semester3 , semester4 , semester5 , semester6 , semester7],
            lightbx : 2,
        },
        {
            title : "Mobile Application Development",
            issuer : "Ministry of Communications and Information Technology",
            date: "2020",
            images: [mobileAppDev],
            lightbx : 3,
        },
        {
            title : "Relentless Programmers",
            issuer : "Africa and Arab Collegiate Programming Championship",
            date: "2020",
            images: [relentlessProgrammers],
            lightbx : 4,
        },
        {
            title : "American English",
            issuer : "Ain Shams University",
            date: "2019",
            images: [],
            lightbx : 5,
        },
       {
              title : "Life Skills",
              issuer : "Ministry of Communications and Information Technology",
                date: "2020",
              images: [lifeSkills],
              lightbx : 6,
         },
         {
              title : "ICDL",
              issuer : "Success Academy, Microsoft",
              images: [ICDL],
              lightbx : 7,
       }
       ]

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
                        {/*<ul className="d_timeline">*/}
                        {/*    <li className="d_timeline-item">*/}
                        {/*        <h3 className="d_timeline-title">2022 - Present</h3>*/}
                        {/*        <p className="d_timeline-text">*/}
                        {/*        	<span className="d_title">Front End Developer</span>*/}
                        {/*        	<span className="d_company">Egy Codes</span>*/}
                        {/*        	Developed and maintained responsive web pages using React, HTML, CSS, and JavaScript, Typescript*/}
                        {/*            Worked closely with designers to ensure the website'sdesign and layout were accurately implemented*/}
                        {/*            Collaborated with back-end developers to integratefront-end and back-end systems*/}
                        {/*            Used Reducer pattern to manage application stateand improve user experience*/}
                        {/*            Assisted in the development of new features andfunctionality*/}
                        {/*            Debugged and tested code to ensure high-quality andbug-free application*/}
                        {/*            Gained hands-on experience with Git version controlsystem*/}
                        {/*        </p>*/}
                        {/*    </li>*/}
                        {/*    <li className="d_timeline-item">*/}
                        {/*        <h3 className="d_timeline-title">2020 - 2022</h3>*/}
                        {/*        <p className="d_timeline-text">*/}
                        {/*        	<span className="d_title">WordPress Developer</span>*/}
                        {/*        	<span className="d_company">Freelance</span>*/}
                        {/*        	Customized and developed WordPress themes and plugins Developed custom post types and taxonomies*/}
                        {/*            to suit project requirements Integrated third-party tools and plugins to improve functionality integrating*/}
                        {/*            ecommerce functionality using WooCommerce and other platforms. develop and maintain ecommerce*/}
                        {/*            websites, optimizing for speed, usability, and search engine optimization (SEO).*/}
                        {/*        </p>*/}
                        {/*    </li>*/}
                        {/*    <li className="d_timeline-item">*/}
                        {/*        <h3 className="d_timeline-title">JULY 2021 - NOV 2021</h3>*/}
                        {/*        <p className="d_timeline-text">*/}
                        {/*        	<span className="d_title">CUSTOMER SERVICE REPRESENTATIVE</span>*/}
                        {/*        	<span className="d_company">Lanex</span>*/}
                        {/*        	Answered customer inquiries via phone, email, and in-person*/}
                        {/*            Provided information about products and services*/}
                        {/*            Resolved customer complaints*/}
                        {/*            Maintained a positive attitude and worked with team members to ensure customer satisfaction*/}
                        {/*            Gained hands-on experience with CRM software*/}
                        {/*        </p>*/}
                        {/*    </li>*/}
                        {/*    <li className="d_timeline-item">*/}
                        {/*        <h3 className="d_timeline-title">JAN 2019 - MAR 2019</h3>*/}
                        {/*        <p className="d_timeline-text">*/}
                        {/*        	<span className="d_title">TECHNICAL SUPPORT</span>*/}
                        {/*        	<span className="d_company">Telecom Egypt</span>*/}
                        {/*            	solve customer problems*/}
                        {/*                provide technical support to customers*/}
                        {/*                answer customer inquiries*/}
                        {/*                maintain a positive attitude and work with team members to ensure customer satisfaction*/}
                        {/*                gain hands-on experience with CRM software*/}
                        {/*        </p>*/}
                        {/*    </li>*/}
                        {/*</ul>*/}
                        <ul className="d_timeline" >
                        {
                            experience.map((item , index) => {
                                return(
                                        <li className="d_timeline-item" key={index}>
                                            <h3 className="d_timeline-title">{item.date}</h3>
                                            <p className="d_timeline-text">
                                                <span className="d_title">{item.title}</span>
                                                <span className="d_company">{item.company}</span>
                                                {item.description}
                                            </p>
                                        </li>
                                )
                            })
                        }
                        </ul>
                    </div>
                </div>

                <div className="col-lg-6" 
                    data-aos="fade-up"
                        data-aos-once="true"
                    >
                    <div className="p-4">
                        <h3 className="s_border">Education</h3>
                        {/*<ul className="d_timeline">*/}
                        {/*    <li className="d_timeline-item">*/}
                        {/*        <h3 className="d_timeline-title">2019 - 2023</h3>*/}
                        {/*        <p className="d_timeline-text">*/}
                        {/*        	<span className="d_title">Bachelor of Computer Science</span>*/}
                        {/*        	<span className="d_company">Arab Academy For Science, Technology and Maritime</span>*/}
                        {/*            First of batch , excellent with honor*/}
                        {/*        </p>*/}
                        {/*    </li>*/}
                        {/*</ul>*/}
                        <ul className="d_timeline" >
                        {
                            education.map((item , index) => {
                                return(
                                        <li className="d_timeline-item" key={index} >
                                            <h3 className="d_timeline-title">{item.date}</h3>
                                            <p className="d_timeline-text">
                                                <span className="d_title">{item.grade}</span>
                                                <span className="d_company">{item.university}</span>
                                                {item.description}
                                                <br/>
                                                <a href="#" onClick={() => handleBtnClick(item.lightbx)}
                                                   style={{color: '#cf1f1f',margin: '10px 0'}}
                                                >View Certificates</a>
                                            </p>

                                        </li>
                                )
                            })
                        }
                        </ul>

                    </div>
                    <div className="p-4">
                        <h3 className="s_border">Certifications and Licenses</h3>
                        {/*<ul className="d_timeline">*/}
                        {/*    <li className="d_timeline-item">*/}
                        {/*        <h3 className="d_timeline-title">2019 - 2023</h3>*/}
                        {/*        <p className="d_timeline-text">*/}
                        {/*        	<span className="d_title">EXCELLENCE CERTIFICATES AS FIRST OF BATCH SEMESTER 1 – SEMESTER 8</span>*/}
                        {/*        	<span className="d_company">Arab Academy For Science, Technology and Maritime</span>*/}
                        {/*        </p>*/}
                        {/*    </li>*/}
                        {/*    <li className="d_timeline-item">*/}
                        {/*        <h3 className="d_timeline-title">2021 - 2022</h3>*/}
                        {/*        <p className="d_timeline-text">*/}
                        {/*        	<span className="d_title">MOBILE APPLICATION DEVELOPMENT</span>*/}
                        {/*        	<span className="d_company">Ministry of Communications and Information Technology</span>*/}
                        {/*        </p>*/}
                        {/*    </li>*/}
                        {/*    <li className="d_timeline-item">*/}
                        {/*        <h3 className="d_timeline-title">2021 - 2022</h3>*/}
                        {/*        <p className="d_timeline-text">*/}
                        {/*        	<span className="d_title">RELENTLESS PROGRAMMERS</span>*/}
                        {/*        	<span className="d_company">Africa and Arab Collegiate Programming Championship</span>*/}
                        {/*        </p>*/}
                        {/*    </li>*/}
                        {/*    <li className="d_timeline-item">*/}
                        {/*        <h3 className="d_timeline-title">2019 - 2023</h3>*/}
                        {/*        <p className="d_timeline-text">*/}
                        {/*        	<span className="d_title">AMERICAN ENGLISH</span>*/}
                        {/*        	<span className="d_company">Ain Shams University</span>*/}
                        {/*        </p>*/}
                        {/*    </li>*/}
                        {/*</ul>*/}
                        {
                            <ul className="d_timeline">
                                {certificates.map((item, index) => {
                                    return (
                                        <li className="d_timeline-item" key={index}>
                                            <h3 className="d_timeline-title">{item.date}</h3>
                                            <p className="d_timeline-text">
                                                <span className="d_title">{item.title}</span>
                                                <span className="d_company">{item.issuer}</span>
                                               <a href="#" onClick={() => handleBtnClick(item.lighbx)}
                                               style={{color: '#cf1f1f',margin: '10px 0'}}
                                               >View Certificate</a>
                                            </p>
                                        </li>
                                    );
                                })}
                            </ul>
                        }
                    </div>
                </div>
                <div className="spacer-double"></div>
                {
                    LightbxList.map((val, i) => (
                        //create suitable lightbox for each certificate
                        <div className="LightboxGal" key={i} style={{display: lighbx === val.lightbx ? 'block' : 'none'}}>
                            <div className="closeGal">
                                <button className="button-close" onClick={(e) => { e.preventDefault(); handleBtnClickclose(val.lightbx); }}></button>
                            </div>
                            <div className="v-center w-100">
                                <div className="mainLightbox container">
                                    <div className="row g-5">
                                        <div className="col-lg-8">
                                            {val.lightbx !== 5 ?
                                                <div className="row g-4">
                                                    {
                                                        val.images.map((val, i) => (
                                                            <div key={i} className="col-lg-10 item">
                                                                <img src={val} alt="galleryimage" className="img-fluid"/>
                                                            </div>
                                                        ))
                                                    }
                                                </div>:
                                                <div className="row g-4">
                                                    {val.images.map((image, i) => (
                                                        <div key={i} className="col-lg-4 item">
                                                            <img
                                                                src={image}
                                                                alt={`galleryimage-${i}`}
                                                                className="img-fluid"
                                                                style={{ maxHeight: '500px' }}
                                                            />
                                                            <hr/>
                                                        </div>
                                                    ))}
                                                </div>
                                            }
                                        </div>

                                        <div className="col-lg-4 de_project-info">
                                            <h3>{val.title}</h3>
                                            <p>{val.description}</p>
                                            <div className="de_project-details">
                                                <div className="d-field">
                                                    <i className="fa fa-user-o"></i>Issuer: <span style={{color: '#cf1f1f',margin: '10px 0'}}
                                                >{val.issuer}</span>
                                                </div>
                                                <div className="d-field">
                                                    <i className="fa fa-calendar-o"></i>Year: <span>{val.date}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
			</div>
		</div>
	);
}

export default Resume;