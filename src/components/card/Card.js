import React from 'react'
import './Card.scss'

export default function Card() {
  return (
    <div>
      <div className="d-flex row label-wrap text-center">
            <div className="d-flex col-xl">
              <div className="d-flex bullet-wrap w-50 flex-column">
                <div className="hex-wrap waypoint animated flip-in-x">
                  <i className="fas fa-tachometer-alt"></i>
                </div>
                <div className="waypoint animated fade-in">
                  <div className="label">Fast</div>
                  <div>
                    Fast load times and lag free interaction, my highest
                    priority.
                  </div>
                </div>
              </div>
              <div className="d-flex bullet-wrap w-50 flex-column">
                <div className="hex-wrap waypoint animated flip-in-x">
                  <i className="fas fa-laptop-code"></i>
                </div>
                <div className="waypoint animated fade-in">
                  <div className="label">Responsive</div>
                  <div>
                    My layouts will work on any device, big or small.
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex col-xl">
              <div className="d-flex bullet-wrap w-50 flex-column">
                <div className="hex-wrap waypoint animated flip-in-x">
                  <i className="far fa-lightbulb"></i>
                </div>
                <div className="waypoint animated fade-in">
                  <div className="label">Intuitive</div>
                  <div>
                    Strong preference for easy to use, intuitive UX/UI.
                  </div>
                </div>
              </div>
              <div className="d-flex bullet-wrap w-50 flex-column">
                <div className="hex-wrap waypoint animated flip-in-x">
                  <i className="fas fa-rocket"></i>
                </div>
                <div className="waypoint animated fade-in">
                  <div className="label">Dynamic</div>
                  <div>
                    Websites don't have to be static, I love making pages come
                    to life.
                  </div>
                </div>
              </div>
            </div>

          </div>
    </div>
  )
}
