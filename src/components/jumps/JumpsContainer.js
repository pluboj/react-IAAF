import React from 'react';
import JumpsE from './JumpsE';

const JumpssContainer = (props) => {
  let resultsM = props.data.m.map((result) => {
    return <JumpsE pos={result.pos}
                   name={result.name}
                   country={result.country}
                   mark={result.mark}
                   key={"hjumpm-"+ result.pos} />
  }); 

  let resultsW = props.data.w.map((result) => {
    return <JumpsE pos={result.pos}
                   name={result.name}
                   country={result.country}
                   mark={result.mark}
                   key={"hjumpw-"+ result.pos} />
  }); 
  return (
  	<div>
  		<h4>How it works</h4>
  		<small>Competitors jump unaided and take off from one foot over a 
  		four-metre long horizontal bar. They seek to clear the greatest height 
  		without knocking the bar to the ground.</small>
  		<br/><br/>
  		<small>All competitors have three attempts per height, 
  		although they can elect to ‘pass’, i.e. advance to a greater 
  		height despite not having cleared the current one. Three consecutive 
  		failures at the same height, or combination of heights, cause a 
  		competitor’s elimination.</small>
  		<br/><br/>
  		<small>If competitors are tied on the same height, the winner will 
  		have had the fewest failures at that height. If competitors are still 
  		tied, the winner will have had the fewest failures across the entire 
  		competition. Thereafter, a jump-off will decide the winner.</small>
  		<br/><br/>
  		<p><strong>MEN</strong></p>
	    <table className="table table-bordered table-striped">
	    	<thead>
	    		<tr>
		    		<th>POS</th>
		    		<th>NAME</th>
		    		<th>COUNTRY</th>
		    		<th>MARK</th>
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
	    		</tr>
	    	</thead>
	    	<tbody>
	    		{resultsW} 
	    	</tbody>
	    </table>
    </div>
  );
}

export default JumpssContainer;