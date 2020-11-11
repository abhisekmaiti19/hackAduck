import React from "react"
import {  graphql } from 'gatsby'


import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSection from '../components/Reusable/HeroSection'
import Infoblock from '../components/Reusable/Infoblock'




const ServicePage = ({data}) => (
  <Layout>
    <SEO title="Services" />
    
    <div className="container-fluid">
    <div className="py-3">
   <HeroSection 
   img={data.img.childImageSharp.fluid}
   heroclass="hero-background-extra"/>
   </div>
   </div>

   <Infoblock heading="Know More"/>
  </Layout>


)

export const query = graphql`
{
  img: file(relativePath: {eq:"104.png"})
  {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }

  img1: file(relativePath: {eq:"101.png"})
  {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }

  img2: file(relativePath: {eq:"1023.png"})
  {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }

 



}
`

export default ServicePage
