import React from 'react';
import { Route, NavLink } from 'react-router-dom';

import m100 from './sprints/m100';

const Sprints = () => (
	<div className="container">
		<div className="jumbotron">
			<div className="row">
				<div className="col-lg-8 col-md-8 col-sm-8">
					<h2>Sprints</h2>
				</div>
				<ul className="nav nav-pills">
					<li><NavLink to='/sprints/m100'>100 Metres</NavLink></li>
					<li><NavLink to='/sprints/m200'>200 Metres</NavLink></li>
					<li><NavLink to='/sprints/m400'>400 Metres</NavLink></li>
		      	</ul>
	      	</div>

	      	<Route path="/sprints/m100" component={m100} />
		</div>
	</div>
)

export default Sprints;