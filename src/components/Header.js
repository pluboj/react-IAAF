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
							<li><a href="#Home">Page 1</a></li>
							<li><a href="#Home">Page 2</a></li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	</div>
)

export default Header;