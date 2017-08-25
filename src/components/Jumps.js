import React from 'react';
import { Route, NavLink, Redirect } from 'react-router-dom';

import hjump from './jumps/hjump';
import pvault from './jumps/pvault';

const Jumps = () => (
	<div className="container">
		<div className="jumbotron">
			<div className="row">
				<div className="col-lg-7 col-md-7 col-sm-7">
					<h2>Jumps</h2>
				</div>
				<ul className="nav nav-pills">
				<li>
					<NavLink 
						to='/jumps/hjump' 
						className="btn btn-default">
						High Jump
					</NavLink>
				</li>
				<li>
					<NavLink 
						to='/jumps/pvault' 
						className="btn btn-default">
						Pole Vault
					</NavLink>
				</li>
				<li>
					<NavLink 
						to='/jumps/ljump' 
						className="btn btn-default">
						Long Jump
					</NavLink>
				</li>
				<li>
					<NavLink 
						to='/jumps/tjump' 
						className="btn btn-default">
						Triple Jump
					</NavLink>
				</li>
		      	</ul>
	      	</div>

	      	<Route exact path="/jumps" 
	      		render={ () => <Redirect to="/jumps/hjump" /> } 
	      	/>
	      	<Route path="/jumps/hjump" component={hjump} />
	      	<Route path="/jumps/pvault" component={pvault} />
		</div>
	</div>
)

export default Jumps;