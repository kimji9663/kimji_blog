import React from 'react'
import styled from '@emotion/styled'
import { Global, css, keyframes } from "@emotion/react"

const fadeOut = keyframes`
  0% {opacity: 1}
  100% {opacity: 0}
`
const Background = styled.div(({ delay }) => ({
  position: 'fixed',
  width: '100vw',
  height: '100vh',
  top: 0,
  left: 0,
  background: '#000000',
  zIndex: 999,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'opacity 1s linear',
  animation: `1000ms linear ${delay}ms forwards ${fadeOut}`, // 2. 그 다음에 배경 사라짐
  '& > p': {
    transition: 'opacity 1s linear',
    animation: `1000ms linear ${delay - 1000}ms forwards ${fadeOut}`, // 1. 이미지 먼저 사라지고
  }
}))

const LoadingText = styled.p(({ delay }) => ({
  textAlign: 'center',
}))

const Loading = (loadingTime) => {
  const delayTime = loadingTime.time - 1000 // 로딩화면 지속시간에서 사라짐 효과 보여줄 1초를 뺌 

  return (
    <>
      <Background delay={delayTime}>
        <LoadingText delay={delayTime}>Loading...</LoadingText>
        <p>
          <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" style={{ margin: 'auto', display: 'block' }} width="200px" height="200px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
            <g transform="rotate(0 50 50)">
              <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#fe718d">
                  <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.9166666666666666s" repeatCount="indefinite"></animate>
              </rect>
            </g>
            <g transform="rotate(30 50 50)">
              <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#fe718d">
                  <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.8333333333333334s" repeatCount="indefinite"></animate>
              </rect>
            </g>
            <g transform="rotate(60 50 50)">
              <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#fe718d">
                  <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.75s" repeatCount="indefinite"></animate>
              </rect>
            </g>
            <g transform="rotate(90 50 50)">
              <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#fe718d">
                  <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.6666666666666666s" repeatCount="indefinite"></animate>
              </rect>
            </g>
            <g transform="rotate(120 50 50)">
              <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#fe718d">
                  <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.5833333333333334s" repeatCount="indefinite"></animate>
              </rect>
            </g>
            <g transform="rotate(150 50 50)">
              <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#fe718d">
                  <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.5s" repeatCount="indefinite"></animate>
              </rect>
            </g>
            <g transform="rotate(180 50 50)">
              <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#fe718d">
                  <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.4166666666666667s" repeatCount="indefinite"></animate>
              </rect>
            </g>
            <g transform="rotate(210 50 50)">
              <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#fe718d">
                  <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.3333333333333333s" repeatCount="indefinite"></animate>
              </rect>
            </g>
            <g transform="rotate(240 50 50)">
              <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#fe718d">
                  <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.25s" repeatCount="indefinite"></animate>
              </rect>
            </g>
            <g transform="rotate(270 50 50)">
              <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#fe718d">
                  <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.16666666666666666s" repeatCount="indefinite"></animate>
              </rect>
            </g>
            <g transform="rotate(300 50 50)">
              <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#fe718d">
                  <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.08333333333333333s" repeatCount="indefinite"></animate>
              </rect>
            </g>
            <g transform="rotate(330 50 50)">
              <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#fe718d">
                  <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="0s" repeatCount="indefinite"></animate>
              </rect>
            </g>
          </svg>
        </p>
      </Background>
    </>
  )
}

export default Loading