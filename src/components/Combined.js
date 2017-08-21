import React from 'react';

const Combined = () => (
	<div className="container">
		<div className="jumbotron">
			<div className="row">
				<div className="col-lg-9 col-md-9 col-sm-9">
					<h2>Combined Events</h2>
				</div>
				<ul className="nav nav-pills">
		        <li role="presentation" className="active">
		        	<a href='/combined/heptathlon'>Heptathlon</a>
		        </li>
		        <li role="presentation">
		        	<a href='/combined/decathlon'>Decathlon</a>
		        </li>
		      	</ul>
	      	</div>
		</div>
	</div>
)

export default Combined;