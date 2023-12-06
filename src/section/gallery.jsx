import React from 'react';
import Masonry from "react-masonry-component";
import { createGlobalStyle } from 'styled-components';
import AOS from 'aos';
import jewelryAddPurchase1 from '../assets/projects/jewelry/jewelry-add-purchase1.PNG';
import jewelryAddPurchase2 from '../assets/projects/jewelry/jewelry-add-purchase2.PNG';
import jewelryAddPurchase3 from '../assets/projects/jewelry/jewelry-add-purchase3.PNG';
import jewelryAddPurchase4 from '../assets/projects/jewelry/jewelry-add-purchase4.PNG';
import jewelryPurchase from '../assets/projects/jewelry/jewelry-purchase.PNG';
import cityStores1 from '../assets/projects/city-stores/city-stores1.jpg';
import cityStores2 from '../assets/projects/city-stores/city-stores2.jpg';
import cityStores3 from '../assets/projects/city-stores/city-stores3.jpg';
import cityStores4 from '../assets/projects/city-stores/city-stores4.jpg';
import cityStores5 from '../assets/projects/city-stores/city-stores5.jpg';
import cityStores6 from '../assets/projects/city-stores/city-stores6.jpg';
import cityStores7 from '../assets/projects/city-stores/city-stores7.jpg';
import cityStores8 from '../assets/projects/city-stores/city-stores8.jpg';
import cityStores9 from '../assets/projects/city-stores/city-stores9.jpg';
import cityStores10 from '../assets/projects/city-stores/city-stores10.jpg';
import cityStores11 from '../assets/projects/city-stores/city-stores11.jpg';
import cityStores12 from '../assets/projects/city-stores/city-stores12.jpg';
import cityStores13 from '../assets/projects/city-stores/city-stores13.jpg';
import cityStores14 from '../assets/projects/city-stores/city-stores14.jpg';
import cityStores15 from '../assets/projects/city-stores/city-stores15.jpg';
import cityStores16 from '../assets/projects/city-stores/city-stores16.jpg';
import cityStores17 from '../assets/projects/city-stores/city-stores17.jpg';
import alRehaili1 from '../assets/projects/alrehaili/alrehaili1.PNG';
import alRehaili2 from '../assets/projects/alrehaili/alrehaili2.PNG';
import alRehaili3 from '../assets/projects/alrehaili/alrehaili3.PNG';
import alRehaili4 from '../assets/projects/alrehaili/alrehaili4.PNG';
import alRehaili5 from '../assets/projects/alrehaili/alrehaili5.PNG';
import veilya1 from '../assets/projects/veilya/veilya1.png';
import veilya2 from '../assets/projects/veilya/veilya2.PNG';
import veilya3 from '../assets/projects/veilya/veilya3.PNG';
import veilya4 from '../assets/projects/veilya/veilya4.PNG';
import veilya5 from '../assets/projects/veilya/veilya5.PNG';
import veilya6 from '../assets/projects/veilya/veilya6.PNG';
import veilya7 from '../assets/projects/veilya/veilya7.PNG';
import veilya8 from '../assets/projects/veilya/veilya8.PNG';
import standard1 from '../assets/projects/standard-erp/standard1.PNG';
import standard2 from '../assets/projects/standard-erp/standard2.PNG';
import standard3 from '../assets/projects/standard-erp/standard3.PNG';
import standard4 from '../assets/projects/standard-erp/standard4.PNG';
import standard5 from '../assets/projects/standard-erp/standard5.PNG';
import standard6 from '../assets/projects/standard-erp/standard6.PNG';
import standard7 from '../assets/projects/standard-erp/standard7.PNG';
import standard8 from '../assets/projects/standard-erp/standard8.PNG';
import hr1 from '../assets/projects/hr/hr1.PNG';
import hr2 from '../assets/projects/hr/hr2.PNG';
import hr3 from '../assets/projects/hr/hr3.PNG';
import hr4 from '../assets/projects/hr/hr4.PNG';
import hr5 from '../assets/projects/hr/hr5.PNG';
import hr6 from '../assets/projects/hr/hr6.PNG';
import hr7 from '../assets/projects/hr/hr7.PNG';
import hr8 from '../assets/projects/hr/hr8.PNG';
import hr9 from '../assets/projects/hr/hr9.PNG';
import hr10 from '../assets/projects/hr/hr10.PNG';
import hr11 from '../assets/projects/hr/hr11.PNG';
import hr12 from '../assets/projects/hr/hr12.PNG';
import hr13 from '../assets/projects/hr/hr13.PNG';
import hr14 from '../assets/projects/hr/hr14.PNG';
import lycee1 from '../assets/projects/lyceebalzak/lycee1.PNG';
import lycee2 from '../assets/projects/lyceebalzak/lycee2.PNG';
import lycee3 from '../assets/projects/lyceebalzak/lycee3.PNG';
import lycee4 from '../assets/projects/lyceebalzak/lycee4.PNG';
import lycee5 from '../assets/projects/lyceebalzak/lycee5.PNG';
import lycee6 from '../assets/projects/lyceebalzak/lycee6.PNG';
import lycee7 from '../assets/projects/lyceebalzak/lycee7.PNG';
import lycee8 from '../assets/projects/lyceebalzak/lycee8.PNG';
import lycee9 from '../assets/projects/lyceebalzak/lycee9.PNG';
import lycee10 from '../assets/projects/lyceebalzak/lycee10.PNG';
import lycee11 from '../assets/projects/lyceebalzak/lycee11.PNG';
import lycee12 from '../assets/projects/lyceebalzak/lycee12.PNG';
import lycee13 from '../assets/projects/lyceebalzak/lycee13.PNG';
import lycee14 from '../assets/projects/lyceebalzak/lycee14.PNG';
import lycee15 from '../assets/projects/lyceebalzak/lycee15.PNG';
import lycee16 from '../assets/projects/lyceebalzak/lycee16.PNG';


AOS.init();

const GlobalStyles = createGlobalStyle`
    body.hide{
          overflow-y: hidden; /* Hide vertical scrollbar */
          overflow-x: hidden; /* Hide horizontal scrollbar */
        }
`;

const Gallery= function() {
    /* lightbox1 */
    const [lighbx, setlighbx] = React.useState(0);
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


    const MasonryList = [
        {
            img : lycee1,
            title : "Lycee Balzak ERP",
            tag : "website",
            lighbx : 1,
            stack: "React",
            row: 1,
        },
        {
            img : standard1,
            title : "Standard ERP",
            tag : "website",
            lighbx : 2,
            stack: "React",
            row: 1,
        },
        {
            img : hr1,
            title : "HR",
            tag : "website",
            lighbx : 3,
            stack: "React",
            row: 1,
        },
        {
            img : jewelryAddPurchase2,
            title : "Jewelry",
            tag : "website",
            lighbx : 4,
            stack: "React",
            row: 1,
        },
        {
            img : alRehaili1,
            title : "Alrehaili",
            tag : "website",
            lighbx : 6,
            stack: "Wordpress",
            row: 2,
        },
        {
            img : veilya1,
            title : "Veilya",
            tag : "website",
            lighbx : 7,
            stack: "Wordpress",
            row: 2,
        },
        {
            img : cityStores4,
            title : "City Stores",
            tag : "mobile app",
            lighbx: 5,
            stack: "React Native",
            row: 2,
        },
    ];

     const stackGroups = MasonryList.reduce((groups, item) => {
        const val = item.stack;
        groups[val] = groups[val] || [];
        groups[val].push(item);
        return groups;
    }, {});

    const StackMasonry = Object.entries(stackGroups).map(([stack, stackItems]) => (
        <div key={stack} style={{marginBottom: '50px'}}>
            <h2>{stack}</h2>
            <Masonry className={"row my-gallery-class"} elementType={"div"} >
                {stackItems.map((val, i) => (
                    <div
                        className="col-lg-6 image-element-class de_modal"
                        onClick={() => handleBtnClick(val.lighbx)}
                        data-aos="fade-up"
                        data-aos-once="true"
                        key={i}
                        style={stack === "React Native" ? {width: '250px'} : {}}
                    >
                        <div className="card-image-1">
                            <div className="d-text">
                                <div>
                                    <h3>{val.title}</h3>
                                    {/*<h4>{val.stack}</h4>*/}
                                </div>
                                <h5 className="d-tag">{val.tag}</h5>
                            </div>
                            <img src={val.img} alt="gallery"
                                 style={stack === "React Native" ? {maxHeight: '500px',objectFit: 'fill'} : {}}/>
                        </div>
                    </div>
                ))}
            </Masonry>
        </div>
    ));

   /* const renderMasonryLayout = () => {
        const rows = {};

        // Group items by row number
        MasonryList.forEach((item) => {
            const { row } = item;
            if (!rows[row]) {
                rows[row] = { stack: item.stack, items: [] };
            }
            rows[row].items.push(item);
        });

        // Generate Masonry layout components for each row with stack titles
        return Object.keys(rows).map((row) => (
            <div key={`row_${row}`}>
                <h2>{rows[row].stack}</h2>
                <Masonry key={`masonry_${row}`} className={"row my-gallery-class"} elementType={"div"}>
                    {rows[row].items.map((val, i) => (
                        <div
                            key={`item_${row}_${i}`}
                            className="col-lg-6 image-element-class de_modal"
                            onClick={() => handleBtnClick(val.lighbx)}
                            data-aos="fade-up"
                            data-aos-once="true"
                        >
                            <div className="card-image-1">
                                <div className="d-text">
                                    <h3>{val.title}</h3>
                                    <h5 className="d-tag">{val.tag}</h5>
                                </div>
                                <img src={val.img} alt="gallery" />
                            </div>
                        </div>
                    ))}
                </Masonry>
            </div>
        ));
    };
*/


    const lighbxList = [
        {
            title : "Lycee Balzak ERP",
            description : "Developed an efficient ERP system tailored for school\n" +
                "                                    management.\n" +
                "                                    Implemented modules for stocks, accounting,\n" +
                "                                    transportation, student affairs, charts, admission, and\n" +
                "                                    dashboard.\n" +
                "                                    Managed school inventory, expenses, and budgets\n" +
                "                                    through the stocks and accounting modules.\n" +
                "                                    Streamlined transportation logistics, including bus\n" +
                "                                    routes, schedules, and expenses.\n" +
                "                                    Enhanced student affairs management with features\n" +
                "                                    for regestration, class accomodations, and parent\n" +
                "                                    information.\n" +
                "                                    Utilized data visualization charts for insightful analysis\n" +
                "                                    and decision-making.\n" +
                "                                    Simplified the student admission process with online\n" +
                "                                    forms, document management, and enrollment\n" +
                "                                    tracking.\n" +
                "                                    Created an intuitive dashboard and comprehensive\n" +
                "                                    reports for monitoring finances, attendance,\n" +
                "                                    transportation, and student performance.",
            client : "Lycée Balzac",
            type : "ERP",
            year : "2022",
            preview : "erp.egycodes.com",
            href : "http://www.erp.egycodes.com/",
            images : [lycee1,lycee2,lycee13,lycee16,lycee3,lycee4,lycee5,lycee6,lycee7,lycee8,lycee9,lycee10,lycee11,lycee12,lycee14,lycee15],
            blockquote : "Full Solution for School Management",
            span : "Shady Elsayed",
            lighbx : 1,
        },
        {
            title : "Satndard ERP",
            description: `Developed a comprehensive ERP system customized for enterprise management.
                  Implemented modules covering various aspects:
                  - Finance & Accounting
                  - Inventory Management
                  - Human Resources
                  - Customer Relationship Management (CRM)
                  - Supply Chain & Logistics

                  Managed financial activities, including budgeting, expense tracking,
                  and revenue analysis through the Finance & Accounting module.
                  Streamlined inventory control, procurement, and order management
                  with the Inventory Management module.

                  Optimized supply chain logistics, from procurement to distribution,
                  ensuring efficient handling of resources and products.

                  Leveraged data visualization tools for insightful analytics and
                  decision-making across all modules.

                  Facilitated smooth workflows and data-driven decision-making for
                  enterprise-wide operations.
                  
                  Full Reports for all modules.
                  `,
            client : "Standard",
            type : "ERP",
            year : "2023",
            preview : "erp.egycodes.com",
            href : "http://www.jewelary.egycodes.com/",
            images : [standard1,standard2,standard3,standard4,standard5,standard6,standard7,standard8],
            blockquote : "Full Solution for Enterprise Management",
            span : "Shady Elsayed",
            lighbx : 2,
        },
        {
            title : "HR",
            description : "Developed a comprehensive HR system for employee management.\n" +
                "                  Implemented modules covering various aspects:\n" +
                "                  - Employee Management\n" +
                "                  - Payroll Management\n" +
                "                  - Recruitment Management\n" +
                "                  - Performance Management\n" +
                "                  - Time & Attendance Management\n" +
                "                  - Leave Management\n" +
                "                  - Expense Management\n" +
                "                  - Document Management\n" +
                "                  - Reports\n" +
                "                  - Dashboard\n"
                ,

            client : "Standard",
            type : "HR",
            year : "2022",
            preview : "hr.egycodes.com",
            href : "http://www.hr.egycodes.com/",
            images : [hr1,hr2,hr3,hr4,hr5,hr6,hr7,hr8,hr9,hr10,hr11,hr12,hr13,hr14],
            blockquote: "Full Solution for HR Management",
            span: "Shady Elsayed",
            lighbx : 3,
        },
        {
            title: "Jewelry",
            description: "Developed a comprehensive Jewelry system for jewelry management.\n" +
                "                  Implemented modules covering various aspects:\n" +
                "                  - Purchase Management\n" +
                "                  - Create and Keep Track of Items Serials\n" +
                "                  - Sales Management\n" +
                "                  - Inventory Management\n" +
                "                  - Reports\n" +
                "                  - Dashboard\n"
            ,

            client: "jewelry",
            type: "jewelry",
            year: "2022",
            preview: "jewelry.egycodes.com",
            href: "",
            images: [jewelryPurchase, jewelryAddPurchase1, jewelryAddPurchase2, jewelryAddPurchase3, jewelryAddPurchase4],
            blockquote: "Full Solution for Jewelry Management",
            span: "Shady Elsayed",
            lighbx: 4,
        },
        {
            title: "City Stores",
            description: "Imagine Uber Eats for clothes! it's a mobile app that connects shoppers with nearby boutiques, making it easy to discover and buy trendy apparel from local stores. For stores, the user-friendly dashboard streamlines inventory uploads, helping them showcase their latest offerings to eager fashion enthusiasts.",
            client: "Graduation Project",
            type: "Mobile App",
            year: "2023",
            preview: "only on request",
            href: "",
            images: [cityStores1, cityStores2, cityStores3, cityStores4, cityStores5, cityStores6, cityStores7, cityStores8, cityStores9, cityStores10, cityStores11, cityStores12, cityStores13, cityStores14, cityStores15, cityStores16, cityStores17],
            blockquote: "Full Solution for Local Stores",
            span: "Shady Elsayed",
            lighbx: 5,
        },
        {
            title: "Alrehaili",
            description: "Alrehaili is an Islamic website that provides blogs, articles, audios and videos about Islam. for sheikh Ibrahim Alrehaili.",
            client: "Sheikh Ibrahim Alrehaili",
            type: "Website",
            year: "2021",
            preview: "al-rehaili.net",
            href: "https://al-rehaili.net/",
            images: [alRehaili1, alRehaili2, alRehaili3, alRehaili4, alRehaili5],
            blockquote: "Full Solution for Islamic Content",
            span: "Shady Elsayed",
            lighbx: 6,
        },
        {
            title: "Veilya",
            description: "Veilya is an online store for hijabs and accessories.",
            client: "Veilya",
            type: "Website",
            year: "2021",
            preview: "veilya.com",
            href: "https://veilya.com/",
            images: [veilya1, veilya2, veilya3, veilya4, veilya5, veilya6, veilya7, veilya8],
            blockquote: "Full Solution for Online Store",
            span: "Shady Elsayed",
            lighbx: 7,
        }
        ];



    return(
            <div className="container">
            <GlobalStyles/>
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h2>Portfolio</h2>
                        <div className="space-border"></div>
                    </div>
                </div>
                {StackMasonry}

                {
                    lighbxList.map((val, i) => (
                        <div className="LightboxGal" key={i} style={{display: lighbx === val.lighbx ? 'block' : 'none'}}>
                            <div className="closeGal">
                                <button className="button-close" onClick={() => handleBtnClickclose(val.lighbx)}></button>
                            </div>
                            <div className="v-center w-100">
                                <div className="mainLightbox container">
                                    <div className="row g-5">
                                        <div className="col-lg-8">
                                            {val.lighbx !== 5 ?
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
                                                    <i className="fa fa-user-o"></i>Client: <span>{val.client}</span>
                                                </div>
                                                <div className="d-field">
                                                    <i className="fa fa-file-text-o"></i>Type: <span>{val.type}</span>
                                                </div>
                                                <div className="d-field">
                                                    <i className="fa fa-calendar-o"></i>Year: <span>{val.year}</span>
                                                </div>
                                                <div className="d-field">
                                                    <i className="fa fa-external-link"></i>Preview: <span><a href={val.href} target="_blank" rel="noreferrer">{val.preview}</a></span>
                                                </div>
                                            </div>
                                            <div className="spacer-30"></div>
                                            <blockquote>
                                                {val.blockquote}
                                                <span>{val.span}</span>
                                            </blockquote>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))

                }

      </div>
    );
}

export default Gallery;