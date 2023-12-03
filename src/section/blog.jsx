import React, { Component } from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { settings } from './settingsnew';
import { createGlobalStyle } from 'styled-components';
import AOS from 'aos';
AOS.init();


const GlobalStyles = createGlobalStyle`
    body.hide{
          overflow-y: hidden; /* Hide vertical scrollbar */
          overflow-x: hidden; /* Hide horizontal scrollbar */
        }
`;

class CustomSlide extends Component {
  render() {
    const { index, ...props } = this.props;
    return (
      <div {...props}></div>
    );
  }
}

const Blog= function() {
    /* lightbox1 */
    const [lighbx, setlighbx] = React.useState(0);
    const handleBtnClick = (index)=> {
      setlighbx(index);
      var x = document.getElementsByTagName("BODY")[0];
      x.style.overflow = "hidden";
    };
    const handleBtnClickclose = () => {
      setlighbx(0);
      var x = document.getElementsByTagName("BODY")[0];
      x.style.overflow = "auto";
    };

    const CustomSlideList = [
        {
          title: 'How to Make Better User Interface',
            img: './img/blog/1.jpg',
            content: "In the vast digital landscape, user interfaces (UIs) are the gateways that bridge the gap between humans and technology. A well-designed UI isn’t just visually appealing; it’s intuitive, efficient, and empowers users to navigate seamlessly. Whether you're a seasoned designer or a budding enthusiast, here’s a comprehensive guide on how to craft better user interfaces that captivate and delight users.",
            lighbx : 1,
        },
        {
            title: '10 Web Design Tips From Experts',
            img: './img/blog/2.jpg',
            content: "Creating a stunning and functional website involves a fusion of creativity, strategy, and technical expertise. Drawing from the wisdom of industry experts, here are 10 invaluable web design tips that can transform your digital presence:",
            lighbx : 2,
        },
        {
            title: 'The Importance of Web Design',
            img: './img/blog/3.jpg',
            content: "In the digital age, your website is often the initial point of contact between your brand and potential customers. Beyond merely looking good, web design plays a pivotal role in shaping perceptions, driving engagement, and influencing business success. Let's delve into the multifaceted importance of web design:",
            lighbx : 3,
        }
    ]

    const lighbxList = [
        {
            title: 'How to Make Better User Interface',
                img: './img/blog/1.jpg',
                content: <div className="post-text">
                    <p>In the vast digital landscape, user interfaces (UIs) are the gateways that bridge the gap between humans and technology. A well-designed UI isn’t just visually appealing; it’s intuitive, efficient, and empowers users to navigate seamlessly. Whether you're a seasoned designer or a budding enthusiast, here’s a comprehensive guide on how to craft better user interfaces that captivate and delight users.</p>
                    <h4><strong>Understanding User Needs</strong></h4>
                    <p><strong>User-Centric Approach:</strong> Begin by empathizing with your users. Understand their goals, preferences, and pain points through user research, surveys, and feedback mechanisms.</p>
                    <p><strong>Simplicity &amp; Clarity:</strong> Simplicity isn’t just an aesthetic choice; it’s a guiding principle. Keep interfaces clean and clutter-free while conveying information succinctly.</p>
                    <h4><strong>Design Principles and Best Practices</strong></h4>
                    <p><strong>Consistency:</strong> Establish consistent design elements such as colors, fonts, and layouts. Consistency fosters familiarity and enhances user comprehension.</p>
                    <p><strong>Hierarchy &amp; Visual Hierarchy:</strong> Create a visual hierarchy to prioritize content and guide users’ attention effectively. Employ techniques like size, color, and contrast to highlight essential elements.</p>
                    <p><strong>Responsive Design:</strong> Ensure your UI adapts seamlessly to different devices and screen sizes. Responsive design is crucial for an optimal user experience across various platforms.</p>
                    <h4><strong>Enhancing Usability</strong></h4>
                    <p><strong>Intuitive Navigation:</strong> Design navigation in a way that’s intuitive and straightforward. Users should effortlessly find what they’re looking for without getting lost in complex menus.</p>
                    <p><strong>Accessibility:</strong> Make your UI inclusive by adhering to accessibility standards. Consider users with disabilities and ensure your interface is perceivable, operable, and understandable for everyone.</p>
                    <h4><strong>Iterative Improvement</strong></h4>
                    <p><strong>User Testing:</strong> Regularly conduct usability tests with real users to gather insights and identify pain points. This iterative process helps refine your UI based on actual user experiences.</p>
                    <p><strong>Analytics &amp; Feedback:</strong> Leverage analytics tools to track user behavior and gather quantitative data. Additionally, actively seek and incorporate user feedback to continually enhance your UI.</p>
                    <h4><strong>Tools &amp; Resources</strong></h4>
                    <p><strong>Design Tools:</strong> Explore a plethora of design tools like Figma, Sketch, or Adobe XD for creating and prototyping UI designs.</p>
                    <p><strong>UI Libraries &amp; Frameworks:</strong> Utilize UI libraries and frameworks like Bootstrap or Material Design to expedite the design process without compromising quality.</p>
                    <h4><strong>Conclusion</strong></h4>
                    <p>Crafting a remarkable user interface is a blend of creativity, empathy, and technical prowess. It’s an ongoing journey where understanding user needs, following design principles, and iterative improvements play pivotal roles. Embrace the iterative nature of UI design, always seeking opportunities to refine and optimize to create interfaces that not only look stunning but also deliver an exceptional user experience. With these principles and practices in mind, step into the world of UI design and create interfaces that resonate with users on a profound level.</p>
                </div>,
                lighbx : 1,
                date: 'April 1, 2018',
        },
        {
                title: '10 Web Design Tips From Experts',
                img: './img/blog/2.jpg',
                content: <div className="post-text">
                            <p> Creating a stunning and functional website involves a fusion of creativity, strategy, and technical expertise. Drawing from the wisdom of industry experts, here are 10 invaluable web design tips that can transform your digital presence:</p>
                            <h4><strong>1. Prioritize User Experience (UX)</strong></h4>
                            <p>Experts unanimously agree: prioritize user experience above all else. Craft intuitive navigation, streamlined interfaces, and clear calls-to-action to guide visitors seamlessly through your site.</p>
                            <h4><strong>2. Embrace Minimalism</strong></h4>
                             <p>Simplicity is key. Embrace minimalist design principles to declutter your website. Remove unnecessary elements, focusing on essential content that enhances user engagement and comprehension.</p>
                            <h4><strong>3. Mobile-First Approach</strong></h4>
                            <p>With mobile usage skyrocketing, design with mobile users in mind. Adopt a mobile-first approach to ensure your site looks and functions flawlessly on smaller screens, prioritizing responsive design.</p>
                            <h4><strong>4. Visual Hierarchy Matters</strong></h4>
                            <p>Establish a clear visual hierarchy. Guide users' attention through strategic use of colors, typography, and visual elements. Lead them intuitively from the most important information to supplementary details.</p>
                            <h4><strong>5. Content is King</strong></h4>
                            <p>Content quality matters more than ever. Collaborate with content creators to develop compelling, relevant, and concise content that resonates with your audience while complementing your design.</p>
                            <h4><strong>6. Speed Optimization</strong></h4>
                            <p>Load times profoundly impact user experience. Implement optimization techniques—minimize file sizes, optimize images, and leverage caching—to ensure swift page loading.</p>
                            <h4><strong>7. Accessibility is Essential</strong></h4>
                            <p>Design with accessibility in mind. Follow WCAG guidelines to make your website accessible to users with disabilities, enhancing inclusivity and reaching a broader audience.</p>
                            <h4><strong>8. Consistency in Design</strong></h4>
                            <p>Maintain consistency across your website. Use consistent branding, design elements, and navigation patterns to create a cohesive and memorable user experience.</p>
                            <h4><strong>9. Test, Iterate, Improve</strong></h4>
                            <p>Utilize A/B testing, user feedback, and analytics tools to continuously improve your design. Embrace an iterative process, tweaking elements based on real user insights.</p>
                            <h4><strong>10. Stay Updated & Innovate</strong></h4>
                            <p>The digital landscape evolves rapidly. Stay updated with design trends, emerging technologies, and best practices. Innovate while staying true to your brand's identity and user preferences.</p>
                            <h4><strong>Conclusion</strong></h4>
                            <p>Expert advice in web design echoes the importance of user-centricity, simplicity, and adaptability. By blending these expert tips into your design strategy, you're not just creating a website; you're crafting an immersive digital experience that resonates with your audience. Prioritize user needs, embrace evolving trends, and continuously refine your design to stay ahead in the dynamic world of web design. With these insights from industry experts, embark on your design journey and create websites that captivate, engage, and leave a lasting impression.</p>
                        </div>,
                lighbx : 2,
                date: 'April 1, 2018',
        },
        {
                title: 'The Importance of Web Design',
                img: './img/blog/3.jpg',
                content: <div className="post-text">
                        <p>In the digital age, your website is often the initial point of contact between your brand and potential customers. Beyond merely looking good, web design plays a pivotal role in shaping perceptions, driving engagement, and influencing business success. Let's delve into the multifaceted importance of web design:</p>
                        <h4><strong>First Impressions & Brand Perception</strong></h4>
                        <p><strong>Credibility &amp; Trust:</strong> A well-designed website instills trust. Users tend to associate a professional, visually appealing site with a credible brand, positively impacting their perception and likelihood of engagement.</p>
                        <p><strong>First Impressions Count:</strong> Your website is your digital storefront. An aesthetically pleasing and intuitive design captures visitors' attention, inviting them to explore further.</p>
                        <h4><strong>User Experience &amp; Engagement</strong></h4>
                        <p><strong>Enhanced User Experience:</strong> Intuitive navigation, responsive design, and optimized usability contribute to a seamless user experience. Users are more likely to stay and explore when they can easily find what they need.</p>
                        <p><strong>Increased Engagement:</strong> Engaging visuals, interactive elements, and compelling content keep visitors on your site longer, encouraging them to interact, explore, and potentially convert.</p>
                        <h4><strong>SEO &amp; Visibility</strong></h4>
                        <p><strong>Search Engine Optimization (SEO):</strong> Design impacts SEO. Search engines favor mobile-friendly, fast-loading sites with clean code and good user experience, contributing to higher rankings.</p>
                        <p><strong>Improved Visibility &amp; Traffic:</strong> A well-designed website attracts more traffic. When users find your site visually appealing and user-friendly, they are more likely to stay, reducing bounce rates and increasing visibility.</p>
                        <h4><strong>Conversion &amp; Business Growth</strong></h4>
                        <p><strong>Conversion Optimization:</strong> A strategic design influences conversion rates. Clear calls-to-action, optimized forms, and an intuitive flow guide users towards desired actions—be it a purchase, sign-up, or inquiry.</p>
                        <p><strong>Business Growth &amp; Competitive Edge:</strong> An exceptional website design sets you apart. It showcases your uniqueness, communicates your brand values effectively, and gives you an edge in a competitive market.</p>
                        <h4><strong>Adaptability &amp; Innovation</strong></h4>
                        <p><strong>Adaptability Across Devices:</strong> With the proliferation of mobile devices, responsive design is crucial. Ensuring your site is accessible and functional across various screen sizes enhances your reach.</p>
                        <p><strong>Innovation &amp; Future-Proofing:</strong> Evolving design trends and technologies continually reshape user expectations. Staying innovative ensures your website remains relevant and appealing.</p>
                        <h4><strong>Conclusion</strong></h4>
                        <p>The significance of web design extends far beyond aesthetics—it’s a strategic asset driving brand perception, user engagement, and business growth. A meticulously crafted design isn’t just about visual appeal; it’s about orchestrating an immersive digital experience that resonates with your audience. By prioritizing user-centricity, embracing innovation, and continually refining your design based on insights, your website becomes a powerful tool that captivates, converts, and propels your brand towards success in the digital realm.</p>
                    </div>,
                lighbx : 3,
                date: 'April 1, 2018',
        }
        ]


	return(
		<div className="container">
            <GlobalStyles/>
            <div className="spacer-single"></div>
			<div className="row">
				<div className="col-md-12 text-center">
	                <h2>Recent Blog</h2>
	                <div className="space-border"></div>
	            </div>
			</div>
			<div className="row"
                data-aos="fade-up"
                data-aos-once="true"
                >
				<Slider {...settings}>
                    {
                        CustomSlideList.map((item, index) => (
                            <CustomSlide className='itm' index={index} key={index}>
                                <div className="bloglist item">
                                        <div className="post-content">
                                            <div className="post-image">
                                                <div className="de_modal" onClick={()=>handleBtnClick(item.lighbx)}>
                                                  <img alt="blogimg" src={item.img} className="grayscale"/>
                                                </div>
                                            </div>
                                            <div className="post-text">
                                                <h4 className="de_modal" onClick={ ()=>handleBtnClick(item.lighbx)}>{item.title}</h4>
                                                <p>{item.content}</p>
                                            </div>
                                        </div>
                                    </div>
                            </CustomSlide>
                        ))
                    }

              </Slider>
			</div>


            {
                lighbxList.map((item, index) => (
                    <div className="LightboxGal" key={index} style={{display: lighbx === item.lighbx ? 'block' : 'none'}}>
                        <div className="closeGal">
                            <button className="button-close" onClick={handleBtnClickclose}></button>
                        </div>
                        <div className="v-center w-100">
                            <div className="mainLightbox container">
                                <div className="row">
                                    <div className="col-md-8 offset-md-2">
                                        <div className="blog-read">

                                            <img alt="blogimg" src={item.img} className="img-fullwidth rounded"/>

                                            <div className="post-info">
                                                <span className="post-date">{item.date}</span>
                                                <span className="post-like">181</span>
                                                <span className="post-comment">5</span>
                                            </div>

                                            <h2>{item.title}</h2>

                                            <div className="post-text">
                                                {item.content}
                                            </div>

                                        </div>

                                        <div id="blog-comment">
                                            <div className="spacer-single"></div>

                                            <div id="comment-form-wrapper">
                                                <h4>Leave a Comment</h4>
                                                <div className="comment_form_holder">
                                                    <form id="contact_form" name="form1" className="form-border" method="post" action="#">
                                                        <label>Name</label>
                                                        <input type="text" name="name" id="name" className="form-control"/>
                                                        <label>Email <span className="req">*</span></label>
                                                        <input type="text" name="email" id="email" className="form-control"/>
                                                        <label>Message <span className="req">*</span></label>
                                                        <textarea cols="10" rows="10" name="message" id="message" className="form-control">
                                            </textarea>
                                                        <p id="btnsubmit">
                                                            <input type="submit" id="send" value="Send" className="btn btn-main"/>
                                                        </p>
                                                    </form>
                                                </div>
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
	);
}

export default Blog;