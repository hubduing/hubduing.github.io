import './App.scss';
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Title from '../title/Title';
import Navbar from '../navbar/Navbar';
import Header from '../header/Header';
import Card from '../card/Card';
import Skills from '../skills/Skills'
import Portfolio from '../portfolio/Portfolio';
import Contact from '../contact/Contact'
import Footer from '../footer/Footer'

function App() {

  return (
    <>
      <Title/>
      <Navbar />
      <section className="about" id="about">
        <div className="container flex">
          <Header/>
          <Card/>
          <Skills/>
        </div>
      </section>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
