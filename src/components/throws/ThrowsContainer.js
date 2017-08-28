import React from 'react';
import ThrowsE from './ThrowsE';
import Intro from '../Intro';

const ThrowsContainer = (props) => {
  let resultsM = props.data.m.map((result) => {
    return <ThrowsE pos={result.pos}
                   name={result.name}
                   country={result.country}
                   mark={result.mark}
                   key={"throw-"+ result.pos} />
  }); 

  let resultsW = props.data.w.map((result) => {
    return <ThrowsE pos={result.pos}
                   name={result.name}
                   country={result.country}
                   mark={result.mark}
                   key={"throw-"+ result.pos} />
  }); 

  let intro = props.intro.map((result) => {
  	return <Intro text={result} />
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

export default ThrowsContainer;