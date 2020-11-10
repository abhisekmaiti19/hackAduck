import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSection from "../components/Reusable/HeroSection"

import Contact from "..//components/Contact/Contact"

const ContactPage = ({ data }) => (
  <Layout>
    <SEO title="Contact Us" />

    <HeroSection
      img={data.img.childImageSharp.fluid}
      subtitle=""
      heroclass="hero-background"
    />

    <div className="container">
      <Contact />
    </div>
  </Layout>
)

export const query = graphql`
  {
    img: file(relativePath: { eq: "103.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default ContactPage
