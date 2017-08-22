import React from 'react';
import { NavLink } from 'react-router-dom';

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
							<li><NavLink exact to="/">Home</NavLink></li>
							<li><NavLink to="/sprints">SPRINTS</NavLink></li>
							<li><NavLink to="/jumps">JUMPS</NavLink></li>
							<li><NavLink to="/throws">THROWS</NavLink></li>
							<li><NavLink to="/combined">COMBINED EVENTS</NavLink></li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	</div>
)

export default Header;