import React from 'react'
import Dog from './Dog'
import { useState, useEffect } from "react";
import './Home.css'
import dog_icon from '../assets/images/dog-6468 (1).svg';



function Home() {

    const [question, setQuestion] = useState("")
    const [formSubmitted, setFormSubmitted] = useState(false)

    const onFormSubmit = (e) =>{
        setFormSubmitted(true)
        e.preventDefault()
        console.log("this vfwhu")
    }

    const onFormChange = (e) => {
        setQuestion(e.target.value)
        setFormSubmitted(false)
    }

    return (
        <div className='home-wrapper'>
            <div className="header" style={{ display: formSubmitted ? "none" : "flex" }}>Ask a Dog</div>
            <form onSubmit={onFormSubmit} className='question-form'>
                <input className='question-input' type='text' onChange={onFormChange} placeholder='Input question here' />
            </form>
            {formSubmitted? (
                <Dog question = {question} />
            ) : (
                <div className='home-about'>
                    <div className="home-description">Have a burning question? Ask a dog!</div>
                    <img className='home-dog-icon' src={dog_icon}></img>
                    <div className='home-encouragement'>Good luck!</div>
                    <div className='home-disclaimer'> This was created using the Dogs CEO API and the Quotes XYZ Api. View Source Code: </div>
                </div>
            )}
        </div>
    )
}

export default Home
