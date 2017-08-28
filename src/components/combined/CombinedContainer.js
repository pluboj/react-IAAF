import React from 'react';
import CombinedE from './CombinedE';
import Intro from '../Intro';

const CombinedContainer = (props) => {
  let results = props.data.map((result) => {
    return <CombinedE pos={result.pos}
                   name={result.name}
                   country={result.country}
                   key={"comb-"+ result.pos} />
  }); 

let intro = props.intro.map((result) => {
  	return <Intro text={result} />
  });

  return (
  	<div>
  		<h4>How it works</h4>
  		{intro}

	    <table className="table table-bordered table-striped">
	    	<thead>
	    		<tr>
		    		<th>POS</th>
		    		<th>NAME</th>
		    		<th>COUNTRY</th>
	    		</tr>
	    	</thead>
	    	<tbody>
	    		{results} 
	    	</tbody>
	    </table>
    </div>
  );
}

export default CombinedContainer;