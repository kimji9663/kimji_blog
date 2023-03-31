import styled from "@emotion/styled"
import { jsx, css, keyframes } from "@emotion/react"
import { mq } from '../constants/index'

export const Main = styled.div(() => ({
    position: 'relative',
    width: '100%',
    height: '600vh',
}));

export const MainInner = styled.div(() => ({
    position: 'sticky',
    top: 0,
    width: '100%',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
}));

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

export const HeaddingWrap = styled.div(({ index, datalength }) => ({
    position: 'absolute',
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    backgroundColor: index === 0 ? '#ffeece' : (index === 1 ? '#ffefe5' : (index === 2 ? '#eaeaea' : '#fffeee')),
    '& > div': {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'absolute',
        top: `-${100 * index}%`,
        width: '100%',
        height: `${100 * datalength}%`,
    }
}));

export const HeaddingText = styled.div(({ section, index }) => mq({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    flexDirection: ['column', 'column', 'row'],
    '& > h1': {
        flex: '1 1 auto',
        order: index % 2 === 1 ? 2 : 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        color: ['green', 'gray', 'hotpink'],
        textAlign: 'center',
        opacity: section === index ? 1 : 0,
        top: section === index ? '-50px' : '50px',
        transition: 'opacity, top 1s ease',
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
}));


/*** ANIMATION ***/
export const slime = keyframes`
    0% {border-radius: 36% 64% 63% 37%/54% 60% 44% 48%}
    25% {border-radius: 73% 35% 55% 60%/65% 44% 62% 56%}
    50% {border-radius: 75% 35% 35% 72%/58% 51% 56% 49%}
    75% {border-radius: 71% 52% 69% 31%/69% 52% 79% 58%}
    100% {border-radius: 36% 64% 63% 37%/54% 60% 44% 48%}
`