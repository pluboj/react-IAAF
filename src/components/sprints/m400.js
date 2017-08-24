import React from 'react';
import SprintE from './SprintE';
import { Sprint400m, Sprint400w } from '../../data/sprints-data';

const m100 = (props) => {
  let resultsM = Sprint400m.map((result) => {
    return <SprintE pos={result.pos}
                   name={result.name}
                   country={result.country}
                   mark={result.mark}
                   reaction_time={result.reaction_time}
                   key={"m400-"+ result.pos} />
  }); 

  let resultsW = Sprint400w.map((result) => {
    return <SprintE pos={result.pos}
                   name={result.name}
                   country={result.country}
                   mark={result.mark}
                   reaction_time={result.reaction_time}
                   key={"m400-"+ result.pos} />
  }); 
  return (
  	<div>
  		<h4>How it works</h4>
  		<small>Competitors run once around a 400m track. They start from blocks set in staggered positions and run in lanes.</small>
  		<br/><br/>
  		<small>A reaction time – measured by sensors in the starting pistol and on the blocks – of less than 0.1 is deemed a false start and runners will be recalled, and the responsible athlete disqualified.</small>
  		<br/><br/>
  		<p><strong>MEN</strong></p>
	    <table className="table table-bordered table-striped">
	    	<thead>
	    		<tr>
		    		<th>POS</th>
		    		<th>NAME</th>
		    		<th>COUNTRY</th>
		    		<th>MARK</th>
		    		<th>REACTION TIME</th>
	    		</tr>
	    	</thead>
	    	<tbody>
	    		{resultsM} 
	    	</tbody>
	    </table>

	    <p><strong>WOMEN</strong></p>
	    <table className="table table-bordered table-striped">
	    	<thead>
	    		<tr>
		    		<th>POS</th>
		    		<th>NAME</th>
		    		<th>COUNTRY</th>
		    		<th>MARK</th>
		    		<th>REACTION TIME</th>
	    		</tr>
	    	</thead>
	    	<tbody>
	    		{resultsW} 
	    	</tbody>
	    </table>
    </div>
  );
}

export default m100;