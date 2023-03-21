import React from 'react';
import './App.css';
import Navigation from './components/navigation'
import Home from './pages/Home'
import GameWindow from './pages/projects/2048';

var pages : { [page: string] : () => React.ReactElement } = {}
pages["/"] = () => <Home/>
pages["/projects"] = () => <GameWindow/>

function getPage() {
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
    <div className='App'>
      <Navigation/>
      {getPage()}
    </div>
  );
}

export default App;
