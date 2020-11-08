import React, { Component } from 'react'
import Heading from'../Reusable/Heading'
import Img from 'gatsby-image'

export default class Productscart extends Component {
    constructor(props){
        super(props)
        this.state= {
            myproducts: props.myproducts.edges,
            products: props.myproducts.edges
        }
    }
    render() {
        // console.log(this.state.myproducts);
        return (
            <section className="py-5">
            <div className="container">
            <Heading title="Our Products"/>
            <div className="row">
            {
                this.state.myproducts.map(({ node })=>{
                    return(
                        <div key={node.id}
                        className="col-11 col-md-6 d-flex my-3 mx-auto">
                        <Img fixed={node.image.fixed} />
                        <div className="flex-grow-1 px-3">
                        <div className="d-flex justify-content-between">
                        <h6 className="mb-0">{node.title}</h6>
                        <h6 className="mb-0 text-success">₹{node.price}</h6>
                        </div>
                        
                        <button
                        data-item-id={node.id}
                        data-item-name={node.title}
                        data-item-price={node.price}
                        
                        data-item-url="https://quickstore-tdevs.netlify.app/"
                        data-item-image={node.image.fixed.src}
                        className="btn btn-warning snipcart-add-item">Buy Now</button>
                        </div>
                        
                        </div>
                    )
                })
            }
            </div>
            </div>
            </section>
        )
    }
}
