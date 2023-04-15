import { useEffect, useState } from "react";

const useElementPosition = (element, frames, initialValue) => {
    const [position, setPosition] = useState(initialValue || 1)

    useEffect(() => {
        window.addEventListener('scroll', getFrameRates)
        return () => window.removeEventListener('scroll', getFrameRates)
    }, [])

    function getFrameRates(){
        let rect = element.current.getBoundingClientRect();
        let mainVal = rect.top <= 0 ? Math.abs(rect.top) : 0;
        let height = rect.height - (window.innerHeight * 3);
        let finalPercentage = Math.floor((frames * mainVal) / window.innerHeight); // 1 ~ 40
        setPosition(finalPercentage <= frames ? finalPercentage : frames);
        console.log(frames, mainVal, rect.height, finalPercentage) //finalPercentage가 100%로면 40 이어야하는데 122가 넘어감. 이 문제 해결해야함
    }

    return position || 1
}

export default useElementPosition