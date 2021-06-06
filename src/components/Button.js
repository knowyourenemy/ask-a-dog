import React from 'react'
import './Button.css'



function Button(props) {
    return (
        <a href={props.url} onClick={props.onClick} className='button-wrapper' target='_blank'>
            <img className='button-icon' src={props.icon}>
            </img>
            <div className='button-text'>
                {props.text}
            </div>     
        </a>
    )
}

export default Button
