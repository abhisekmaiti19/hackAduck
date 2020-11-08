import React from 'react'
import Heading from"./Heading";
import {Link} from "gatsby"

export default function Infoblock({heading}) {
    return (
        <div className="bg-theme my-5 py-4">
            <div className="container">
            <Heading title={heading}/>
            <div className="row">
            <div className ="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-dark mb-4">
            lorem hbceb evbebvh ebubv jebubev ebvebv evbevbev vevbebv jebvv jvbev evbevne vbenvuebvevbevb  evvev veev ev esdcdcefccefe ffe e f ef e fe   x 
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
