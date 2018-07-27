import React, { Component } from 'react'
import { connect } from 'react-redux'

const ArticleForm = props => (

    <form id="articleInputForm">
        <div>
            <label htmlFor="title">Title</label>
            <input className="formInput" type="text" required={true} placeholder="Title" defaultValue={props.article ? props.article.title : ''} />
        </div>

        <div>
            <label htmlFor="content" >Article Text</label>
            <textarea className="formInput" form ="articleInputForm" name="content" required={true} id="content" placeHolder="Article text goes here..." cols="70" rows="10" wrap="soft" />
            {/* <input type="textarea" required={true} size="large" name="content" className="articleInput" placeholder="Article Text" defaultValue={props.article ? props.article.content : ''} /> */}
        </div>
        <div className="checkboxdiv">
            <div className="myCheckbox">
                <input type="checkbox" name="isAnonymous" defaultValue={props.article && props.article.isAnonymous} />
                <span className="checkmark" >✓</span>
                <label htmlFor="isAnonymous">Publish article anonymously?</label>
            </div>
        </div>
        <div>
            <button type="submit">Submit</button>
        </div>

    </form>

)

const mapState = state => {
    return {

    }
}

const mapDispatch = dispatch => {
    return {

    }
}

export default connect(mapState, mapDispatch)(ArticleForm)
