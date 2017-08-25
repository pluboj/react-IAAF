import React from 'react';
import JumpsE from './JumpsE';
import { TripleJumpM, TripleJumpW } from '../../data/jumps-data';

const tjump = (props) => {
  let resultsM = TripleJumpM.map((result) => {
    return <JumpsE pos={result.pos}
                   name={result.name}
                   country={result.country}
                   mark={result.mark}
                   wind={result.wind}
                   key={"tjumpm-"+ result.pos} />
  }); 

  let resultsW = TripleJumpW.map((result) => {
    return <JumpsE pos={result.pos}
                   name={result.name}
                   country={result.country}
                   mark={result.mark}
                   wind={result.wind}
                   key={"tjumpw-"+ result.pos} />
  }); 
  return (
  	<div>
  		<h4>How it works</h4>
  		<small>Competitors sprint along a runway before taking off from 
  		a wooden board. The take-off foot absorbs the first landing, 
  		the hop. The next phase, the step, is finished on the opposite 
  		foot and then followed by a jump into a sandpit. The distance 
  		travelled, from the edge of the board to the closest indentation 
  		in the sand to it, is then measured.</small>
  		<br/><br/>
  		<small>A foul is committed – and the jump is not measured – 
  		if an athlete steps beyond the board.</small>
  		<br/><br/>
  		<small>Most championship competitions involve six jumps per 
  		competitor, although usually a number of them, those 
  		with the shorter marks, are often eliminated after three 
  		jumps.  If competitors are tied, the athlete with the next 
  		best distance is declared the winner.</small>
  		<br/><br/>
  		<p><strong>MEN</strong></p>
	    <table className="table table-bordered table-striped">
	    	<thead>
	    		<tr>
		    		<th>POS</th>
		    		<th>NAME</th>
		    		<th>COUNTRY</th>
		    		<th>MARK</th>
		    		<th>WIND</th>
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
		    		<th>WIND</th>
	    		</tr>
	    	</thead>
	    	<tbody>
	    		{resultsW} 
	    	</tbody>
	    </table>
    </div>
  );
}

export default tjump;