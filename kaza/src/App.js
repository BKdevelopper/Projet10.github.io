//component page for the app
import { Component } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
//import './App.scss'

import Home from './pages/Home'
import AboutUsPage from './pages/AboutUs'
import ErrorPage from './pages/Error'
import LocationPage from './pages/Location'
import Header from './components/Header'
import Footer from './components/Footer'

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="main">
          <Header />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/location/:id" exact element={<LocationPage />} />
            <Route path="/aboutus" exact element={<AboutUsPage />} />
            <Route path="/404" exact element={<ErrorPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    )
  }
}
