import React from 'react';
import './about.css';
import { Link } from 'react-scroll';

function About() {
	return (
		<div id="about" className="second">
			<div className="container">
				<div className="row about-main">
					<div className="col-lg-6 col-md-6">
						<div className="bio">
							<p>About</p>
							<p2>
								My name is Jordan Albers, and I recently graduated the University of Arizona's Full
								Stack Web Development Coding bootcamp. I have a passion for problem solving, and
								building aesthetically pleasing, clear, and human-friendly designs.
							</p2>
							<div className="row">
								<div className="col-lg-12 col-md-12">
									<div className="skills">
										<p>Skills</p>
										<p2>
											HTML5, CSS, Bootstrap, JavaScript, React.js, Node.js, Express.js, MySQL,
											MongoDB, Responsive Design and Git
										</p2>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col'lg-1 col-md-1" />

					<div class="col-md-5 col-lg-5">
						<img
							src="https://jorxan.github.io/portfolio/images/IMG_1184_Original.JPG"
							class="img-fluid photo"
							alt="Responsive image"
						/>
					</div>
				</div>
			</div>
			<div>
				<Link data-scroll to="projects" smooth={true} duration={1500}>
					<div className="arrowtwo" />
				</Link>
			</div>
		</div>
	);
}

export default About;
