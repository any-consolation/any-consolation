import React, { Component } from 'react'
import FloatingImage from './floating-img'

const ParsedArticle = props => (
    <div>
        {props.parsedContentArray.map(obj => {

            if (obj.type === 'text') {
                return obj.captured
            } else {
                return <FloatingImage src={obj.url} float={obj.float} />
            }

        })}
    </div>
)

export default ParsedArticle
