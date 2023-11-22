import React from 'react';
import Masonry from "react-masonry-component";
import { createGlobalStyle } from 'styled-components';
import AOS from 'aos';
import Capture from '../assets/projects/lyceebalzak/Capture.PNG';
import lyceeDashboard from '../assets/projects/lyceebalzak/lycee-dashboard.PNG';
import lyceeAccounts from '../assets/projects/lyceebalzak/lycee-accounts.PNG';
import lyceeJournals from '../assets/projects/lyceebalzak/lycee-journals.PNG';
import lyceeSettings from '../assets/projects/lyceebalzak/lycee-settings.PNG';
import lyceePermissions from '../assets/projects/lyceebalzak/lycee-permissions.PNG';
import lyceeMenu from '../assets/projects/lyceebalzak/lycee-menu.PNG';
import lyceeReports from '../assets/projects/lyceebalzak/lycee-reports.PNG';
import lyceePurchaseReport from '../assets/projects/lyceebalzak/lycee-purchase-report.PNG';
import standardAccounts from '../assets/projects/standard-erp/standard-accounts.PNG';
import standardAddAccounts from '../assets/projects/standard-erp/standard-add-accounts.PNG';
import standardAddItems from '../assets/projects/standard-erp/standard-add-item.PNG';
import standardAddPricelist from '../assets/projects/standard-erp/standard-add-pricelist.PNG';
import standardJournals from '../assets/projects/standard-erp/standard-journals.PNG';
import standardViewPricelist from '../assets/projects/standard-erp/standard-view-pricelist.PNG';
import hrAddbulkEmployees from '../assets/projects/hr/hr-addbulk-employees.PNG';
import hrAttendance from '../assets/projects/hr/hr-attendance.PNG';
import hrContracts from '../assets/projects/hr/hr-contracts.PNG';
import hrOffers from '../assets/projects/hr/hr-offers.PNG';
import hrDepartments from '../assets/projects/hr/hr-departments.PNG';
import hrEmployeesSalary from '../assets/projects/hr/hr-employees-salary.PNG';
import hrHome from '../assets/projects/hr/hr-home.PNG';
import hrPayrollDep from '../assets/projects/hr/hr-payroll-dep.PNG';
import hrPayrollReport from '../assets/projects/hr/hr-payroll-report.PNG';
import jewelryAddPurchase1 from '../assets/projects/jewelry/jewelry-add-purchase1.PNG';
import jewelryAddPurchase2 from '../assets/projects/jewelry/jewelry-add-purchase2.PNG';
import jewelryAddPurchase3 from '../assets/projects/jewelry/jewelry-add-purchase3.PNG';
import jewelryAddPurchase4 from '../assets/projects/jewelry/jewelry-add-purchase4.PNG';
import jewelryPurchase from '../assets/projects/jewelry/jewelry-purchase.PNG';
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
            img : Capture,
            title : "Lycee Balzak ERP",
            tag : "website",
            lighbx : 1,
        },
        {
            img : standardAccounts,
            title : "Standard ERP",
            tag : "website",
            lighbx : 2,
        },
        {
            img : hrHome,
            title : "HR",
            tag : "website",
            lighbx : 3,
        },
        {
            img : jewelryAddPurchase2,
            title : "Jewelry",
            tag : "website",
            lighbx : 4,
        },
    ];

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
            images : [Capture,lyceeDashboard,lyceeAccounts,lyceeJournals,lyceeSettings,lyceePermissions,lyceeMenu,lyceeReports,lyceePurchaseReport],
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
            images : [standardAccounts,standardAddAccounts,standardAddItems,standardAddPricelist,standardJournals,standardViewPricelist],
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
            images : [hrHome,hrAddbulkEmployees,hrAttendance,hrContracts,hrOffers,hrDepartments,hrEmployeesSalary,hrPayrollDep,hrPayrollReport],
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
                 <Masonry className={"row my-gallery-class"} elementType={"div"}>
                     {
                         MasonryList.map((val, i) => (
                                <div className="col-lg-6 image-element-class de_modal" onClick={() => handleBtnClick(val.lighbx)}
                                    data-aos="fade-up"
                                    data-aos-once="true"
                                    >
                                    <div className="card-image-1">
                                        <div className="d-text">
                                            <h3>{val.title}</h3>
                                            <h5 className="d-tag">{val.tag}</h5>
                                        </div>
                                        <img src={val.img} alt="gallery"/>
                                    </div>
                                </div>
                            ))
                     }
                  </Masonry>


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
                                            <div className="row g-4">
                                            {
                                                val.images.map((val, i) => (
                                                        <div className="col-lg-10 item">
                                                            <img src={val} alt="galleryimage" className="img-fluid"/>
                                                        </div>
                                                ))
                                            }
                                            </div>
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