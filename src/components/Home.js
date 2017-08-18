import React, { Component } from 'react';

class Home extends Component {
	render () {
		return (
			<div className="container">
				<div className="jumbotron">
					<h2><strong>IAAF World Championship London 2017</strong></h2>
					<h3><strong>August 4 - 13, 2017</strong></h3>
					<p>
						The London Championships was the 16th in the event’s 
						34-year history with the first IAAF World Championships 
						being hosted in Helsinki in 1983.
					</p>
					<h3>Previous editions</h3>
					<div className="row">
						<div className="col-lg-3 col-md-3 col-sm-4">
							1983 Helsinki<br />
							1987 Rome<br />
							1991 Tokyo<br />
							1993 Stuttgart<br />
							1995 Gothenburg<br />
							1997 Athens<br />
							1999 Seville<br />
							2001 Edmonton
						</div>
						<div className="col-lg-3 col-md-3 col-sm-4">
							2003 Paris<br />
							2005 Helsinki<br />
							2007 Osaka<br />
							2009 Berlin<br />
							2011 Daegu<br />
							2013 Moscow<br />
							2015 Beijing
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Home;