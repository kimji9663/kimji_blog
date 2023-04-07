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
  constructor(canvaswidth, canvasheight, i) {
    this.centerX = canvaswidth / 2
    this.centerY = canvasheight / 2
    this.radian = i * 0.38
    this.VELOCITY = 0.005
  }
  drawCard(ctx) {
    const sin = Math.sin(Math.PI / 4)
    const cos = Math.cos(Math.PI / 4)
    this.radian += this.VELOCITY
    ctx.translate(500, 500)

    // for (let i = 0; i < 6; i++) {
    //   //ctx.beginPath()
    //   ctx.fillStyle = "#f79c9c"
    //   ctx.roundRect(0, 0, 200, 10, [20, 20, 20, 20])
    //   ctx.transform(cos, sin, -sin, cos, 0, 0)
    //   ctx.fill()
    // }

    ctx.beginPath()
    ctx.fillStyle = "#f79c9c"
    //ctx.clearRect(0, 0, 200, 10)
    ctx.roundRect(0, 0, 200, 10, [20, 20, 20, 20])
    ctx.transform(cos, sin, -sin, cos, 0, 0)
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
    ctx.clearRect(0, 0, canvaswidth, canvasheight)

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