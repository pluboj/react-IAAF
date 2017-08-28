import React from 'react';
import { Route, NavLink, Redirect } from 'react-router-dom';

import CombinedContainer from './combined/CombinedContainer';
import { Heptathlon, 
		 HeptathlonW 
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
	      		render={ () => <CombinedContainer data={HeptathlonW} 
	      		intro={Heptathlon}
	      		/>} />
		</div>
	</div>
)

export default Combined;