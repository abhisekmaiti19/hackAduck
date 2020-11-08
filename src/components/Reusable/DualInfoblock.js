import React from 'react'
import Heading from"./Heading";
import {Link} from "gatsby"

export default function DualInfoblock({heading}) {
    return (
        <section className="my-4 py-4 bg-theme">
        <div className="container">
        <Heading title={heading}/>
        <div className="row">
        <div className="col-8 mx-auto">
            <p className="lead text-white mb-5">
                lorem 50
            </p>
        </div>
        <div className="col-4">
            
        <div className="card team-card">
        <img src="https://images.pexels.com/photos/3760758/pexels-photo-3760758.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className="card-img-top" alt="my product image"/>
        <div className="card-body">
          <h5 className="card-title">Click the photos</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <Link href="#" className="btn btn-primary btn-block">{heading}</Link>
        </div>
        </div>
      </div>

        </div>
        </div>
        
        </section>
    )
}
