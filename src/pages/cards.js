import React, { useEffect, useState, useRef } from "react"
import Seo from "../components/seo"
import { Global, css } from "@emotion/react"

// css
import {  } from "./room.styles"

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
  const canvasRef = useRef(null);
  console.log('111')

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')

    for (let i = 0; i < 6; i++) {
      let angle = rectAngle(i, squares.length);
      //squares[i] = new Card(angle);
      ctx.fillStyle = "#f79c9c";
      ctx.beginPath();
      ctx.clearRect(0, 0, 110, 110, [0, 0, 0, 0]);
      ctx.roundRect(0, 0, 110, 110, [10, 10, 10, 10]);
      ctx.rotate(angle);
      ctx.fill();
      //console.log(squares)
    }
    console.log('333')
  }, [])

  for (let i = 0; i < 6; i++) {
    let angle = rectAngle(i, squares.length);
    squares[i] = new Card(angle);
    console.log(squares)
  }
  console.log('222')

  return <canvas ref={canvasRef} />
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