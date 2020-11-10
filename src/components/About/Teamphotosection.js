import React from "react"
import Abhi from "../../images/Abhisek.jpg"
import Ayyan from "../../images/ayyan.jpg"

export default function Teamphotosection() {
  return (
    <section id="team" class="pb-5">
      <div class="container">
        <h5 class="section-title h1">OUR TEAM</h5>

     
        <div className=" row center-align" id="parrent-prof">
          <div class="col-xs-12 col-sm-6 prof-card col-lg-6 col-md-4">
            <div
              class="image-flip"
              ontouchstart="this.classList.toggle('hover');"
            >
              <div class="mainflip">
                <div class="frontside">
                  <div class="card">
                    <div class="card-body text-center">
                      <p>
                        <img class=" img-fluid" src={Abhi} alt="card image" />
                      </p>
                      <h4 class="card-title">Abhisek Maiti</h4>
                      <p class="card-text">Co-Founder Techkydevs</p>
                      <a href="#" class="btn btn-primary btn-sm">
                        <i class="fa fa-plus"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="backside">
                  <div class="card">
                    <div class="card-body text-center mt-4">
                      <h4 class="card-title">Abhisek Maiti</h4>
                      <p class="card-text">
                        CSE student looking to leverage my passion for problem
                        solving and algorithm design into an engineering role
                        that allows me to create engaging products and user
                        experiences.
                      </p>
                      <ul class="list-inline">
                        <li class="list-inline-item">
                          <a
                            class="social-icon text-xs-center"
                            target="_blank"
                            href="https://facebook.com/abhimaiti.official"
                          >
                            <i class="fa fa-facebook"></i>
                          </a>
                        </li>
                        
                        <li class="list-inline-item">
                          <a
                            class="social-icon text-xs-center"
                            target="_blank"
                            href="https://github.com/abhisekmaiti19"
                          >
                            <i class="fa fa-github"></i>
                          </a>
                        </li>

                        <li class="list-inline-item">
                          <a
                            class="social-icon text-xs-center"
                            target="_blank"
                            href="https://www.linkedin.com/in/abhisekmaiti19/"
                          >
                            <i class="fa fa-linkedin"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-xs-12 col-sm-6 prof-card col-lg-6 col-md-4">
            <div
              class="image-flip"
              ontouchstart="this.classList.toggle('hover');"
            >
              <div class="mainflip">
                <div class="frontside">
                  <div class="card">
                    <div class="card-body text-center">
                      <p>
                        <img class=" img-fluid" src={Ayyan} alt="card image" />
                      </p>
                      <h4 class="card-title">Md. Ayyan</h4>
                      <p class="card-text">Co-Founder Techkydevs</p>
                      <a href="#" class="btn btn-primary btn-sm">
                        <i class="fa fa-plus"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="backside">
                  <div class="card">
                    <div class="card-body text-center mt-4">
                      <h4 class="card-title">Md. Ayyan Fahim</h4>
                      <p class="card-text">
                        Web Developer looking
                        forward for a professional roll of problem solving amd
                        making good user experiences via creative design
                      </p>
                      <ul class="list-inline">
                        <li class="list-inline-item">
                          <a
                            class="social-icon text-xs-center"
                            target="_blank"
                            href="https://www.facebook.com/md.ayyan.50"
                          >
                            <i class="fa fa-facebook"></i>
                          </a>
                        </li>

                        
                        <li class="list-inline-item">
                          <a
                            class="social-icon text-xs-center"
                            target="_blank"
                            href="https://github.com/mdayyan011"
                          >
                            <i class="fa fa-github"></i>
                          </a>
                        </li>
                       
                        <li class="list-inline-item">
                          <a
                            class="social-icon text-xs-center"
                            target="_blank"
                            href="https://www.linkedin.com/in/md-ayyan-fahim-5a60a3190/"
                          >
                            <i class="fa fa-linkedin"></i>
                          </a>
                        </li>

                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
