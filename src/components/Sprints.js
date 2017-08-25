import React from 'react';
import { Route, NavLink, Redirect } from 'react-router-dom';

import SprintsContainer from './sprints/SprintsContainer';
import { 
	Sprint100m, 
	Sprint100w, 
	Sprint200m, 
	Sprint200w, 
	Sprint400m, 
	Sprint400w 
} from '../data/sprints-data';

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
	      	<Route path={`${match.path}/m100`} 
	      		render={ () => <SprintsContainer data={{m:Sprint100m, w: Sprint100w}} />} />
	      	<Route path={`${match.path}/m200`} 
	      		render={ () => <SprintsContainer data={{m:Sprint200m, w: Sprint200w}} />} />
	      	<Route path={`${match.path}/m400`} 
	      		render={ () => <SprintsContainer data={{m:Sprint400m, w: Sprint400w}} />} />
		</div>
	</div>
)

export default Sprints;