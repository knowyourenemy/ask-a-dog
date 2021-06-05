import React from 'react'
import './Button.css'
import dog_bone_icon from '../assets/images/dog-bone-6453.svg';

function Button(props) {
    return (
        <div onClick={props.onClick} className='button-wrapper'>
            <img className='button-icon' src={dog_bone_icon}>
            </img>
            <div className='button-text'>
                Fetch another enlightenment
            </div>     
        </div>
    )
}

export default Button
