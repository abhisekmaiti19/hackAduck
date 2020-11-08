import React from "react"
import {  graphql } from 'gatsby'


import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSection from '../components/Reusable/HeroSection'
import Infoblock from '../components/Reusable/Infoblock'
import Contact from '..//components/Contact/Contact'




const ContactPage = ({data}) => (
  <Layout>
    <SEO title="Contact Us" />
   <HeroSection 
   img={data.img.childImageSharp.fluid}
   
   subtitle=""
   heroclass="about-background"
   />
 
   <Infoblock heading="How can we help"/> 
   <Contact/>
  
  

  </Layout>
)

export const query = graphql`
{
  img: file(relativePath: {eq:"1.png"})
  {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
}
`

export default ContactPage
