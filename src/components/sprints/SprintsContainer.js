import React from 'react';
import SprintE from './SprintE';

const SprintsContainer = (props) => {
  let resultsM = props.data.m.map((result) => {
    return <SprintE pos={result.pos}
                   name={result.name}
                   country={result.country}
                   mark={result.mark}
                   reaction_time={result.reaction_time}
                   key={"m100-"+ result.pos} />
  }); 

  let resultsW = props.data.w.map((result) => {
    return <SprintE pos={result.pos}
                   name={result.name}
                   country={result.country}
                   mark={result.mark}
                   reaction_time={result.reaction_time}
                   key={"m100-"+ result.pos} />
  }); 
  return (
  	<div>
  		<h4>How it works</h4>
  		<small>Runners race for 100m down the home straight of a 400m track. They start from blocks and run in lanes.</small>
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

export default SprintsContainer;