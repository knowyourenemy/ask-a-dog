import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './Dog.css'
import Button from './Button'

function Dog() {
    const [dog, setDog] = useState("")
    const [quotes, setQuotes] = useState([{
        text: '',
        author: ''
    }])
    const [isDogLoading, setIsDogLoading] = useState(false)
    const [isQuoteLoading, setIsQuoteLoading] = useState(false)
    const [refreshCount, setRefreshCount] = useState(0)
    const [isDogImgLoading, setIsDogImgLoading] = useState(false)
    const [quote, setQuote] = useState({})



    useEffect(() => {
        console.log("getting dog url!")
        setIsDogLoading(true)
        setIsDogImgLoading(true)
        axios.get('https://dog.ceo/api/breeds/image/random')
            .then(res => {
                setIsDogLoading(false)
                setDog(res.data.message)
            })
            .catch(err => {
                console.log(err)
            });
    }, [refreshCount]);


    useEffect(() => {
        console.log("getting quotes")
        setIsQuoteLoading(true)
        axios.get('https://type.fit/api/quotes')
            .then(res => {
                setQuotes(res.data)
                var index = Math.floor(Math.random() * res.data.length)
                setQuote(res.data[index])
                setIsQuoteLoading(false)

            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    // useEffect(() => {
    //     console.log("setting quote")
    //     setQuote(getQuote)
    //     setIsQuoteLoading(false)
    // }, [quotes])

    var onRefreshClick = () => {
        console.log("getting another response")
        setIsDogLoading(true)
        setIsDogImgLoading(true)
        setRefreshCount(refreshCount + 1)
        setQuote(getQuote)
    }

    const getQuote = () => {
        console.log("getting quote from quotes")
        var index = Math.floor(Math.random() * quotes.length)
        return quotes[index]
    }

    return (
        <div className='dog-wrapper'>
            {isDogLoading || isQuoteLoading ? (
                <div className='dog-loading-1'>Consulting Dogfather...</div>
            ) : (
                <div className='dog-loaded'>
                    <div className='dog-content' style={{ display: isDogImgLoading ? "none" : "flex" }}>
                        <img src={dog} className='dog-img' onLoad={() => setIsDogImgLoading(false)}>

                        </img>
                        <div className='dog-texts'>
                            <div className='dog-quote'>
                                {quote.text}
                            </div>
                            <div className='dog-quote-author'>
                                {quote.author}
                            </div>
                            
                        </div>

                        <div className='dog-button-wrapper' style={{ display: isDogImgLoading ? "none" : "flex" }}>
                                <Button onClick={onRefreshClick} />
                        </div>
                    </div>
                    <div className='dog-loading-2' style={{ display: isDogImgLoading ? "flex" : "none" }}>Sacrificing Treat...</div>
                   

                </div>
            )}






        </div>
    )
}

export default Dog
