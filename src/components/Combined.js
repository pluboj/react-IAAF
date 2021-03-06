import React from 'react';
import { Route, NavLink, Redirect } from 'react-router-dom';

import Heptathlon from './combined/Heptathlon';
import Decathlon from './combined/Decathlon';
import { HeptathlonI, 
		 HeptathlonW,
		 DecathlonI, 
		 DecathlonM 
		} from '../data/combined-data';

const Combined = ({match}) => (
	<div className="container">
		<div className="jumbotron">
			<div className="row">
				<div className="col-lg-9 col-md-9 col-sm-9">
					<h2>Combined Events</h2>
				</div>
				<ul className="nav nav-pills">
					<li>
						<NavLink 
							to={`${match.url}/heptathlon`} 
							className="btn btn-default">
							Heptathlon
						</NavLink>
					</li>
					<li>
						<NavLink 
							to={`${match.url}/decathlon`} 
							className="btn btn-default">
							Decathlon
						</NavLink>
					</li>
		      	</ul>
	      	</div>

	      	<Route exact path={match.path} 
	      		render={ () => <Redirect to={`${match.path}/heptathlon`} /> } 
	      	/>
	      	<Route path={`${match.path}/heptathlon`} 
	      		render={ () => <Heptathlon data={HeptathlonW} 
	      		intro={HeptathlonI}
	      		/>} />
	      	<Route path={`${match.path}/decathlon`} 
	      		render={ () => <Decathlon data={DecathlonM} 
	      		intro={DecathlonI}
	      		/>} />
		</div>
	</div>
)

export default Combined;