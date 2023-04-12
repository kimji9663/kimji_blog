import React, { useRef, useState } from "react"
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
  constructor(CARD_GAP, i, canvaswidth, canvasheight) {
    //this.cardCenterX = CARD_GAP * i
    this.radian = i * 6.28
    this.Rotate = (i+1) * 60
    this.CENTER_LINE_X = canvaswidth / 2
    this.CENTER_LINE_Y = canvasheight / 2
    this.VELOCITY = 0.001
    this.AMPLITUDE = canvasheight / 3
    this.CARD_RADIUS = canvaswidth / 600 < 4 ? 4 : canvaswidth / 600
    this.cardCenterX = this.AMPLITUDE * Math.cos(i * 6.28) + this.CENTER_LINE_X
    this.cardCenterY = this.AMPLITUDE * Math.sin(i * 6.28) + this.CENTER_LINE_Y
    this.sin = Math.sin(Math.PI / 6)
    this.cos = Math.cos(Math.PI / 6)
    console.log(i.length)
  }

  drawCard(ctx) {
    //this.radian += this.VELOCITY
    //this.cardCenterXX = this.AMPLITUDE * Math.cos(this.radian) + this.CENTER_LINE_X
    //this.cardCenterYY = this.AMPLITUDE * Math.sin(this.radian) + this.CENTER_LINE_Y

    ctx.beginPath()
    ctx.fillStyle = 'rgb(226 174 174)'
    //ctx.rotate(Math.PI / 180 * 0.015)
    // for(let i = 0; i < this.card_number; i++){
    //   ctx.translate(this.CENTER_LINE_X, this.CENTER_LINE_Y)
    //   ctx.rotate(Math.PI / 180 * this.Rotate)
    //   ctx.translate(-this.CENTER_LINE_X, -this.CENTER_LINE_Y)
    //   ctx.roundRect(this.cardCenterX - 25, this.cardCenterY - 100, 50, 200, [20, 20, 20, 20])
    // }
    ctx.translate(this.CENTER_LINE_X, this.CENTER_LINE_Y)
    ctx.rotate(Math.PI / 180 * this.Rotate)
    ctx.translate(-this.CENTER_LINE_X, -this.CENTER_LINE_Y)
    ctx.roundRect(this.cardCenterX - 25, this.cardCenterY - 100, 50, 200, [20, 20, 20, 20])
    ctx.setTransform(1, 0, 0, 1, 0, 0)
    ctx.fill()

  }
}


const RotateAnimation = ({ canvaswidth, canvasheight }) => {
  const fillBackground = (ctx) => {
    ctx.fillStyle = 'rgb(139 139 208)'
    ctx.fillRect(0, 0, canvaswidth, canvasheight)

    ctx.beginPath()
    ctx.strokeStyle = 'blue'
    ctx.arc(canvaswidth / 2, canvasheight / 2, canvasheight / 3, 0, 2 * Math.PI)
    ctx.stroke()
  }

  let cards = []
  const initCard = () => {
    const CARD_NUMBER = 6
    const CARD_GAP = canvaswidth / CARD_NUMBER

    for (let i = 0; i < CARD_NUMBER; i++){
      const card = new Card(CARD_GAP, i, canvaswidth, canvasheight)
      cards.push(card)
    }
  }
  if (canvaswidth !== 0 && canvasheight !== 0) {
    initCard()
  }

  const animate = (ctx) => {
    fillBackground(ctx)
    //ctx.clearRect(0, 0, canvaswidth, canvasheight)

    for (let i = 0; i < cards.length; i++){
      cards[i].drawCard(ctx)
    }
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