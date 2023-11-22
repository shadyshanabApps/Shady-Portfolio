import React, {useEffect} from 'react';
import {
  CircularProgressbar,
  buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import AnimatedProgressProvider from "../layout/AnimatedProgressProvider";

import AOS from 'aos';
import Skillbar from "../layout/skillbar";
AOS.init();


const About = () => {
const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

useEffect(() => {
	console.log('window.innerWidth',window.innerWidth);
	  const handleWindowResize = () => {
	setWindowWidth(window.innerWidth);
  };

  window.addEventListener("resize", handleWindowResize);

  return () => window.removeEventListener("resize", handleWindowResize);
}, [window.innerWidth]);

	const AnimatedProgressList = [
		{
			text : "React",
			value : 80
		},
		{
			text : "Wordpress",
			value : 80
		},
		{
			text: "Git",
			value: 80
		},
		{
			text: "Ant Design",
			value: 80
		},
		{
			text: "Material Ui",
			value: 80
		},
		{
			text : "Javascript",
			value : 80
		},
		{
			text : "React Native",
			value : 70
		},
		{
			text : "Typescript",
			value : 70
		},
		{
			text: "Redux Toolkit",
			value: 70
		},
		{
			text: "React Query",
			value: 90
		},
		{
			text: "Css Tailwind",
			value: 70
		},
		{
			text: "Vite",
			value: 90
		},
		]

	const items = AnimatedProgressList; // Replace AnimatedProgressList with your list of items
	const columnsPerRow = 4;
	const rows = [];

	for (let i = 0; i < items.length; i += columnsPerRow) {
		const rowItems = items.slice(i, i + columnsPerRow);
		const row = (
			<div className="row" key={i / columnsPerRow}>
				{rowItems.map((item, index) => (
					<div
						className="col-lg-3 col-md-4 col-sm-6 p-5 text-center"
						key={index}
						data-aos="fade"
						data-aos-delay={500 + ((i + index) * 100)}
						data-aos-duration="1000"
						data-aos-easing="ease"
						data-aos-once="true"
					>
						{
							windowWidth < 768 ?
							<div className="d-skill">
								<div style={{display: 'flex', justifyContent: 'start'}}>
									<span>{item.text}</span>
								</div>
								<Skillbar bgColor={"#ad8e6d"} progress={item.value} />
							</div>:
								<>
						<AnimatedProgressProvider valueStart={0} valueEnd={item.value}
						>
							{(value) => {
								const roundedValue = Math.round(value);
								return (
									<CircularProgressbar
										value={value}
										strokeWidth={3}
										text={`${roundedValue}.0%`}
										styles={buildStyles({
											pathTransition: "none",
											textColor: "white",
											textSize: "8px",
											pathColor: "#cf1f1f",
											trailColor: "#2f3134",
										})}
									/>
								);
							}}
						</AnimatedProgressProvider>
						<h4 className="mt-2">{item.text}</h4>
					</>
					}
					</div>
				))}
			</div>
		);
		rows.push(row);
	}

	return(
		<div className="v-center">
		<div className="container">
			<div className="row">
				<div className="col-md-12 text-center">
	                <h2 data-aos="fade-up"
                        data-aos-delay="0"
                        data-aos-duration="1000"
                        data-aos-easing="ease"
                        data-aos-once="true">About Me</h2>
	                <div className="space-border"
	                	data-aos="fade-up"
                        data-aos-delay="20"
                        data-aos-duration="1000"
                        data-aos-easing="ease"
                        data-aos-once="true"
	                	></div>
	            </div>
	            <div className="col-md-8 text-center m-auto"
	            	data-aos="fade-up"
                    data-aos-delay="60"
                    data-aos-duration="1000"
                    data-aos-easing="ease"
                    data-aos-once="true"
	            	>
	            	<p>I'm a passionate and motivated frontend developer with experience in React, React Native, and WordPress. As the first of my batch, I've always been driven to excel and continuously learn and improve my skills. My expertise lies in building responsive, user-friendly web and mobile applications that deliver seamless user experiences.
                     </p>
	            </div>
			</div>
			{rows}
		</div>
		</div>
	);
}

export default About;