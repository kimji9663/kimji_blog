import { useRef, useEffect } from "react";

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

export const useCanvas = (canvaswidth, canvasheight, animate) => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')

    const setCanvas = () => {
      const devicePixelRatio = window.devicePixelRatio ?? 1

      if(canvas && ctx) {
        canvas.style.width = canvaswidth + 'px'
        canvas.style.height = canvasheight + 'px'

        canvas.width = canvaswidth * devicePixelRatio
        canvas.height = canvasheight * devicePixelRatio

        ctx.scale(devicePixelRatio, devicePixelRatio)
      }
    }
    setCanvas()

    if (ctx) {
      animate(ctx)
    }

    
    // const center = {
    //   size: 500,
    //   x: canvaswidth / 2,
    //   y: canvasheight / 2,
    // }

    // ctx.fillStyle = "#f79c9c";

    // for (let i = 0; i < 6; i++) {
    //   let angle = rectAngle(i, squares.length);
    //   //squares[i] = new Card(angle);
    //   ctx.beginPath();
    //   //ctx.moveTo(100, 100);
    //   //ctx.clearRect(0, 0, 110, 110, [0, 0, 0, 0]);
    //   ctx.roundRect(center.x, center.y, 50, 50, [10, 10, 10, 10]);
    //   ctx.rotate(angle);
    //   ctx.fill();
    //   //console.log(squares)
    // }
  }, [canvaswidth, canvasheight])

  return canvasRef
}