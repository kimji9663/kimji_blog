import React, { useRef, useState } from "react"
import Seo from "../components/seo"
import { Global, css } from "@emotion/react"
import { useClientWidthHeight } from "../components/useClientWidthHeight"
import { useCanvas } from "../components/useCanvas"

// img
import img_card_1 from '../images/card01.png'
import img_card_2 from '../images/card02.png'
import img_card_3 from '../images/card03.png'
import img_card_4 from '../images/card04.png'
import img_card_5 from '../images/card05.png'
import img_card_6 from '../images/card06.png'

// css
import { Main } from "./cards.styles"

const globalStyle = css({
  'body': {
    margin: 0,
    padding: 0,
    overflow: 'hidden',
  },
})

const cardImages = [img_card_1, img_card_2, img_card_3, img_card_4, img_card_5, img_card_6]

class Card {
  constructor(i, canvaswidth, canvasheight) {
    this.radian = i * 6.28
    this.Rotate = (i+1) * 60
    this.CENTER_LINE_X = canvaswidth / 2
    this.CENTER_LINE_Y = canvasheight / 2
    this.VELOCITY = 0.005
    this.AMPLITUDE = canvasheight / 3
    this.cardCenterX = this.AMPLITUDE * Math.cos(this.radian) + this.CENTER_LINE_X
    this.cardCenterY = this.AMPLITUDE * Math.sin(this.radian) + this.CENTER_LINE_Y
    this.index = i
  }

  drawCard(ctx) {
    this.radian += this.VELOCITY
    
    const image = new Image()
    image.src = cardImages[this.index] 
    const pattern = ctx.createPattern(image, 'repeat')
    

    ctx.beginPath()
    //ctx.fillStyle = `rgba(226 174 174 / ${this.index + 1}0%)`
    ctx.fillStyle = pattern
    ctx.translate(this.CENTER_LINE_X, this.CENTER_LINE_Y)
    ctx.rotate(Math.PI / 180 * this.Rotate)
    ctx.rotate(this.radian)
    ctx.translate(-this.CENTER_LINE_X, -this.CENTER_LINE_Y)
    ctx.roundRect(this.cardCenterX - 100, this.cardCenterY - 65, 200, 130, [20, 20, 20, 20])
    ctx.setTransform(1, 0, 0, 1, 0, 0)
    ctx.fill()
  }
}


const RotateAnimation = ({ canvaswidth, canvasheight }) => {
  const fillBackground = (ctx) => {
    ctx.fillStyle = 'rgb(139 139 208)'
    ctx.fillRect(0, 0, canvaswidth, canvasheight)

    ctx.beginPath()
    ctx.strokeStyle = 'rgba(255 255 255 / 20%)'
    ctx.arc(canvaswidth / 2, canvasheight / 2, canvasheight / 3, 0, 2 * Math.PI)
    ctx.stroke()
  }

  let cards = []
  const initCard = () => {
    const CARD_NUMBER = 6

    for (let i = 0; i < CARD_NUMBER; i++){
      const card = new Card(i, canvaswidth, canvasheight)
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