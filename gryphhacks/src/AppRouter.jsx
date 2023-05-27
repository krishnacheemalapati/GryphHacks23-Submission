import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Cam from './pages/Cam'
import Home from './pages/Home'
import Privacy from './pages/Privacy'


class AppRouter extends React.Component{
  render(){
    return(
      <BrowserRouter>
        <div>
          <Routes>
            <Route path = "/" element = {<Home />} exact = {true} />
            <Route path = "/landingpage" element = {<Home />} exact = {true} />
            <Route path = "/demo" element = {<Cam />} exact = {true} />
            <Route path = "/privacy" element = {<Privacy />} exact = {true} />
          </Routes>
        </div>
      </BrowserRouter>
    )
  }
}

export default AppRouter