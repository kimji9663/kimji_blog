import React, { useEffect, useState, useRef } from "react"
import Loading from "../components/loading"
import Seo from "../components/seo"
import { Global, css } from "@emotion/react"
import useElementPosition from '../components/useElementPosition'
import "../style/fonts.css"

// css
import { Main, MainInner, VideoHeading, HeaddingText, HeaddingWrap, BackgroundImg1, Invitation, WeddingDay } from "../style/room3.styles"

const globalStyle = css({
  'body': {
    margin: 0,
    padding: 0,
    background: '#ebebec',
    color: '#777',
    fontFamily: 'AritaBuri',
  },
  'body.prevent_scroll': {
    overflow: 'hidden',
    touchAction: 'none',
  }
})

const headingData = [
  {
    headding1: '2024년 2월 3일',
    headding2: '토요일',
  },
  {
    headding1: `오후 1시`,
  },
  {
    headding1: `저희 결혼합니다.`,
  },
  {
    headding1: `김지훈`,
    headding2: `이소연`,
  },
]

const Room2 = () => {
    const [textIndex, setTextIndex] = useState(0)
    const elementRef = useRef(null)
    //const videoRef = useRef(null)
    const totalFrames = 1000
    const videoFrame = Math.floor(useElementPosition(elementRef, totalFrames, 0))
    const getImage = (frame) => (`https://raw.githubusercontent.com/kimji9663/kimji_blog/main/src/images/marriage/${frame.toString().padStart(4, '0')}.png`)
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
                  {headingData?.map(({headding1, headding2}, i) => {
                    return (
                      <HeaddingText key={i} section={i} index={textIndex}>
                        <p className="heading1">{headding1}</p>
                        <p className="heading2">{headding2}</p>
                      </HeaddingText>
                    )
                  })}
                  <BackgroundImg1 index={textIndex}>
                    <div></div>
                  </BackgroundImg1>
                </div>
              </HeaddingWrap>
            </VideoHeading>
          </MainInner>
        </Main>
        <Invitation>
          <p>소중한 분들을 초대합니다.</p>
          <p>사랑이 무엇인지<br />
            누군가 물어왔을 때<br />
            <br />
            순간의 망설임도 없이<br />
            서로를 떠올리던 그 마음으로<br />
            <br />
            저희 둘, 결혼합니다.
          </p>
          <div class="box">
            <em>김영준 · 김영희</em>의 차남 <strong>지훈</strong>
          </div>
          <div class="box">
            <em>이영진 · 박윤화</em>의 장녀 <strong>소연</strong>
          </div>
        </Invitation>
        <WeddingDay>
          <p>The wedding day</p>
        </WeddingDay>
      </>
    )
}

export default Room2
