import React from 'react';
import HeptathlonE from './HeptathlonE';
import Intro from '../Intro';

const Heptathlon = (props) => {
  let results = props.data.map((result) => {
    return <HeptathlonE 
    			pos={result.pos}
               	name={result.name}
               	country={result.country}
               	H100={result.H100}
               	HJ={result.HJ}
               	SP={result.SP}
               	R200={result.R200}
				LJ={result.LJ}
				JT={result.JT}
				R800={result.R800}
               	key={"comb-"+ result.pos} />
  }); 

let intro = props.intro.map((result, i) => {
  	return <Intro key={"txt-"+i} text={result} />
  });

  return (
  	<div>
  		<h4>How it works</h4>
  		{intro}

	    <table className="table table-bordered table-striped">
	    	<thead>
	    		<tr>
	    			<th rowSpan="2">POS</th>
	    			<th rowSpan="2">NAME</th>
		    		<th rowSpan="2">COUNTRY</th>
	    			<th colSpan="7" style={{textAlign: "center"}}>MARK</th>
	    		</tr>
	    		<tr>
		    		<th>100 Metres Hurdles</th>
		    		<th>High Jump</th>
		    		<th>Shot Put</th>
		    		<th>200 Metres</th>
		    		<th>Long Jump</th>
		    		<th>Javelin Throw</th>
		    		<th>800 Metres</th>
	    		</tr>
	    	</thead>
	    	<tbody>
	    		{results} 
	    	</tbody>
	    </table>
    </div>
  );
}

export default Heptathlon;