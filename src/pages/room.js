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
import { Main, MainInner, HeaddingText, HeaddingWrap, Video } from "./room.styles"

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

// const VideoScrollAnimation = () => {
//   const videoRef = useRef(null);

//   const handleScroll = () => {
//     const scrollPosition = useElementPosition(videoRef, 100, 1)
//     videoRef.current.currentTime = scrollPosition;
//     requestAnimationFrame(handleScroll);
//     //console.log(scrollPosition)
//   };

//   useEffect(() => {
//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <div>
//       <video ref={videoRef} autobuffer="autobuffer" preload="preload">
//         <source type="video/mp4; codecs=&quot;avc1.42E01E, mp4a.40.2&quot;" src="https://www.apple.com/media/us/mac-pro/2013/16C1b6b5-1d91-4fef-891e-ff2fc1c1bb58/videos/macpro_main_desktop.mp4"></source>
//       </video>
//     </div>
//   );
// };

const Room = ({ data, location }, props) => {
    //const siteTitle = data.site.siteMetadata?.title || `Title`
    const [textIndex, setTextIndex] = useState(0)
    const elementRef = useRef(null)
    const videoRef = useRef(null)
    const totalFrames = 50
    const imageFrame = useElementPosition(elementRef, totalFrames, 1)

    const videoScroll = () => {
      const scrollPosition = imageFrame
      videoRef.current.currentTime = scrollPosition;
    };


    // set loading
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
      videoScroll(); // video scroll
      //console.log(imageFrame)
    }, [imageFrame])



    return (
      <>
        <Global styles={globalStyle} />
        {/* {loading ? <Loading /> : null} */}
        
          <Main ref={elementRef}>
            <MainInner imageframe={imageFrame}>
              <HeaddingWrap index={textIndex} datalength={headingData.length}>
                <div>
                  {headingData?.map(({headding}, i) => {
                    return (
                      <HeaddingText key={i} section={i} index={textIndex}>
                        <h1>{headding}</h1>
                        {/* <div>IMAGE AREA</div> */}
                      </HeaddingText>
                    )
                  })}
                </div>
                <Video ref={videoRef} autobuffer="autobuffer" preload="preload">
                  <source type="video/mp4; codecs=&quot;avc1.42E01E, mp4a.40.2&quot;" src="https://www.apple.com/media/us/mac-pro/2013/16C1b6b5-1d91-4fef-891e-ff2fc1c1bb58/videos/macpro_main_desktop.mp4"></source>
                </Video>
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