import React from 'react'
import Dog from './Dog'
import { useState } from "react";
import './Home.css'
import dog_icon from '../assets/images/New Project.svg';
import paw_icon from '../assets/images/pawprint-6504 copy.svg';
import ball_icon from '../assets/images/Picture 1.png';
import github_icon from '../assets/images/github-icon.png';
import Button from './Button';



function Home() {

    const [question, setQuestion] = useState("")
    const [formSubmitted, setFormSubmitted] = useState(false)

    const onFormSubmit = (e) => {
        setFormSubmitted(true)
        e.preventDefault()
        document.getElementById('input-id').value = ""
    }

    const onFormChange = (e) => {
        setQuestion(e.target.value)
        setFormSubmitted(false)
    }

    const onLogoClick = () => {
        setFormSubmitted(false)
        document.getElementById('input-id').value = ""
    }

    const apiLink = <a href='https://dog.ceo/dog-api/' target='_blank' rel='noreferrer'>the Dog API</a>

    return (
        <div className='home-wrapper' id='home'>
            <div className='header-wrapper'>
                <img src={paw_icon} className='header-icon' alt='paw'></img>
                <div className="header" onClick={onLogoClick}>Ask a Dog</div>
                <img src={paw_icon} className='header-icon' alt='paw'></img>
            </div>
            <form onSubmit={onFormSubmit} className='question-form' id='form'>
                <input className='question-input' id='input-id' type='text' onChange={onFormChange} placeholder='Input question here' />
            </form>
            {formSubmitted ? (
                <Dog question={question} />
            ) : (
                <div className='home-about'>
                    <div className="home-description">In this dog-eat-dog world, it is normal to feel like the dog days won’t end. 
But fret not, because sage doggos are here to provide you with advice and comfort. Simply ask any question above, and be enlightened!</div>
                    <img className='home-dog-icon' src={dog_icon} alt='dog outline'></img>
                    <div className='home-encouragement'>Good luck!</div>
                    <div className='home-disclaimer'> This website was created using {apiLink}. </div>
                    <div className='home-buttons-container'>
                        <Button text='Project Code' icon={github_icon} url='https://github.com/knowyourenemy/inspirational-dogs'/>
                        <Button text='My Website' icon={ball_icon} url='https://www.aadipatwari.com'/>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Home
