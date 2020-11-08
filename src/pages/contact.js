import React from "react"
import {  graphql } from 'gatsby'


import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSection from '../components/Reusable/HeroSection'
import Infoblock from '../components/Reusable/Infoblock'
import DualInfoblock from '../components/Reusable/DualInfoblock'
import Teamphotosection from '../components/About/Teamphotosection'



const ContactPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
   <HeroSection 
   img={data.img.childImageSharp.fluid}
   
   subtitle=""
   heroclass="about-background"
   />
   <DualInfoblock heading="Massage from Developer"/>
   <Infoblock heading="About our vision"/> 
   <Teamphotosection/>
  

  </Layout>
)

export const query = graphql`
{
  img: file(relativePath: {eq:"6.png"})
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
