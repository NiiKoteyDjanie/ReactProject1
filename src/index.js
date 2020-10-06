import React from 'react';
import ReactDOM from 'react-dom';

function Heading (){
  return <h1>My First React Project</h1>
}
function Notes (){
  return <h5>This promises to be fun, already!</h5>
}

ReactDOM.render(
  
    <div><Heading />
    <Notes />
    </div>,

  document.getElementById('root')
);


