import React from "react"
import Heading from "./Heading"
import { Link } from "gatsby"

export default function DualInfoblock({ heading }) {
  return (
    <section className="my-4 py-4 bg-theme">
      <div className="container ">
        <Heading title={heading} />
        <div className="row">
          <div className="col-4">
            <div className="card cardinfo">
              <img
                className="card-img-top"
                src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt="Card image cap"
              />
            </div>
          </div>

          <div className="col-8">
            <p className="About-us-text font-weight-bold text-dark  mb-5">
              Launched in Kolkata a month ago, Quick Store has grown from a home
              project to one of the Hackathon. We are presently develope on more
              features. We not only connect people to food and their essentials
              in every context but work closely with Groccerry shops to enable a
              sustainable ecosystem.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-10 col-sm-2 text-center mx-auto ">
            <Link to="/about/">
              <button className="btn btn-mystyle text-white btn-md">
                {heading}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
