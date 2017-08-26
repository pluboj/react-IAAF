import React from 'react';
import JumpsE from './JumpsE';

const JumpsContainer = (props) => {
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
  		{props.intro[0]} <br/><br/> 
      {props.intro[1]} <br/><br/> 
      {props.intro[2]} <br/><br/>
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

export default JumpsContainer;