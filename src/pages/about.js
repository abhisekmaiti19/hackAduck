import React from "react"
import {  graphql } from 'gatsby'


import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSection from '../components/Reusable/HeroSection'
import Infoblock from '../components/Reusable/Infoblock'
import DualInfoblock from '../components/Reusable/DualInfoblock'
import Teamphotosection from '../components/About/Teamphotosection'



const AboutPage = ({data}) => (
  <Layout>
    <SEO title="About Us" />
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
  img: file(relativePath: {eq:"5.png"})
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
