import React from 'react';
import JumpsE from './JumpsE';
import Intro from '../Intro';

const JumpsContainer = (props) => {
  let resultsM = props.data.m.map((result) => {
    return <JumpsE pos={result.pos}
                   name={result.name}
                   country={result.country}
                   mark={result.mark}
                   key={"jumpm-"+ result.pos} />
  }); 

  let resultsW = props.data.w.map((result) => {
    return <JumpsE pos={result.pos}
                   name={result.name}
                   country={result.country}
                   mark={result.mark}
                   key={"jumpw-"+ result.pos} />
  }); 

let intro = props.intro.map((result, i) => {
  	return <Intro key={"txt-"+i} text={result} />
  });

  return (
  	<div>
  		<h4>How it works</h4>
  		{intro}
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