import React, { Component } from 'react'

const FloatingImage = (props) => {

    return (
        <img src={props.src} className={props.float === 'right' ? 'floatRight' : 'floatLeft'} />
    )
}

export default FloatingImage
