import React from 'react';

const Sprints = () => (
	<div className="container">
		<div className="jumbotron">
			<div className="row">
				<div className="col-lg-8 col-md-8 col-sm-8">
					<h2>Sprints</h2>
				</div>
				<ul className="nav nav-pills">
		        <li role="presentation" className="active">
		        	<a href='/sprints/m100'>100 Metres</a>
		        </li>
		        <li role="presentation">
		        	<a href='/sprints/m200'>200 Metres</a>
		        </li>
		        <li role="presentation">
		        	<a href='/sprints/m400'>400 Metres</a>
		        </li>
		      	</ul>
	      	</div>
		</div>
	</div>
)

export default Sprints;