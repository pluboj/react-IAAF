import React from 'react';

const Jumps = () => (
	<div className="container">
		<div className="jumbotron">
			<div className="row">
				<div className="col-lg-7 col-md-7 col-sm-7">
					<h2>Jumps</h2>
				</div>
				<ul className="nav nav-pills">
		        <li role="presentation" className="active">
		        	<a href='/jumps/hjump'>High Jump</a>
		        </li>
		        <li role="presentation">
		        	<a href='/jumps/pvault'>Pole Vault</a>
		        </li>
		        <li role="presentation">
		        	<a href='/jumps/ljump'>Long Jump</a>
		        </li>
		        <li role="presentation">
		        	<a href='/jumps/tjump'>Triple Jump</a>
		        </li>
		      	</ul>
	      	</div>
		</div>
	</div>
)

export default Jumps;