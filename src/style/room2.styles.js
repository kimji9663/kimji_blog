import styled from "@emotion/styled"
import { keyframes } from "@emotion/react"
import { mq } from '../constants/index'

export const Main = styled.div(() => ({
    position: 'relative',
    width: '100%',
    height: '800vh',
}))

export const MainInner = styled.div(() => ({
    position: 'sticky',
    top: 0,
    width: '100%',
    height: '100vh',
}))

export const BackgroundImg1 = styled.div(({ total, index }) => ({
    position: 'absolute',
    top: index <= total/1.19 ? `calc(${index}% - 150px)` : `calc(${total/1.19}% - 150px)`,
    left: index <= total/2 ? `calc(${index}% - 150px)` : (index <= total/1.19 ? `calc(${total - index}% - 150px)` : `calc(${total - total/1.19}% - 150px)`),
    zIndex: 1,
    width: '200px',
    height: '300px',
    borderRadius: '100px',
    backgroundColor: 'rgb(255 212 189 / 40%)',
    transform: `translate3d(0, 0, 0) rotateZ(${index * 10}deg) scale3d(1, 1, 1)`,
    animation: `${slime} 3s linear infinite`,
    transition: 'all 01s ease-in-out',
}))

export const BackgroundImg2 = styled.div(({ total, index }) => ({
    position: 'absolute',
    top: index <= total/2 ? `calc(${index}% - 30px)` : `calc(${total - index}% - 30px)`,
    left: index <= total/1.19 ? `calc(${index}% + 120px)` : `calc(${total/1.19}% + 120px)`,
    zIndex: 1,
    width: '200px',
    height: '170px',
    borderRadius: '90px',
    backgroundColor: 'rgb(255 214 227 / 50%)',
    transform: `translate3d(0, 0, 0) rotateZ(${index * 5}deg) scale(${1 + index/100})`,
    animation: `${slime} 3s linear infinite`,
    transition: 'all 01s ease-in-out',
}))

export const BackgroundImg3 = styled.div(({ total, index }) => ({
    position: 'absolute',
    top: index <= total/2 ? `calc(90% - ${index}%)` : `calc(90% - ${total - index}%)`,
    right: `calc(${index}%)`,
    zIndex: 1,
    width: '500px',
    height: '500px',
    borderRadius: '250px',
    backgroundColor: 'rgb(245 213 255 / 40%)',
    transform: `translate3d(0, 0, 0) rotateZ(-${index * 5}deg) scale(1)`,
    animation: `${slime} 3s linear infinite`,
    transition: 'all 01s ease-in-out',
}))

export const VideoHeading = styled.div(({ index }) => mq({
    display: 'flex',
    background: [index === 0 ? 'linear-gradient(to bottom, #362c1b, #000 30%, #000)' : (index === 1 ? 'linear-gradient(to bottom, #313939, #000 30%, #000)' : (index === 2 ? 'linear-gradient(to bottom, #48321f, #000 30%, #000)' : 'linear-gradient(to bottom, #063224, #000 30%, #000)')),
    index === 0 ? 'linear-gradient(to bottom, #362c1b, #000 30%, #000)' : (index === 1 ? 'linear-gradient(to bottom, #313939, #000 30%, #000)' : (index === 2 ? 'linear-gradient(to bottom, #48321f, #000 30%, #000)' : 'linear-gradient(to bottom, #063224, #000 30%, #000)')),
    index === 0 ? 'linear-gradient(to right, #362c1b, #000 50%, #000)' : (index === 1 ? 'linear-gradient(to right, #313939, #000 50%, #000)' : (index === 2 ? 'linear-gradient(to right, #48321f, #000 50%, #000)' : 'linear-gradient(to right, #063224, #000 50%, #000)'))],
    width: '100%',
    height: '100%',
    '& > img': {
        width: '100%',
    },
}))

export const HeaddingWrap = styled.div(({ index, datalength }) => mq({
    position: 'absolute',
    top: 0,
    width: '100%',
    height: '100%',
    background: 'url(https://parspng.com/wp-content/uploads/2022/10/windowpng.parspng.com-5.png) center repeat-x',
    //background: `url(${require("../images/window01.png")}) center repeat-x`,
    backgroundSize: 'auto 100%',
    '& > div': {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'absolute',
        top: `-${100 * index}%`,
        left: 0,
        zIndex: 1,
        width: '100%',
        height: `${100 * datalength}%`,
    }
}))

export const HeaddingText = styled.div(({ section, index }) => mq({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    boxShadow: ['0px 14px 20px #00000080', '0px 14px 20px #00000080', '10px 0px 20px #00000080'],
    opacity: section === index ? 1 : 0,

    '& > h1': {
        flex: '1 1 auto',
        order: index % 2 === 1 ? 2 : 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        fontSize: ['40px', '60px', '80px'],
        textAlign: 'center',
        opacity: section === index ? 1 : 0,
        top: section === index ? '-50px' : '50px',
        transition: 'opacity, top 1s ease',
        animation: index === 3 ? `${flicker} 12s linear infinite` : 'none',
        //color: ['green', 'gray', '#64f0aa'],
        color: '#fff',
        textFillColor: 'transparent',
        background: index === 0 ? 'url(https://thumbs.gfycat.com/CandidHappyBlackbuck-size_restricted.gif) repeat' : (index === 1 ? '#dddddd' : (index === 2 ? '#ffbc85' : '#64f0aa')),
        backgroundClip: 'text',
        backgroundPosition: '50% 73%',
    },
    '& > div': {
        flex: '1 1 auto',
        order: index % 2 === 1 ? 1 : 2,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '50%',
        backgroundColor: '#fff'
    }
}))

export const InfiniteMarquee = styled.div(({}) => mq({
    position: 'absolute',
    top: 0,
    padding: '0.5rem 0',
    width: '100%',
    overflow: 'hidden',
    color: '#fff',
    fontSize: '1.6rem',
    whiteSpace: 'nowrap',
    background: '#000',
    transform: 'matrix3d(1, -0.1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)',
    '& > span': {
        display: 'inline-block',
        marginRight: '1rem',
        transform: 'translate3d(-289px, 0px, 0px)',
        animation: `${marquee} 5s linear infinite`,
    },
}))

/*** ANIMATION ***/
export const slime = keyframes`
    0% {border-radius: 36% 64% 63% 37%/54% 60% 44% 48%}
    25% {border-radius: 73% 35% 55% 60%/65% 44% 62% 56%}
    50% {border-radius: 75% 35% 35% 72%/58% 51% 56% 49%}
    75% {border-radius: 71% 52% 69% 31%/69% 52% 79% 58%}
    100% {border-radius: 36% 64% 63% 37%/54% 60% 44% 48%}
`

export const flicker = keyframes`
    0% {opacity: 0.9}
    9% {opacity: 0.3}
    12% {opacity: 1}
    20% {opacity: 0.5}
    25% {opacity: 0.3}
    30% {opacity: 1}
    66% {opacity: 1}
    70% {opacity: 0.7}
    72% {opacity: 0.4}
    77% {opacity: 0.9}
    100% {opacity: 0.9}
`

export const marquee = keyframes`
    0% {transform: translate3d(-289px, 0px, 0px)}
    100% {transform: translate3d(0px, 0px, 0px)}
`