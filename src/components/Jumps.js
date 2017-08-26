import React from 'react';
import { Route, NavLink, Redirect } from 'react-router-dom';

import JumpsContainer from './jumps/JumpsContainer';
import { HighJumpM, 
		HighJumpW,
		PoleVaultM, 
		PoleVaultW,
		TripleJumpM, 
		TripleJumpW,
		LongJumpM, 
		LongJumpW } from '../data/jumps-data';

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
	      	<Route path={`${match.path}/hjump`} 
	      		render={ () => <JumpsContainer data={{m:HighJumpM, w: HighJumpW}} />} />
	      	<Route path={`${match.path}/pvault`} 
	      		render={ () => <JumpsContainer data={{m:PoleVaultM, w: PoleVaultW}} />} />
	      	<Route path={`${match.path}/ljump`} 
	      		render={ () => <JumpsContainer data={{m:LongJumpM, w: LongJumpW}} />} />
	      	<Route path={`${match.path}/tjump`} 
	      		render={ () => <JumpsContainer data={{m:TripleJumpM, w: TripleJumpW}} />} />
		</div>
	</div>
)

export default Jumps;