import { useEffect, useState } from "react";

const useElementPosition = (element, frames, initialValue) => {
    const [position, setPosition] = useState(initialValue || 0)

    useEffect(() => {
        window.addEventListener('scroll', getFrameRates)
        return () => window.removeEventListener('scroll', getFrameRates)
    }, [])

    function getFrameRates(){
        let rect = element.current.getBoundingClientRect()
        let mainVal = rect.top <= 0 ? Math.abs(rect.top) : 0
        let height = rect.height - window.innerHeight
        let finalPercentage = (frames / 10 * mainVal) / height // 1 ~ 40
        setPosition(finalPercentage <= frames ? finalPercentage : frames)
        //console.log(finalPercentage, mainVal, rect.height, window.innerHeight)
    }

    return position || 0
}

export default useElementPosition