import React from 'react'
import './Blog.scss'
import '../app/App.scss'

const Blog = () => {
  return (
    <>
      <section id="blog">
        <div className="container d-flex flex-column">
          <div className="header text-center animated slide-in-left"
               data-animation="slide-in-left">BLOG</div>
          <div className="header-bar waypoint animated slide-in-left"
            style={{animationDelay: 0.5 + "s"}}></div>

          <div className="g-flex row flex-wrap">
            <div className="g-flex row-sm">
              <a href="http://blog.eyecuelab.com/2016/04/29/breaking-your-coders-block/" target="_blank">
                <div className="blog-wrap">
                  <div className="fade-wrap">
                    <div className="thumb" id="thumb-1"></div>
                    <div className="label bold">Breaking Your Coder's Block</div>
                    <div className="date">APRIL 29, 2016</div>
                    <div className="bar"></div>
                    <div className="text">
                      At one time or another, as a developer, we've all found
                      ourselves hopelessly stuck on a coding issue...
                    </div>
                  </div>
                </div>
              </a>
              <a href="http://blog.eyecuelab.com/2015/03/19/this-is-your-brain-on-caffeine/" target="_blank">
                <div className="blog-wrap">
                  <div className="fade-wrap">
                    <div className="thumb" id="thumb-2"></div>
                    <div className="label bold">
                      !Awake: This is Your Brain on Caffeine
                    </div>
                    <div className="date">MARCH 19, 2015</div>
                    <div className="bar"></div>
                    <div className="text">
                      If there's one thing I can truly claim to be an expert on,
                      it's staying awake. For five years I struggled to stay
                      employed...
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="g-flex row-sm">
              <a href="http://blog.eyecuelab.com/2015/03/04/getting-a-handle-on-handlebars/" target="_blank">
                <div className="blog-wrap waypoint animated fade-in"
                     style={{animationDelay: 0.4 + "s"}}>
                  <div className="fade-wrap">
                    <div className="thumb" id="thumb-3"></div>
                    <div className="label bold">Getting a Handle on Handlebars</div>
                    <div className="date">MARCH 04, 2015</div>
                    <div className="bar"></div>
                    <div className="text">
                      Here at EyeCue Lab we render most of our data-laden HTML
                      pages in Handlebar templates...
                    </div>
                  </div>
                </div>
              </a>
              <a href="http://blog.eyecuelab.com/2015/02/23/essential_extensions/" target="_blank">
                <div className="blog-wrap waypoint animated fade-in"
                     style={{animationDelay: 0.6 + "s"}}>
                  <div className="fade-wrap">
                    <div className="thumb" id="thumb-4"></div>
                    <div className="label bold">
                      5 Extensions for Your Chrome Toolbelt
                    </div>
                    <div className="date">FEBRUARY 23, 2015</div>
                    <div className="bar"></div>
                    <div className="text">
                      If you're not using Google Chrome as a front-end web
                      developer, you're missing out. Not only is Chrome the...
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default Blog