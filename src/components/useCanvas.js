import { useRef, useEffect } from "react";

export const useCanvas = (canvaswidth, canvasheight, animate) => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')

    const setCanvas = () => {
      const devicePixelRatio = window.devicePixelRatio ?? 1

      if(canvas && ctx) {
        //canvas.style.width = canvaswidth + 'px'
        //canvas.style.height = canvasheight + 'px'

        canvas.width = canvaswidth * devicePixelRatio
        canvas.height = canvasheight * devicePixelRatio

        ctx.scale(devicePixelRatio, devicePixelRatio)
      }
      console.log(devicePixelRatio)
    }
    setCanvas()

    let requestId = 0
    const requestAnimation = () => {
      requestId = window.requestAnimationFrame(requestAnimation)

      if (ctx) {
        animate(ctx)
      }
    }
    requestAnimation()

    // 컴포넌트 unmount시 animate()함수 호출 중단
    // (이 처리를 하지 않으면 다른페이지로 이동 후에도 계속 animate()함수를 호출하여 메모리 누수 발생 됨)
    return () => {
      window.cancelAnimationFrame(requestId)
    }

  }, [canvaswidth, canvasheight, animate])

  return canvasRef
}