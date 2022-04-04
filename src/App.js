import React, {Fragment} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Homepage from './pages/homepage/Homepage';
import './App.css';
import Login from './pages/loginPage/Login';
import Dashboard from './pages/dashboard/Dashboard';

const App = () => {
  return(
    <Fragment>
      <Router>
        <section className="cont">
          <Routes>
            <Route path='/' element={<Homepage/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/dashboard' element={<Dashboard/>} />
          </Routes>
        </section>
      </Router>
    </Fragment>
  )
}

export default App;
