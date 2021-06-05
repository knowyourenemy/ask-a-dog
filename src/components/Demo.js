import React from 'react'
import { useFetchImage } from './useFetchImage';

const Demo = () => {
    const imageSrc = "https://images.dog.ceo/breeds/wolfhound-irish/n02090721_2083.jpg";

    const { hasLoaded, hasError } = useFetchImage(imageSrc);


    if (hasError) {
        return null;
    }

    return (
        <div>
            {!hasLoaded && <h1>Loading</h1>}
            {hasLoaded && <img src={imageSrc} />}
        </div>
    );
};



export default Demo
