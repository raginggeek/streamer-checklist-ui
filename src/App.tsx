import React from 'react';
import './App.css';
import {Checklist} from "./Checklist/Checklist";

function App() {
  return (
    <div className="App">
      <Checklist name="UI Checklist" checklistItems={
        [
          {
            completed: true,
            topic: "View detail should include a heading that indicates the topic of the checklist"
          },
          {
            completed: true,
            topic: "View detail should include 1 to many check list elements that contain the value of the item, and a checkbox indicating completion"
          },
          {
            completed: false,
            topic: "View detail should require a get argument that identifies the unique checklist so that I can retrieve the persisted checklist for read only access."
          },
        ]
      } />
    </div>
  );
}

export default App;
