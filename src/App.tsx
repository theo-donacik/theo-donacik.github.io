import React from 'react';
import './App.css';
import Navigation from './components/navigation'
import Home from './pages/Home'
import GameWindow from './pages/projects/2048/2048';

var pages : { [page: string] : () => React.ReactElement } = {}
pages["/"] = () => <Home/>
pages["/projects"] = () => <GameWindow/>

function getPage() {
  console.log(window.location.pathname, process.env.PUBLIC_URL)
  if (window.location.pathname in pages){
    return pages[window.location.pathname]()
  }
  else {
    return(
      <text>Page not found</text>
    );
  }
}

function App() {
  return (
    <body style={{overflow: 'hidden', overscrollBehavior: 'contain', touchAction: 'none'}}>
      <div className='App'>
        <Navigation/>
        {getPage()}
      </div>
    </body>
  );
}

export default App;
