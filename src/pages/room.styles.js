import React from "react"
import styled from "@emotion/styled"
import { jsx, css } from "@emotion/react"

export const Main = styled.div(() => ({
    position: 'relative',
    width: '100%',
    height: '600vh',
}));

export const HeaddingWrap = styled.div(() => ({
    position: 'absolute',
    width: '100%',
    height: '100vh',
}));

export const HeaddingText = styled.div(({ first }) => ({
    margin: first ? '0 auto' : '3rem auto',
    width: '100%',
    height: '50%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: first ? '#ffeece' : '#ffefe5',
    '& > h1': {
        position: 'absolute',
        top: `-${100}%`,
        color: '#ffeece',
    },
}));