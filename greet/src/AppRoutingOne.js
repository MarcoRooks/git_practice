import React, { useEffect } from "react";
import {BrowserRouter, Route, Routes, Link, Navigate, useMatch, matchPath} from 'react-router-dom'
import Home from "./components/pages/home/home.jsx";
import NotFoundPage from "./components/pages/404/NotFoundPage.jsx";
import AboutPage from "./components/pages/about/AboutPage.jsx";
import ProfilePage from "./components/pages/profile/ProfilePage.jsx";
import TaskPage from "./components/pages/tasks/TaskPage.jsx";
import TaskDetail from "./components/pages/tasks/TaskDetail.jsx";
import PleaseLogin from "./components/pages/404/PleaseLogin.jsx";
import Login from "./components/pages/auth/Login.jsx";
import StatePage from "./components/pages/home/StatePage.jsx";

function AppRoutingOne() {
  let logged = false;

  let tasklist = [
    {
      id: 1,
      name: 'First task',
      description: 'My first task'
    },
    {
      id: 2,
      name: 'Second task',
      description: 'My second task'
    }
  ]
  
  useEffect(() => {
    logged = localStorage.getItem('credentials');
  }, [])

  return (
    <BrowserRouter>
      <div>
        <aside>
          <Link to='/'>| HOME |</Link>
          <Link to='/about'>| ABOUT |</Link>
          <Link to='/faq'>| FAQ |</Link>
          <Link to='/profile'>| PROFILE |</Link>
          <Link to='/login'>| Login |</Link>
          <Link to='/task/1' >| TASK 1|</Link>
        </aside>
      
        <main>
          <Routes>
            <Route exact path='/' element= {<Home/>}/>
            <Route exact path='/online-state' element= {<StatePage/>}/>
            <Route path='/login' element={
              logged ?
              <Home/>
              :
              <Login/>
            }/>
            <Route path="/about" element={<AboutPage/>} />
            <Route path="/faq" element={<AboutPage/>} />
            <Route path="/profile" element={              
              logged ? 
              <ProfilePage/>
              : 
              <Navigate replace to='/loginerror' />
            }/> 
            <Route path="/tasks" element={<TaskPage/>} />
            <Route path="/task/:item" element={<TaskDetail task={tasklist}/>}/>
            
            <Route path="/loginerror" element={<PleaseLogin/>} />
            <Route path="*" element={<NotFoundPage/>} />
          </Routes>
        </main>
      </div>
        
    </BrowserRouter>
  );
}

export default AppRoutingOne;