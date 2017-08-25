import React from 'react';

const JumpsE = (props) => (  
    <tr>
      <td>{props.pos}</td>
      <td>{props.name}</td>
      <td>{props.country}</td>
      <td>{props.mark}</td>
      {props.wind ? <td>{props.wind}</td> : ''}
    </tr>
);

export default JumpsE;