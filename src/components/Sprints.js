import React from 'react';
import { Route, NavLink, Redirect } from 'react-router-dom';

import m100 from './sprints/m100';
import m200 from './sprints/m200';
import m400 from './sprints/m400';

const Sprints = ({match}) => (
	<div className="container">
		<div className="jumbotron">
			<div className="row">
				<div className="col-lg-8 col-md-8 col-sm-8">
					<h2>Sprints</h2>
				</div>
				<ul className="nav nav-pills">
					<li><NavLink to={`${match.url}/m100`} 
						className="btn btn-default">100 Metres</NavLink></li>
					<li><NavLink to={`${match.url}/m200`} 
						className="btn btn-default">200 Metres</NavLink></li>
					<li><NavLink to={`${match.url}/m400`} 
						className="btn btn-default">400 Metres</NavLink></li>
		      	</ul>
	      	</div>

	      	<Route exact path={match.path} 
	      		render={ () => <Redirect to={`${match.url}/m100`} /> } 
	      	/>
	      	<Route path={`${match.path}/m100`} component={m100} />
	      	<Route path={`${match.path}/m200`} component={m200} />
	      	<Route path={`${match.path}/m400`} component={m400} />
		</div>
	</div>
)

export default Sprints;