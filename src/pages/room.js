import React, { useEffect, useState, useRef } from "react"
import Loading from "../components/loading"
import Seo from "../components/seo"
import { Global, css } from "@emotion/react"
import useElementPosition from '../components/useElementPosition'

// img
import video_room01 from '../images/video_room01.mp4'
//import video_room01 from '../images/sample-low.mp4'

// css
import { Main, MainInner, VideoHeading, HeaddingText, HeaddingWrap, Video } from "./room.styles"

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
  'body.prevent_scroll': {
    overflow: 'hidden',
    touchAction: 'none',
  }
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
    const videoRef = useRef(null)
    const totalFrames = 200
    const videoFrame = useElementPosition(elementRef, totalFrames, 0)
    let scrollPosition = 0

    const videoScroll = () => {
      scrollPosition = videoFrame
      videoRef.current.currentTime = scrollPosition;
      //console.log(videoRef.current.currentTime, scrollPosition)
    };

    const scrollTop = () => {
      window.scrollTo({
          top: scrollPosition,
          behavior: 'smooth',
      });
  };


    // set loading
    const [loading, setLoading] = useState(true);

    // const mainApi = async () => {
    //   setLoading(true); // api 호출 전에 true로 변경하여 로딩화면 띄우기
    //   try {
    //     const response = await fetch(`api url`, {
    //       method: 'POST',
    //       headers: {
    //         Accept: 'application/json',
    //         'Content-Type': 'application/json',
    //       },
    //       body: JSON.stringify(),
    //     });

    //     const result = await response.json();
    //     console.log('mainData', result);
    //     setLoading(false); // api 호출 완료 됐을 때 false로 변경하려 로딩화면 숨김처리
    //   } catch (error) {
    //     window.alert(error);
    //   }
    // }; 

    // useEffect(() => {
    //   mainApi();
    // }, []);


    loading ? document.body.classList = 'prevent_scroll' : document.body.classList = ''

    useEffect(() => {
      let textPercentage = Math.floor((headingData.length * videoFrame) / totalFrames * 10 ) // 0 ~ 4
      textPercentage < headingData.length ? setTextIndex(textPercentage) : setTextIndex(3)
      videoScroll(); // video scroll
      console.log('###', videoFrame, totalFrames, textPercentage)
    }, [videoFrame])


    useEffect(() => {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
      scrollTop();
    }, [])


    return (
      <>
        <Seo title="ROOM" />
        <Global styles={globalStyle} />
        {loading ? <Loading /> : null}
        
        <Main ref={elementRef}>
          <MainInner videoFrame={videoFrame}>
            <VideoHeading index={textIndex}>
              <HeaddingWrap index={textIndex} datalength={headingData.length}>
                <div>
                  {headingData?.map(({headding}, i) => {
                    return (
                      <HeaddingText key={i} section={i} index={textIndex}>
                        <h1>{headding}</h1>
                      </HeaddingText>
                    )
                  })}
                </div>
              </HeaddingWrap>
              <Video>
                <video ref={videoRef} autobuffer="autobuffer" preload="preload">
                  {/* <source type="video/mp4; codecs=&quot;avc1.42E01E, mp4a.40.2&quot;" src="https://www.apple.com/media/us/mac-pro/2013/16C1b6b5-1d91-4fef-891e-ff2fc1c1bb58/videos/macpro_main_desktop.mp4"></source> */}
                  {/* <source type="video/mp4; codecs=&quot;avc1.42E01E, mp4a.40.2&quot;" src="http://www.donhkoland.com/clients/bluesmart/website/test/videoscroll/vide_01.mp4"></source> */}
                  <source type="video/mp4; codecs=&quot;avc1.42E01E, mp4a.40.2&quot;" src={video_room01}></source>
                </video>
              </Video>
            </VideoHeading>
          </MainInner>
        </Main>
        {/* <div>
          fuggjkgh
          <br />
          fuggjkgh
          <br />
          fuggjkgh
          <br />
          fuggjkgh
          <br />
        </div> */}
        {/* <UserButton /> */}
      </>
    )
}

export default Room
