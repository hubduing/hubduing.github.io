import React from 'react'
import './Portfolio.scss'
import '../title/Title.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import GalleryItem from "../galleryitem/GalleryItem";

export default function Portfolio() {
  return (
    <>
      <section id="portfolio" className="g-flex flex-column portfolio">
        <div className="header text-center">PROJECTS</div>
        <div className="header-bar"></div>
        <div className="gallery container">
          <GalleryItem/>
        </div>
      </section>
    </>
  )
}
