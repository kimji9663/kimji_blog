import React, { useEffect, useState, useRef } from "react"
import { Link, graphql } from "gatsby" 
import Layout from "../components/layout"
import Bio from "../components/bio"
import Seo from "../components/seo"
import { Container } from "./room.styles"
import styled from "@emotion/styled"
import { Global, css } from "@emotion/react"
import useElementPosition from '../components/useElementPosition'

// css
import { Main, MainInner, BackgroundImg1, BackgroundImg2, BackgroundImg3, HeaddingText, HeaddingWrap } from "./room.styles"

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
    const totalFrames = 100
    const imageFrame = useElementPosition(elementRef, totalFrames, 1)

    const [loading, setLoading] = useState(true);

    const mainApi = async () => {
      setLoading(true); // api 호출 전에 true로 변경하여 로딩화면 띄우기
        try {
          const response = await fetch(`api url`, {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(),
          });

          const result = await response.json();
          console.log('mainData', result);
          setLoading(false); // api 호출 완료 됐을 때 false로 변경하려 로딩화면 숨김처리
        } catch (error) {
          window.alert(error);
        }
    }; 

    useEffect(() => {
      mainApi();
    }, []);

    useEffect(() => {
      let textPercentage = Math.floor((headingData.length * imageFrame) / totalFrames ) // 0 ~ 4
      if (textPercentage < headingData.length) setTextIndex(textPercentage)
      console.log(imageFrame)
    }, [imageFrame])

    return (
      <>
        <Global styles={globalStyle} />

        {/* {loading ? <Loading /> : null} */}
        
        <Main ref={elementRef}>
          <MainInner imageframe={imageFrame}>
            <BackgroundImg1 total={totalFrames} index={imageFrame}></BackgroundImg1>
            <BackgroundImg2 total={totalFrames} index={imageFrame}></BackgroundImg2>
            <BackgroundImg3 total={totalFrames} index={imageFrame}></BackgroundImg3>
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