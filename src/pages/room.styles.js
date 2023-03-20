import React from "react"
import styled from "@emotion/styled"
import { jsx, css } from "@emotion/react"

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
}));

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

export const HeaddingText = styled.div(({ section, index, mode }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    //flexDirection: mode ? 'column' : 'row',
    width: '100%',
    height: '100%',
    '& > h1': {
        flex: '1 1 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        height: '50%',
        color: '#b0b0b0',
        textAlign: 'center',
        opacity: section === index ? 1 : 0,
        top: section === index ? '-50px' : '50px',
        transition: 'opacity, top 1s ease',
    },
    '& > div': {
        flex: '1 1 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '50%',
        backgroundColor: '#fff'
    }
}));