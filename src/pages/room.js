import React, { useEffect, useState, useRef } from "react"
import { Link, graphql } from "gatsby" 
import Layout from "../components/layout"
import Bio from "../components/bio"
import Seo from "../components/seo"
import { Container } from "./room.styles"
import styled from "@emotion/styled"
import { Global, css } from "@emotion/react"
import useElementPosition from '../components/useElementPosition'
import { HeaddingText, HeaddingWrap } from "./room.styles"
  

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

    useEffect(() => {
      let index = getTextIndexPercentage()
      if (index < headingData.length) setTextIndex(index)
      console.log(imageFrame)
    }, [imageFrame])

    function getTextIndexPercentage() {
      return Math.floor((headingData.length * imageFrame) / totalFrames )
    }

    return (
      <>
        <Global styles={globalStyle} />
        <div ref={elementRef}>
          <div imageframe={imageFrame}>
            <HeaddingWrap index={textIndex} datalength={headingData.length}>
              {headingData?.map(({headding}, i) => {
                return (
                  <HeaddingText className={`section_${i}`} key={i} first={i === 0 ? true : false}>
                    <h1 style={{
                      opacity: i === textIndex ? 1 : 0
                    }}>{headding}</h1>
                  </HeaddingText>
                )
              })}
            </HeaddingWrap>
          </div>
        </div>
        <UserButton />
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