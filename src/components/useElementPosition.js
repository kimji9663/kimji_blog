import { useEffect, useState } from "react";

const useElementPosition = (element, frames, initialValue) => {
    const [position, setPosition] = useState(initialValue || 1)

    useEffect(() => {
        window.addEventListener('scroll', getFrameRates)
        return () => window.removeEventListener('scroll', getFrameRates)
    })

    function getFrameRates(){
        let rect = element.current.getBoundingClientRect();
        let mainVal = rect.top <= 0 ? Math.abs(rect.top) : 0;
        let height = rect.height - window.innerHeight;
        let finalPercentage = Math.floor((frames * mainVal) / height); // 1 ~ 144
        setPosition(finalPercentage <= frames ? finalPercentage : frames);
        //console.log(position, finalPercentage)
    }

    return position || 1
}

export default useElementPosition