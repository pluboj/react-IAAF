import React from 'react';

const Throws = () => (
	<div className="container">
		<div className="jumbotron">
			<div className="row">
				<div className="col-lg-6 col-md-6 col-sm-6">
					<h2>Throws</h2>
				</div>
				<ul className="nav nav-pills">
		        <li role="presentation" className="active">
		        	<a href='/throws/sput'>Shot Put</a>
		        </li>
		        <li role="presentation">
		        	<a href='/throws/dthrow'>Discus Throw</a>
		        </li>
		        <li role="presentation">
		        	<a href='/throws/hthrow'>Hammer Throw</a>
		        </li>
		        <li role="presentation">
		        	<a href='/throws/jthrow'>Javelin Throw</a>
		        </li>
		      	</ul>
	      	</div>
		</div>
	</div>
)

export default Throws;