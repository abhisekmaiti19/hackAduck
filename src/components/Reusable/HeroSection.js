import React from 'react'
import BackgroundImages from 'gatsby-background-image'

export default function HeroSection({img, heroclass}) {
    return (
        
        <BackgroundImages
        className={heroclass}
        fluid={img}
        >
        </BackgroundImages>
    
    )
}
