import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar />
        <div className="container">
          <Routes>
         <Route exact path="/" element={<News key="science" pageSize={10} country="us" category="science"/>}></Route>
         <Route exact path="/business" element={ <News key="business" pageSize={10} country="us" category="Business"/>}></Route>
         <Route exact path="/entertainment" element={<News key="entertainment" pageSize={10} country="us" category="Entertainment"/>}></Route>
         <Route exact path="/general" element={ <News key="general" pageSize={10} country="us" category="General"/>}></Route>
         <Route exact path="/health" element={ <News key="health" pageSize={10} country="us" category="Health"/>}></Route>
         <Route exact path="/technology" element={ <News key="technology" pageSize={10} country="us" category="Technology"/>}></Route>
         <Route exact path="/science" element={ <News key="science" pageSize={10} country="us" category="Science"/>}></Route>
         <Route exact path="/sports" element={<News key="sports" pageSize={10} country="us" category="Sports"/>}></Route>
         
          </Routes>
          


        </div>
        </Router>
        
      </div>
    )
  }
}

