import React from 'react';
import './App.css';
import Navigation from './components/navigation'
import Home from './pages/Home'
import ProjectSelect from './pages/ProjectSelect';
import Game2048 from './pages/projects/2048/2048';
import ProjectPage from './components/ProjectPage';
import Resume from './pages/Resume';
import { PROJECTS } from './util/common';
import { Project } from './util/types';
import { BODY } from "./data/style"
import Blog from './pages/Blog';
import { posts } from './data/blogPosts/blogPosts';
import BlogPage from './components/BlogPage';

const projects: Project[] = PROJECTS as Project[]

var pages : { [page: string] : () => React.ReactElement } = {
  "/": () => <Home/>,
  "/projects": () => <ProjectSelect/>,
  "/projects/2048game": () => <Game2048/>,
  "/resume": () => <Resume/>,
  "/blog": () => <Blog/>
}

projects.forEach((project) => {
  pages["/projects/" + project.id] = () => <ProjectPage project={project}/>
})

posts.forEach((post) => {
  pages["/blog/" + post.id] = () => <BlogPage post={post}/>
})

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
    <body style={BODY}>
      <div className='App'>
        <Navigation/>
        {getPage()}
      </div>
    </body>
  );
}

export default App;
