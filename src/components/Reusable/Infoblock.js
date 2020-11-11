import React from "react"
import Heading from "./Heading"
import { Link } from "gatsby"

export default function Infoblock({ heading }) {
  return (
    <div className="bg-theme my-5 py-4">
      <div className="container">
        <Heading title={heading} />
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="About-us-text  text-dark  mb-3">
              At Quick Store, we build products & solutions that redefines the
              Daily Essentials ordering & delivery space in India, every single
              day. The best part? Every bit of your work at Quick Store will
              help us change the way India eats!
            </p>

            <Link to="/about/">
              <button className="btn btn-mystyle text-white btn-lg">
                {heading}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
