import React from 'react';
import JumpsE from './JumpsE';
import { LongJumpM, LongJumpW } from '../../data/jumps-data';

const ljump = (props) => {
  let resultsM = LongJumpM.map((result) => {
    return <JumpsE pos={result.pos}
                   name={result.name}
                   country={result.country}
                   mark={result.mark}
                   wind={result.wind}
                   key={"ljumpm-"+ result.pos} />
  }); 

  let resultsW = LongJumpW.map((result) => {
    return <JumpsE pos={result.pos}
                   name={result.name}
                   country={result.country}
                   mark={result.mark}
                   wind={result.wind}
                   key={"ljumpw-"+ result.pos} />
  }); 
  return (
  	<div>
  		<h4>How it works</h4>
  		<small>Competitors sprint along a runway and jump as far as possible 
  		into a sandpit from a wooden take-off board. The distance travelled, 
  		from the edge of the board to the closest indentation in the sand 
  		to it, is then measured.</small>
  		<br/><br/>
  		<small>A foul is committed – and the jump is not measured – if 
  		an athlete steps beyond the board.</small>
  		<br/><br/>
  		<small>Most championship competitions involve six jumps per competitor, 
  		although usually a number of them, those with the shorter marks, 
  		are often eliminated after three jumps. If competitors are tied, 
  		the athlete with the next best distance is declared the winner.</small>
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

export default ljump;