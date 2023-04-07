import React, { useRef } from "react"
import Seo from "../components/seo"
import { Global, css } from "@emotion/react"
import { useClientWidthHeight } from "../components/useClientWidthHeight"
import { useCanvas } from "../components/useCanvas"

// css
import { Main } from "./cards.styles"

const globalStyle = css({
  'body': {
    margin: 0,
    padding: 0,
    overflow: 'hidden',
  },
})


class Card {
  constructor(canvaswidth, canvasheight) {
    this.centerX = canvaswidth / 2
    this.centerY = canvasheight / 2
  }
  drawCard(ctx) {
    //const squares = [];
    
    // const rectAngle = (index, length) => {
    //   let per = 360 / length * index;
    //   let result = per * Math.PI / 360;
    //   return result;
    // }

    // for (let i = 0; i < 6; i++) {
    //   let angle = rectAngle(i, squares.length)
    //   //squares[i] = new Card(angle)
    //   ctx.beginPath()
    //   ctx.fillStyle = "#f79c9c"
    //   ctx.clearRect(0, 0, 110, 110, [0, 0, 0, 0])
    //   ctx.roundRect(this.centerX, this.centerY, 50, 50, [10, 10, 10, 10])
    //   ctx.rotate(angle)
    //   ctx.fill()
    //   //console.log(squares)
    // }

    ctx.beginPath()
    ctx.fillStyle = "#f79c9c"
    ctx.roundRect(this.centerX, this.centerY, 200, 130, [20, 20, 20, 20])
    ctx.fill()
  }
}


const RotateAnimation = ({ canvaswidth, canvasheight }) => {
  const fillBackground = (ctx) => {
    ctx.fillStyle = 'rgb(31, 31, 36)'
    ctx.fillRect(0, 0, canvaswidth, canvasheight)
  }
  const card = new Card(canvaswidth, canvasheight)
  const animate = (ctx) => {
    fillBackground(ctx)
    card.drawCard(ctx)
  }
  const canvasRef = useCanvas(canvaswidth, canvasheight, animate)

  return (
    <canvas ref={canvasRef} />
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
      <Global styles={globalStyle} />
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