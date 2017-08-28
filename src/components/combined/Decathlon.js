import React from 'react';
import DecathlonE from './DecathlonE';
import Intro from '../Intro';

const Decathlon = (props) => {
  let results = props.data.map((result) => {
    return <DecathlonE 
    			pos={result.pos}
               	name={result.name}
               	country={result.country}
               	R100={result.R100}
               	LJ={result.LJ}
               	SP={result.SP}
               	HJ={result.HJ}
				R400={result.R400}
				H110={result.H110}
				DT={result.DT}
				PV={result.PV}
				JT={result.JT}
				R1500={result.R1500}
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
	    			<th colSpan="10" style={{textAlign: "center"}}>MARK</th>
	    		</tr>
	    		<tr>
		    		<th>100 Metres</th>
		    		<th>Long Jump</th>
		    		<th>Shot Put</th>
		    		<th>High Jump</th>
		    		<th>400 Metres</th>
		    		<th>110 Metres Hurdles</th>
		    		<th>Discus Throw</th>
		    		<th>Pole Vault</th>
		    		<th>Javelin Throw</th>
		    		<th>1500 Metres</th>
	    		</tr>
	    	</thead>
	    	<tbody>
	    		{results} 
	    	</tbody>
	    </table>
    </div>
  );
}

export default Decathlon;