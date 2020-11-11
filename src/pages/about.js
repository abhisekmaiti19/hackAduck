import React from "react"
import {  graphql } from 'gatsby'


import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSection from '../components/Reusable/HeroSection'
import Teamphotosection from '../components/About/Teamphotosection'



const AboutPage = ({data}) => (
  <Layout>
    <SEO title="About Us" />
    
    <div className="container-fluid">
    <div className="py-3">
   <HeroSection 
   img={data.img.childImageSharp.fluid}
   heroclass="about-background "/>
   </div>
   </div>

   <div className="container-fluid">
    <div className="py-3">
   <HeroSection 
   img={data.img1.childImageSharp.fluid}
   heroclass="about-background "/>
   </div>
   </div>

   <div className="container-fluid">
    <div className="py-5">
   <HeroSection 
   img={data.img2.childImageSharp.fluid}
   heroclass="about-background "/>
   </div>
   </div>

<Teamphotosection/>
  </Layout>


)

export const query = graphql`
{
  img: file(relativePath: {eq:"9.png"})
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

export default AboutPage
