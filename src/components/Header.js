import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
	<div className="navbar-wrapper">
		<div className="container">
			<nav className="navbar navbar-inverse navbar-static-top" >
				<div className="container">
					<div className="navbar-header">
						<div className="navbar-brand">
							IAAF World Championships London 2017
						</div>
					</div>
					<div id="navbar" className="navbar-collapse collapse">
						<ul className="nav navbar-nav">
							<li><Link to="/">Home</Link></li>
							<li><Link to="/sprints">SPRINTS</Link></li>
							<li><Link to="#Home">JUMPS</Link></li>
							<li><Link to="#Home">THROWS</Link></li>
							<li><Link to="#Home">COMBINED EVENTS</Link></li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	</div>
)

export default Header;