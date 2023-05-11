import React, { useEffect, useState, useRef } from "react"
import Loading from "../components/loading"
import Seo from "../components/seo"
import { Global, css } from "@emotion/react"
import useElementPosition from '../components/useElementPosition'

// img
import video_room01 from '../images/video_room01.mp4'
//import video_room01 from '../images/sample-low.mp4'

// css
import { Main, MainInner, VideoHeading, HeaddingText, HeaddingWrap, Video } from "../style/room.styles"

//const ConButton = Container.withComponent("button")

const globalStyle = css({
  'body': {
    margin: 0,
    padding: 0,
    background: '#000',
    color: '#777',
  },
  'body.prevent_scroll': {
    overflow: 'hidden',
    touchAction: 'none',
  }
})

const headingData = [
  {
    headding: `Let me introduce My room.`
  },
  {
    headding: `This is my desktop.`
  },
  {
    headding: `And my friend Reo!`
  },
  {
    headding: `Here's all things of my favorites.`
  },
]

const Room2 = () => {
    const [textIndex, setTextIndex] = useState(0)
    const elementRef = useRef(null)
    //const videoRef = useRef(null)
    const totalFrames = 200
    const videoFrame = Math.floor(useElementPosition(elementRef, totalFrames, 0))
    const getImage = (frame) => (`https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/01-hero-lightpass/${frame.toString().padStart(4, '0')}.jpg`)
    let scrollPosition = 0

    // const videoScroll = (datalength) => {
    //   scrollPosition = videoFrame / datalength
    //   videoRef.current.currentTime = scrollPosition
    //   //console.log(videoRef.current.currentTime, scrollPosition)
    // }

    const scrollTop = () => {
      window.scrollTo({
          top: scrollPosition,
          behavior: 'smooth',
      })
    }

    // function videoToBlob(localImage) {
    //   let reader = new  FileReader()
    //   reader.readAsArrayBuffer(localImage)

    //   let buffer = reader.result
    //   let videoBlob = new Blob([new Uint8Array(buffer)], { type: 'video/mp4' })
    //   let url = window.URL.createObjectURL(videoBlob)
    //   console.log(url)
    // }

    // useEffect(() => {
    //   videoToBlob(video_room01)
    // }, [])

    // set loading
    const [loading, setLoading] = useState(true)
    const loadingTime = 3000

    useEffect(() => {
      let textPercentage = Math.floor((headingData.length * videoFrame) / totalFrames * 10 ) // 0 ~ 4
      textPercentage < headingData.length ? setTextIndex(textPercentage) : setTextIndex(3)
      //videoScroll(headingData.length) // video scroll
      console.log('###', videoFrame, totalFrames, textPercentage)
    }, [videoFrame])


    useEffect(() => {
      setTimeout(() => {
        setLoading(false)
      }, loadingTime)
      scrollTop()
    }, [])


    return (
      <>
        <Seo title="ROOM2" />
        <Global styles={globalStyle} />
        {loading ? <Loading time={loadingTime} /> : null}
        
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
              <img src={getImage(videoFrame)} alt=""/>
              {/* <Video index={textIndex}>
                <video ref={videoRef} autobuffer="autobuffer" preload="preload">
                  <source type="video/mp4; codecs=&quot;avc1.42E01E, mp4a.40.2&quot;" src={video_room01}></source>
                </video>
              </Video> */}
            </VideoHeading>
          </MainInner>
        </Main>
      </>
    )
}

export default Room2
