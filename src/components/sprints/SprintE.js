import React from 'react';

const SprintE = (props) => (  
    <tr>
      <td>{props.pos}</td>
      <td>{props.name}</td>
      <td>{props.country}</td>
      <td>{props.mark}</td>
      <td>{props.reaction_time}</td>
    </tr>
);

export default SprintE;