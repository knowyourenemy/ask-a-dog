import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './Dog.css'
import Button from './Button'
import { quotes } from './Quotes.js'
import dog_bone_icon from '../assets/images/dog-bone-6453.svg';
import * as htmlToImage from 'html-to-image';
import { toPng, toJpeg, toBlob, toPixelData, toSvg} from 'html-to-image';
import download from 'downloadjs'
import ball_icon from '../assets/images/Picture 1.png';
import domtoimage from 'dom-to-image';
import Base64Downloader, { triggerBase64Download } from 'react-base64-downloader';
import toImg from 'react-svg-to-image';

function Dog(props) {
    const [dog, setDog] = useState("")
    const [isDogUrlLoading, setIsDogUrlLoading] = useState(false)
    const [refreshCount, setRefreshCount] = useState(0)
    const [isDogImgLoading, setIsDogImgLoading] = useState(false)
    const [quote, setQuote] = useState({})
    const [isLoadingError, setIsLoadingError] = useState(false)
    const node = document.getElementById('my-node');
    const [isSharing, setIsSharing] = useState(false)


    const onShareClick = () => {
        setIsSharing(true)
        document.getElementById('form').style.display = "none"
        htmlToImage.toPng(document.getElementById('home'))
        .then(function (dataUrl) {
            download(dataUrl, 'dogwisdom');

            document.getElementById('form').style.display = "flex"
            setIsSharing(false)
            //var img = new Image();
            //img.src = dataUrl;
            //document.body.appendChild(img);
            // toImg('svg', 'name').then(fileData => {
            //     //do something with the data
            //     console.log("success!!!!")
            //   });
              
        });
    }



    useEffect(() => {
        console.log("getting dog url!")
        setIsDogUrlLoading(true)
        setIsDogImgLoading(true)
        axios.get('https://dog.ceo/api/breeds/image/random')
            .then(res => {
                setIsDogUrlLoading(false)
                setDog(res.data.message)
                setQuote(getQuote)
            })
            .catch(err => {
                setIsLoadingError(true)
                console.log(err)
            });
    }, [refreshCount]);


    var onRefreshClick = () => {
        console.log("getting another response")
        setIsDogUrlLoading(true)
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
        <div className='dog-wrapper' id='my-node'>
            <div className='dog-question'>
                {props.question}
            </div>
            {isDogUrlLoading ? (
                <div className='dog-loading-1' style={{ display: isLoadingError ? "none" : "flex" }}>Consulting Dogfather...</div>
            ) : (
                <div className='dog-loaded' style={{ display: isLoadingError ? "none" : "flex" }}>
                    <div className='dog-content' style={{ display: isDogImgLoading ? "none" : "flex" }}>
                        <img src={dog} className='dog-img' onLoad={() => setIsDogImgLoading(false)}>

                        </img>
                        <div className='dog-texts'>
                            <div className='dog-quote'>
                                {"\"" + quote.text + "\""}
                            </div>
                            <div className='dog-quote-author'>
                                {quote.author}
                            </div>

                        </div>
                        <div className='dog-button-container' style={{ display: isDogImgLoading || isLoadingError ? "none" : "flex" , visibility: isSharing ? "hidden" : "visible" }}>
                            <Button onClick={onRefreshClick} text='fetch another!' icon={dog_bone_icon} />
                            <Button onClick={onShareClick} text='save wisdom!' icon={ball_icon}/>
                        </div>
                    </div>
                    <div className='dog-loading-2' style={{ display: isDogImgLoading && !isLoadingError ? "flex" : "none" }}>Sacrificing Treat...</div>


                </div>
            )}

            <div className='loading-error' style={{ display: isLoadingError ? "flex" : "none" }}>
                Sorry! All dogs are asleep right now. Please try again later.
            </div>






        </div>
    )
}

export default Dog
