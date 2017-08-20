import React from 'react';

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
							<li className="active"><a href="#Home">Home</a></li>
							<li><a href="#Home">SPRINTS</a></li>
							<li><a href="#Home">JUMPS</a></li>
							<li><a href="#Home">THROWS</a></li>
							<li><a href="#Home">COMBINED EVENTS</a></li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	</div>
)

export default Header;