import React, { useEffect, useState, useRef } from "react"
import { Link, graphql } from "gatsby" 
import Layout from "../components/layout"
import Bio from "../components/bio"
import Seo from "../components/seo"
import { Container } from "./room.styles"
import styled from "@emotion/styled"
import { Global, css } from "@emotion/react"
import useElementPosition from '../components/useElementPosition'
//import { BreakpointProvider } from 'gatsby-plugin-breakpoints';
//import { useBreakpoint } from 'gatsby-plugin-breakpoints';

// css
import { Main, MainInner, HeaddingText, HeaddingWrap } from "./room.styles"
  

//const ConButton = Container.withComponent("button");

const UserButton = props => (
  <div>
    button!!!
    <span>0</span>
    <span>0</span>
    <span>0</span>
  </div>
)

const globalStyle = css({
  'body': {
    margin: 0,
    padding: 0,
    background: '#ecebeb',
    color: '#777',
  },
})

const headingData = [
  {
    headding: `section01...!`
  },
  {
    headding: `section02...!`
  },
  {
    headding: `section03...!`
  },
  {
    headding: `section04...!`
  },
]

const Room = ({ data, location }, props) => {
    //const siteTitle = data.site.siteMetadata?.title || `Title`
    const [textIndex, setTextIndex] = useState(0)
    const elementRef = useRef(null)
    const totalFrames = 144
    const imageFrame = useElementPosition(elementRef, totalFrames, 1)
    //const breakpoints = useBreakpoint()

    useEffect(() => {
      let textPercentage = Math.floor((headingData.length * imageFrame) / totalFrames ) // 0 ~ 4
      if (textPercentage < headingData.length) setTextIndex(textPercentage)
    }, [imageFrame])

    return (
      <>
        <Global styles={globalStyle} />
        {/* <BreakpointProvider> */}
        
          <Main ref={elementRef}>
            <MainInner imageframe={imageFrame}>
              <HeaddingWrap index={textIndex} datalength={headingData.length}>
                <div>
                  {headingData?.map(({headding}, i) => {
                    return (
                      <HeaddingText key={i} section={i} index={textIndex}>
                        <h1>{headding}</h1>
                        <div>IMAGE AREA</div>
                      </HeaddingText>
                    )
                  })}
                </div>
              </HeaddingWrap>
            </MainInner>
          </Main>
          {/* <UserButton /> */}
        {/* </BreakpointProvider> */}
      </>
    )
}

export default Room

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`