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
    overflow: 'hidden',
}))

export const BackgroundImg1 = styled.div(({ index }) => ({
    display: index === 0 ? 'block' : 'none',
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: '-200px',
    marginLeft: '-200px',
    width: '400px',
    height: '300px',
    zIndex: 1,
    opacity: 0,
    animation: `${fadeInScale} 3s linear forwards 4s`,
    '& > div': {
        width: '100%',
        height: '100%',
        borderRadius: '100px',
        backgroundColor: 'rgb(255 212 189 / 10%)',
        animation: `${slime} 6s linear infinite`,
        transition: 'all 01s ease-in-out',
    }
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

export const VideoHeading = styled.div(({ index }) => ({
    display: 'flex',
    background: index === 0 ? 'linear-gradient(to bottom, #362c1b, #926f6f 30%, #fff)' : (index === 1 ? 'linear-gradient(to bottom, #544629, #b38484 30%, #c1afaf)' : (index === 2 ? 'linear-gradient(to bottom, #a5874a, #d7b7b7 30%, #e8e8e8)' : 'linear-gradient(to bottom, #ebebec, #ebebec 30%, #707070)')),
    width: '100%',
    height: '100%',
    '& > img': {
        width: '100%',
        opacity: '0.2',
    },
}))

export const DoorOpening = styled.div(({ videoFrame, totalFrames }) => mq({
    position: 'absolute',
    zIndex: 1,
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    '& > div': {
        position: 'absolute',
        width: '50%',
        height: '100%',
        backgroundImage: 'url(https://raw.githubusercontent.com/kimji9663/kimji_blog/main/src/images/window02.png)',
        backgroundColor: 'rgb(180 180 180 / 90%)',
        backgroundRepeat: 'repeat-x',
        backgroundSize: 'auto 100%',
    },
    '& > .left': {
        backgroundPosition: 'top right',
        left: `-${videoFrame/totalFrames*2000 > 50 ? 50 : videoFrame/totalFrames*2000}%`,
    },
    '& > .right': {
        backgroundPosition: 'top left',
        right: `-${videoFrame/totalFrames*2000 > 50 ? 50 : videoFrame/totalFrames*2000}%`,
    },
}))

export const HeaddingWrap = styled.div(({ index, datalength }) => mq({
    position: 'absolute',
    top: 0,
    width: '100%',
    height: '100%',
    '& > div': {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'absolute',
        //top: `-${100 * index}%`,
        left: 0,
        zIndex: 1,
        width: '100%',
        height: `100%`,
    }
}))

export const HeaddingText = styled.div(({ section, index }) => mq({
    position: 'absolute',
    top: '40%',
    opacity: index === 0 ? 0 : (section === index ? 1 : 0),
    animation: index === 0 ? `${fadeIn} 5s linear forwards 3s` : 'none',

    '& > .heading1': {
        flex: '1 1 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        fontSize: ['40px', '60px', '80px'],
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 0,
        opacity: section === index ? 1 : 0,
        top: section === index ? '0px' : '-50px',
        transition: index === 0 ? 'opacity 3s ease' : 'opacity 5s ease, top 3s ease',
        color: '#fff',
        textFillColor: 'transparent',
        background: index === 0 ? '#fff' : (index === 1 ? '#fff' : (index === 2 ? 'url(https://thumbs.gfycat.com/CandidHappyBlackbuck-size_restricted.gif) repeat' : '#64f0aa')),
        backgroundClip: 'text',
        backgroundPosition: '50% 73%',
        whiteSpace: 'pre-wrap',
    },
    '& > .heading2': {
        flex: '1 1 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '50%',
        color: '#fff',
        fontSize: ['35px', '30px', '40px'],
        opacity: section === index ? 1 : 0,
        top: section === index ? '0px' : '-100px',
        transition: index === 0 ? 'opacity 1s ease' : 'opacity, top 1s ease',
    }
}))

export const InfiniteMarquee = styled.div(({}) => mq({
    position: 'absolute',
    padding: '0.5rem 0',
    width: '100%',
    overflow: 'hidden',
    color: '#fff',
    fontSize: '1.6rem',
    whiteSpace: 'nowrap',
    background: '#000',
    '&.marquee1': {
        top: 0,
        transform: 'matrix3d(1, -0.1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)',
    },
    '&.marquee2': {
        bottom: '100px',
        transform: 'matrix3d(1, 0.3, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)',
    },
    '&.marquee3': {
        bottom: '20px',
        transform: 'matrix3d(1, -0.3, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)',
    },
    '& > span': {
        display: 'inline-block',
        marginRight: '1rem',
        transform: 'translate3d(-289px, 0px, 0px)',
        animation: `${marquee} 8s linear infinite`,
    },
}))

/*** ANIMATION ***/
export const slime = keyframes`
    0% {border-radius: 36% 64% 63% 37%/54% 60% 44% 48%;}
    25% {border-radius: 73% 35% 55% 60%/65% 44% 62% 56%;}
    50% {border-radius: 75% 35% 35% 72%/58% 51% 56% 49%;}
    75% {border-radius: 71% 52% 69% 31%/69% 52% 79% 58%;}
    100% {border-radius: 36% 64% 63% 37%/54% 60% 44% 48%;}
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

export const fadeInScale = keyframes`
    0% {opacity: 0; transform: scale(.5, .5)}
    100% {opacity: 1; transform: scale(1, 1)}
`
export const fadeIn = keyframes`
    0% {opacity: 0;}
    100% {opacity: 1;}
`

export const marquee = keyframes`
    0% {transform: translate3d(-289px, 0px, 0px)}
    100% {transform: translate3d(0px, 0px, 0px)}
`