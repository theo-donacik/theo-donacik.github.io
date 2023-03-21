import React from 'react';
import './App.css';
import Navigation from './components/navigation'
import Home from './pages/Home'

var pages : { [page: string] : React.ReactElement } = {}
pages["/"] = Home()

function getPage() {
  if (window.location.pathname in pages){
    return pages[window.location.pathname]
  }
  else {
    return(
      <text>Page not found</text>
    );
  }
}

function App() {
  return (
    <>
    <Navigation/>
    {getPage()}
    </>
  );
}

export default App;
