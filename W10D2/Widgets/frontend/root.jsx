import Clock from './clock';
import Tab from './tab';
import React from 'react';
import ReactDOM from 'react-dom';

const root = function() {
   const tab1 = {title: "I'm tab 1", content: "I'm content!", id:0};
   const tab2 = {title: "I'm tab 2", content: "I'm content!", id:1};
   const tab3 = {title: "I'm tab 3", content: "I'm content!", id:2};
   const tabs = [tab1, tab2, tab3];
  return (
     <div>
        <Clock />
        <Tab tabs={tabs} />
   </div>
  )
}

export default root;