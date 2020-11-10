import React from 'react'
import Heading from '../Reusable/Heading'


export default function Contact() {
    return (
       <section className="py-3">
       <Heading title="Contuct Us"/>
       <div className="col-10 col-sm-8 mx-auto cform">
       <form action="https://formspree.io/f/myybjqan" method="POST">
            <div className="form-group">
                    <input type="text" name="name" id="name" 
                    placeholder="Your Name" className="form-control"/>
            </div>

            <div className="form-group">
                    <input type="text" name="mobile" id="mobile" 
                    placeholder="Mobile Number" className="form-control"/>
            </div>

            <div className="form-group">
                    <input type="text" name="_replyto" id="email" 
                    placeholder="Your Email (ex. abc @ mail.com)" className="form-control"/>
            </div>

            <div className="form-group">
                    <textarea type="text" name="message" id="massage" 
                    placeholder="Your Message !" className="form-control"/>
            </div>

            <button tupe="submit" className="btn btn-outline-danger btn-block">Submit</button>
       </form>
       </div>
       </section>
    )
}
