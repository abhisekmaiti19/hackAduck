import React from "react"
import Heading from "./Heading"
import { Link } from "gatsby"
import logo from '../../images/logo.png';

export default function DualInfoblock({ heading }) {
  return (
    <section className="my-4 py-4 bg-theme">
      <div className="container ">
        <Heading title={heading} />
        <div className="row justify-content-md-center">
          <div className="col-12 col-md-8 mb-3">
            
            <img src={logo} alt="brand logo" width = "50%"/>
            
          </div>

          <div className="col-12 col-md-8">
            <p className="About-us-text  text-dark  mb-3">
            At Quick Store, we build products & solutions that redefines the
            Daily Essentials ordering & delivery space in India, every single
            day. The best part? Every bit of your work at Quick Store will
            help us change the way India eats! We are presently develope on
             more features. We not only connect people to food and their 
             essentials in every context but work 
            closely with Groccerry shops to enable a sustainable ecosystem.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-10 col-sm-2 text-center mx-auto ">
            <Link to="/about/">
              <button className="btn btn-mystyle text-white btn-md">
                Know More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
