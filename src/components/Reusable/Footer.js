//rfc=> react functional component
//rcc => react class component

import React from "react"
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";

export default function Footer( ) {
  return (
    
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h6>About</h6>
            <p className="text-justify">Launched in Kolkata a month ago, Quick Store has grown from a home project to one of the Hackathon. We are presently develope on more features. We not only connect people to food and their essentials in every context but work closely with Groccerry shops to enable a sustainable ecosystem.</p>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Special Thanks</h6>
            <a href="https://psyberduck.com">PsyberDuck</a>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Quick Links</h6>
            <ul className="footer-links">
              <li><a href="/about/">About Us</a></li>
              <li><a href="/contact/">Contact Us</a></li>
              <li><a href="https://github.com/abhisekmaiti19/hackAduck">Contribute</a></li>
              <li><a href="/privacy-policy/">Privacy Policy</a></li>
              <li><a href="https://goo.gl/maps/WEz3axuP8hSxRQ7NA">Location</a></li>
            </ul>
          </div>
        </div>
        <hr/>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">Copyright &copy; 2020 All Rights Reserved by 
         <a href="#"> Quick Store</a>. Develope with ❤ by <a href="https://techkydevs.com"> techkydevs </a>
            </p>
          </div>

          <div className="col-md-4 col-sm-6 col-xs-12">
            <ul className="social-icons">
              <li><a className="facebook" href="https://facebook.com/techkydevs"><FaFacebook/></a></li>
              <li><a className="github" href="https://github.com/abhisekmaiti19"><FaGithub/></a></li>
              <li><a className="discord" href="https://discord.gg/GvGED8YAbz"><FaDiscord/></a></li>
              <li><a className="globe" href="https://techkydevs.com"><FaGlobe/></a></li> 
            </ul>
          </div>
        </div>
      </div>
 </footer>
    
  )
}
