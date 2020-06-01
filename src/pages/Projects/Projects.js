import React from 'react';
import './Projects.css';
import { Link } from 'react-scroll';
import Project from '../../components/Project';

function Projects() {
	return (
		<div id="projects" className="third">
			<Project />
			<div>
				<Link data-scroll to="projects" smooth={true} duration={1500}>
					<div className="arrowthree" />
				</Link>
			</div>
		</div>
	);
}

export default Projects;
