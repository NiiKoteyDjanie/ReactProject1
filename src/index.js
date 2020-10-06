import React from 'react';
import ReactDOM from 'react-dom';
import Heading from './Heading';
import Notes from './Notes';
import Table from './Table';
import List from './List';
import Images from './Images';
import Links from './Links';




ReactDOM.render(
  
    <div><Heading />
    <Notes />
    <Table />
    <List />
    <Images />
    <Links />
    </div>,

  document.getElementById('root')
);


