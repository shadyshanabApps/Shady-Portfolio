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

/*
In the vast digital landscape, user interfaces (UIs) are the gateways that bridge the gap between humans and technology. A well-designed UI isn’t just visually appealing; it’s intuitive, efficient, and empowers users to navigate seamlessly. Whether you're a seasoned designer or a budding enthusiast, here’s a comprehensive guide on how to craft better user interfaces that captivate and delight users.

Understanding User Needs
User-Centric Approach: Begin by empathizing with your users. Understand their goals, preferences, and pain points through user research, surveys, and feedback mechanisms.

Simplicity & Clarity: Simplicity isn’t just an aesthetic choice; it’s a guiding principle. Keep interfaces clean and clutter-free while conveying information succinctly.

Design Principles and Best Practices
Consistency: Establish consistent design elements such as colors, fonts, and layouts. Consistency fosters familiarity and enhances user comprehension.

Hierarchy & Visual Hierarchy: Create a visual hierarchy to prioritize content and guide users’ attention effectively. Employ techniques like size, color, and contrast to highlight essential elements.

Responsive Design: Ensure your UI adapts seamlessly to different devices and screen sizes. Responsive design is crucial for an optimal user experience across various platforms.

Enhancing Usability
Intuitive Navigation: Design navigation in a way that’s intuitive and straightforward. Users should effortlessly find what they’re looking for without getting lost in complex menus.

Accessibility: Make your UI inclusive by adhering to accessibility standards. Consider users with disabilities and ensure your interface is perceivable, operable, and understandable for everyone.

Iterative Improvement
User Testing: Regularly conduct usability tests with real users to gather insights and identify pain points. This iterative process helps refine your UI based on actual user experiences.

Analytics & Feedback: Leverage analytics tools to track user behavior and gather quantitative data. Additionally, actively seek and incorporate user feedback to continually enhance your UI.

Tools & Resources
Design Tools: Explore a plethora of design tools like Figma, Sketch, or Adobe XD for creating and prototyping UI designs.

UI Libraries & Frameworks: Utilize UI libraries and frameworks like Bootstrap or Material Design to expedite the design process without compromising quality.

Conclusion
Crafting a remarkable user interface is a blend of creativity, empathy, and technical prowess. It’s an ongoing journey where understanding user needs, following design principles, and iterative improvements play pivotal roles. Embrace the iterative nature of UI design, always seeking opportunities to refine and optimize to create interfaces that not only look stunning but also deliver an exceptional user experience. With these principles and practices in mind, step into the world of UI design and create interfaces that resonate with users on a profound level.
 */



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
            content: "In the vast digital landscape, user interfaces (UIs) are the gateways that bridge the gap between humans and technology. A well-designed UI isn’t just visually appealing; it’s intuitive, efficient, and empowers users to navigate seamlessly. Whether you're a seasoned designer or a budding enthusiast, here’s a comprehensive guide on how to craft better user interfaces that captivate and delight users.",
            lighbx : 2,
        },
        {
            title: 'The Importance of Web Design',
            img: './img/blog/3.jpg',
            content: "In the vast digital landscape, user interfaces (UIs) are the gateways that bridge the gap between humans and technology. A well-designed UI isn’t just visually appealing; it’s intuitive, efficient, and empowers users to navigate seamlessly. Whether you're a seasoned designer or a budding enthusiast, here’s a comprehensive guide on how to craft better user interfaces that captivate and delight users.",
            lighbx : 3,
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
                {/*<CustomSlide className='itm' index={1}>*/}
                {/*<div className="bloglist item">*/}
                {/*        <div className="post-content">*/}
                {/*            <div className="post-image">*/}
                {/*                <div className="de_modal" onClick={handleBtnClick}>*/}
                {/*                  <img alt="blogimg" src="./img/blog/1.jpg" className="grayscale"/>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*            <div className="post-text">*/}
                {/*                <h4 className="de_modal" onClick={handleBtnClick}>How to Make Better User Interface</h4>*/}
                {/*                <p>Dolore officia sint incididunt non excepteur ea mollit commodo ut enim reprehenderit cupidatat labore ad laborum consectetur consequat...</p>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</CustomSlide>*/}

                {/*<CustomSlide className='itm' index={2}>*/}
                {/*<div className="bloglist item">*/}
                {/*        <div className="post-content">*/}
                {/*            <div className="post-image">*/}
                {/*                <div className="de_modal" onClick={handleBtnClick}>*/}
                {/*                  <img alt="blogimg" src="./img/blog/2.jpg" className="grayscale"/>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*            <div className="post-text">*/}
                {/*                <h4 className="de_modal" onClick={handleBtnClick}>10 Web Design Tips From Experts</h4>*/}
                {/*                <p>Dolore officia sint incididunt non excepteur ea mollit commodo ut enim reprehenderit cupidatat labore ad laborum consectetur consequat...</p>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</CustomSlide>*/}

                {/*<CustomSlide className='itm' index={3}>*/}
                {/*<div className="bloglist item">*/}
                {/*        <div className="post-content">*/}
                {/*            <div className="post-image">*/}
                {/*                <div className="de_modal" onClick={handleBtnClick}>*/}
                {/*                  <img alt="blogimg" src="./img/blog/3.jpg" className="grayscale"/>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*            <div className="post-text">*/}
                {/*                <h4 className="de_modal" onClick={handleBtnClick}>The Importance of Web Design</h4>*/}
                {/*                <p>Dolore officia sint incididunt non excepteur ea mollit commodo ut enim reprehenderit cupidatat labore ad laborum consectetur consequat...</p>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</CustomSlide>*/}

                {/*<CustomSlide className='itm' index={4}>*/}
                {/*<div className="bloglist item">*/}
                {/*        <div className="post-content">*/}
                {/*            <div className="post-image">*/}
                {/*                <div className="de_modal" onClick={handleBtnClick}>*/}
                {/*                  <img alt="blogimg" src="./img/blog/4.jpg" className="grayscale"/>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*            <div className="post-text" onClick={handleBtnClick}>*/}
                {/*                <h4 className="de_modal">10 Web Design Tips From Experts</h4>*/}
                {/*                <p>Dolore officia sint incididunt non excepteur ea mollit commodo ut enim reprehenderit cupidatat labore ad laborum consectetur consequat...</p>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</CustomSlide>*/}
                    {
                        CustomSlideList.map((item, index) => (
                            <CustomSlide className='itm' index={index}>
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

			  {/* lightbox1 */}
	          {lighbx === 1 && (
	          <div className="LightboxGal">
	            <div className="closeGal">
	                <button className="button-close" onClick={handleBtnClickclose}></button>
	            </div>
	            <div className="v-center w-100">
	              <div className="mainLightbox container">
	                <div className="row">
	                    <div className="col-md-8 offset-md-2">
                            <div className="blog-read">

                                <img alt="blogimg" src="./img/blog/big.jpg" className="img-fullwidth rounded"/>

                                <div className="post-info">
                                    <span className="post-date">April 1, 2018</span>
                                    <span className="post-like">181</span>
                                    <span className="post-comment">5</span>
                                </div>

                                <h2>How to Make Better User Interface</h2>

                                <div className="post-text">
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
                                </div>

                            </div>

                            <div id="blog-comment">
                                {/*<h4>Comments</h4>*/}

                                {/*<div className="spacer-half"></div>*/}

                                {/*<ol>*/}
                                {/*    <li>*/}
                                {/*        <div className="avatar">*/}
                                {/*            <img src="./img/blog/avatar-1.jpg" alt="blogimg"/></div>*/}
                                {/*        <div className="comment-info">*/}
                                {/*            <span className="c_name">Jovan Eadie</span>*/}
                                {/*            <span className="c_date id-color">15 January 2020</span>*/}
                                {/*            <span className="c_reply"><span >Reply</span></span>*/}
                                {/*            <div className="clearfix"></div>*/}
                                {/*        </div>*/}

                                {/*        <div className="comment">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</div>*/}
                                {/*        */}
                                {/*    </li>*/}

                                {/*    <li>*/}
                                {/*        <div className="avatar">*/}
                                {/*            <img src="./img/blog/avatar-2.jpg" alt="blogimg"/></div>*/}
                                {/*        <div className="comment-info">*/}
                                {/*            <span className="c_name">Ariana Haylock</span>*/}
                                {/*            <span className="c_date id-color">15 January 2020</span>*/}
                                {/*            <span className="c_reply"><span >Reply</span></span>*/}
                                {/*            <div className="clearfix"></div>*/}
                                {/*        </div>*/}

                                {/*        <div className="comment">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</div>*/}
                                {/*        */}
                                {/*    </li>*/}

                                {/*    <li>*/}
                                {/*        <div className="avatar">*/}
                                {/*            <img src="./img/blog/avatar-3.jpg" alt="blogimg"/></div>*/}
                                {/*        <div className="comment-info">*/}
                                {/*            <span className="c_name">Reginald Safi</span>*/}
                                {/*            <span className="c_date id-color">15 January 2020</span>*/}
                                {/*            <span className="c_reply"><span >Reply</span></span>*/}
                                {/*            <div className="clearfix"></div>*/}
                                {/*        </div>*/}

                                {/*        <div className="comment">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</div>*/}
                                {/*        */}
                                {/*    </li>*/}
                                {/*</ol>*/}

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
	          )}

		</div>
	);
}

export default Blog;