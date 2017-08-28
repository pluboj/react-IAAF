import React from 'react';
import SprintE from './SprintE';
import Intro from '../Intro';

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