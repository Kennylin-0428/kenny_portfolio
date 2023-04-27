import React from 'react'
import {About, Header, Footer, Testimomials, Skills, Work} from './container';
import { Navbar } from './components/Navbar';
import './App.scss';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <Footer />
      <About />
      <Testimomials />
      <Skills />
      <Work />
    </div>
  )
}

export default App