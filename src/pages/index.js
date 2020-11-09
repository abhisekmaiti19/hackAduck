import React from "react"
import {  graphql } from 'gatsby'


import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSection from '../components/Reusable/HeroSection'
import Infoblock from '../components/Reusable/Infoblock'
import DualInfoblock from '../components/Reusable/DualInfoblock'
import Products from '../components/Cart/Productscart'



const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <div className="container-fluid">
   <HeroSection 
   img={data.img.childImageSharp.fluid}
   heroclass="hero-background"/>
   </div>
   
  <Products myproducts={data.myproducts}/>
   
  <DualInfoblock heading="What is Quick Store ?"/>

  </Layout>
)

export const query = graphql`
{
  img: file(relativePath: {eq:"2.png"})
  {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }

  myproducts: allContentfulDailyneeds {
    edges {
      node {
        id
        title
        price
        category
        childContentfulDailyneedsDescriptionTextNode{
          description
          
        }
        image {
          fixed(width: 200, height: 120) {
            ...GatsbyContentfulFixed_tracedSVG
          }
        }
      }
    }
  }

}
`

export default IndexPage
