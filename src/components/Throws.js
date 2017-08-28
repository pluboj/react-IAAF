import React from 'react';
import { Route, NavLink, Redirect } from 'react-router-dom';

import ThrowsContainer from './throws/ThrowsContainer';
import { 
	ShotPut,
	ShotPutM,
	ShotPutW,
	DiscusThrow,
	DiscusThrowM,
	DiscusThrowW,
	HammerThrow,
	HammerThrowM,
	HammerThrowW,
	JavelinThrow,
	JavelinThrowM,
	JavelinThrowW
} from '../data/throws-data';

const Throws = ({match}) => (
	<div className="container">
		<div className="jumbotron">
			<div className="row">
				<div className="col-lg-6 col-md-6 col-sm-6">
					<h2>Throws</h2>
				</div>
				<ul className="nav nav-pills">
				<li><NavLink to={`${match.url}/sput`} 
						className="btn btn-default">Shot Put</NavLink></li>
				<li><NavLink to={`${match.url}/dthrow`} 
						className="btn btn-default">Discus Throw</NavLink></li>
				<li><NavLink to={`${match.url}/hthrow`} 
						className="btn btn-default">Hammer Throw</NavLink></li>
				<li><NavLink to={`${match.url}/jthrow`} 
						className="btn btn-default">Javelin Throw</NavLink></li>
		      	</ul>
	      	</div>

	      	<Route exact path={match.path} 
	      		render={ () => <Redirect to={`${match.url}/sput`} /> } 
	      	/>
	      	<Route path={`${match.path}/sput`} 
	      		render={ () => <ThrowsContainer 
	      			data={{m:ShotPutM, w: ShotPutW}} 
	      			intro={ShotPut}
	      			/>} />
	      	<Route path={`${match.path}/dthrow`} 
	      		render={ () => <ThrowsContainer 
	      			data={{m:DiscusThrowM, w: DiscusThrowW}} 
	      			intro={DiscusThrow}
	      			/>} />
	      	<Route path={`${match.path}/hthrow`} 
	      		render={ () => <ThrowsContainer 
	      			data={{m:HammerThrowM, w: HammerThrowW}} 
	      			intro={HammerThrow}
	      			/>} />
	      	<Route path={`${match.path}/jthrow`} 
	      		render={ () => <ThrowsContainer 
	      			data={{m:JavelinThrowM, w: JavelinThrowW}} 
	      			intro={JavelinThrow}
	      			/>} />
		</div>
	</div>
)

export default Throws;