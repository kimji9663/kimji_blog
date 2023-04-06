import React, { useEffect, useState, useRef } from "react"
import Seo from "../components/seo"
import { Global, css } from "@emotion/react"
import { useClientWidthHeight } from "../components/useClientWidthHeight"

// css
import { Main } from "./room.styles"

class Card {
  constructor() {
  }
}

const squares = [];
const rectAngle = (index, length) => {
  let per = 360 / length * index;
  let result = per * Math.PI / 360;
  return result;
}

const RotateAnimation = () => {
  const mainRef = useRef(null)
  const canvasRef = useRef(null)
  const clientRect = useClientWidthHeight(mainRef)
  const canvasWidth = clientRect.width
  const canvasHeight = clientRect.height
  console.log('111')

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')

    const center = {
      size: 500,
      x: canvasWidth / 2,
      y: canvasHeight / 2,
    }

    canvas.style.width = `${canvasWidth}px`
    //canvas.style.height = `${center.size}px`

    ctx.fillStyle = "#f79c9c";

    for (let i = 0; i < 6; i++) {
      let angle = rectAngle(i, squares.length);
      //squares[i] = new Card(angle);
      ctx.beginPath();
      //ctx.moveTo(100, 100);
      //ctx.clearRect(0, 0, 110, 110, [0, 0, 0, 0]);
      ctx.roundRect(center.x, center.y, 50, 50, [10, 10, 10, 10]);
      ctx.rotate(angle);
      ctx.fill();
      //console.log(squares)
    }
    console.log('333')
  }, [])

  console.log('222')

  return (
    <Main ref={mainRef}>
      <canvas 
      ref={canvasRef}
      />
    </Main>
  )
}

const Example = () => {
  const mainRef = useRef(null)
  const clientRect = useClientWidthHeight(mainRef)
  const canvasWidth = clientRect.width
  const canvasHeight = clientRect.height

  return (
    <Main ref={mainRef}>
      <canvas
        canvaswidth={canvasWidth}
        canvasheight={canvasHeight}
      />
    </Main>
  )
}


const Cards = ({ data, location }, props) => {

  return (
    <>
      <Seo title="CARDS" />
      <RotateAnimation />
    </>
  )
    
}

export default Cards