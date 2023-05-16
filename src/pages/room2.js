import React, { useEffect, useState, useRef } from "react"
import Loading from "../components/loading"
import Seo from "../components/seo"
import { Global, css } from "@emotion/react"
import useElementPosition from '../components/useElementPosition'

// css
import { Main, MainInner, VideoHeading, DoorOpening, HeaddingText, HeaddingWrap, InfiniteMarquee } from "../style/room2.styles"

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
    headding: `1989 11 25`
  },
  {
    headding: `This is my birthday.`
  },
  {
    headding: `Cake, Candles, Firecrackers!`
  },
  {
    headding: `It's my best day.`
  },
]

const Room2 = () => {
    const [textIndex, setTextIndex] = useState(0)
    const elementRef = useRef(null)
    //const videoRef = useRef(null)
    const totalFrames = 410
    const videoFrame = Math.floor(useElementPosition(elementRef, totalFrames, 0))
    const getImage = (frame) => (`https://raw.githubusercontent.com/kimji9663/kimji_blog/main/src/images/cloud/hero-desktop.8e197ed_out${frame.toString().padStart(4, '0')}.jpg`)
    let scrollPosition = 0

    const scrollTop = () => {
      window.scrollTo({
          top: scrollPosition,
          behavior: 'smooth',
      })
    }

    // set loading
    const [loading, setLoading] = useState(true)
    const loadingTime = 3000

    useEffect(() => {
      let textPercentage = Math.floor((headingData.length * videoFrame) / totalFrames * 10 ) // 0 ~ 4
      textPercentage < headingData.length ? setTextIndex(textPercentage) : setTextIndex(3)
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
              <img src={getImage(videoFrame)} alt=""/>
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
              <DoorOpening videoFrame={videoFrame} totalFrames={totalFrames}>
                <div className="left"></div>
                <div className="right"></div>
              </DoorOpening>
            </VideoHeading>
            <InfiniteMarquee>
              <span>Happy birthday to you!</span>
              <span>Happy birthday to you!</span>
              <span>Happy birthday to you!</span>
              <span>Happy birthday to you!</span>
              <span>Happy birthday to you!</span>
            </InfiniteMarquee>
          </MainInner>
        </Main>
        <div>
            <p>Happy birthday to you!</p>
            <p>Happy birthday to you!</p>
            <p>Happy birthday to you!</p>
            <p>Happy birthday to you!</p>
        </div>
      </>
    )
}

export default Room2
