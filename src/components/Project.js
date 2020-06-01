import React from 'react';
import Projects from '../pages/Projects/Projects';
import Street from '../images/redstreet.PNG';
import Moodia from '../images/moodia.PNG';
import Critical from '../images/critical.PNG';
import './style.css';
import Weather from '../images/weather.PNG';

function Project() {
	return (
		<div>
			<div className="row project">
				<div className="col-lg-8 col-md-8 col-sm-12">
					<div className="row">
						<div className="col-lg-12 col-md-12 col-sm-12">
							<img src={Street} className="contain street" />
						</div>
					</div>
					<div className="row">
						<div className="col-lg-6 col-md-6 col-sm-12">
							<img className="contain smol" src={Critical} />
						</div>
						<div className="col-lg-6 col-md-6 col-sm-12">
							<img className="contain  smol2" src={Weather} />
						</div>
					</div>
				</div>
				<div className="col-lg-4 col-md-4 col-sm-12">
					<img className="contain long" src={Moodia} />
				</div>
			</div>
		</div>
	);
}

export default Project;
