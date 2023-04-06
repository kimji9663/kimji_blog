import React, { useEffect, useState, useRef } from "react"
import Seo from "../components/seo"
import { Global, css } from "@emotion/react"
import { useClientWidthHeight } from "../components/useClientWidthHeight"
import { useCanvas } from "../components/useCanvas"

// css
import { Main } from "./room.styles"

const RotateAnimation = ({ canvaswidth, canvasheight }) => {
  const fillBackground = (ctx) => {
    ctx.fillStyle = 'rgb(31, 31, 36)'
    ctx.fillRect(0, 0, canvaswidth, canvasheight)
  }
  const canvasRef = useCanvas(canvaswidth, canvasheight, fillBackground)

  return (
    <canvas 
      ref={canvasRef}
    />
  )
}


const Cards = () => {
  const mainRef = useRef(null)
  const clientRect = useClientWidthHeight(mainRef)
  const canvasWidth = clientRect.width
  const canvasHeight = clientRect.height

  return (
    <>
      <Seo title="CARDS" />
      <Main ref={mainRef}>
        <RotateAnimation
          canvaswidth={canvasWidth}
          canvasheight={canvasHeight}
        />
      </Main>
    </>
  )
    
}

export default Cards