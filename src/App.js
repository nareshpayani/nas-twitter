import React from 'react';
import './App.css';
import Sidebar from './Components/Sidebar';
import Feedbar from './Components/Feedbar';
import Widgets from './Components/Widgets';

function App() {
  return (
    <div className="app">

       {/* SideBar */}
      <Sidebar/>

     <Feedbar/>
      {/* FeedBar */}
      {/* Right Widgets */}
      <Widgets/>
    </div>
  );
}

export default App;
