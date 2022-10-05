import {BrowserRouter, Route, Routes, Link, Navigate, useMatch, matchPath} from 'react-router-dom'
import NotFoundPage from './components/pages/404/NotFoundPage';
import Login from './components/pages/auth/Login';
import Dashboard from './components/pages/Dashboard/Dashboard';

function AppRoutingFinal() {

  let loggedIn = true;


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path='' element={
            loggedIn? <Navigate replace to='/dashboard' /> : <Navigate replace to='/login'/>
          }/>
          <Route path='*' element={<NotFoundPage/>} />
          <Route path='/login' element={<Login/>}/>
          <Route exact path='/dashboard' element={
            loggedIn? <Dashboard/> : <Navigate replace to='/login'/>
          }/>
        </Routes>
      </BrowserRouter>
      
    </>
  );
}

export default AppRoutingFinal;