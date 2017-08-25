import React from 'react';
import { Route, NavLink, Redirect } from 'react-router-dom';

import hjump from './jumps/hjump';
import pvault from './jumps/pvault';
import ljump from './jumps/ljump';
import tjump from './jumps/tjump';

const Jumps = ({match}) => (
	<div className="container">
		<div className="jumbotron">
			<div className="row">
				<div className="col-lg-7 col-md-7 col-sm-7">
					<h2>Jumps</h2>
				</div>
				<ul className="nav nav-pills">
				<li>
					<NavLink 
						to={`${match.url}/hjump`} 
						className="btn btn-default">
						High Jump
					</NavLink>
				</li>
				<li>
					<NavLink 
						to={`${match.url}/pvault`} 
						className="btn btn-default">
						Pole Vault
					</NavLink>
				</li>
				<li>
					<NavLink 
						to={`${match.url}/ljump`} 
						className="btn btn-default">
						Long Jump
					</NavLink>
				</li>
				<li>
					<NavLink 
						to={`${match.url}/tjump`} 
						className="btn btn-default">
						Triple Jump
					</NavLink>
				</li>
		      	</ul>
	      	</div>

	      	<Route exact path={match.path} 
	      		render={ () => <Redirect to={`${match.path}/hjump`} /> } 
	      	/>
	      	<Route path={`${match.path}/hjump`} component={hjump} />
	      	<Route path={`${match.path}/pvault`} component={pvault} />
	      	<Route path={`${match.path}/ljump`} component={ljump} />
	      	<Route path={`${match.path}/tjump`} component={tjump} />
		</div>
	</div>
)

export default Jumps;