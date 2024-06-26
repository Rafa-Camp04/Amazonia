import React, { useState, useEffect } from 'react';
import './IndexBackground.css';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';

const imageUrls = [
    '../../../media/carousel-images/carousel-1.jpg',
    '../../../media/carousel-images/carousel-2.jpg',
    '../../../media/carousel-images/carousel-3.jpg',
    '../../../media/carousel-images/carousel-4.jpg',
    '../../../media/carousel-images/carousel-5.jpg',
    '../../../media/carousel-images/carousel-6.jpg',
    '../../../media/carousel-images/carousel-7.jpg'
];

export const IndexCarousel = () => {
    const [slide, setSlide] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            handleRightArrowClick();
        }, 10000);

        return () => clearTimeout(timer);
    }, [slide]);

    const handleLeftArrowClick = () => {
        setSlide(slide === 0 ? imageUrls.length - 1 : slide - 1)
    }
    
    const handleRightArrowClick = () => {
        setSlide(slide === imageUrls.length - 1 ? 0 : slide + 1)
    }

    return (
            <>
                <div id='carousel-index-background'>
                    <div id='slides-container' style={{ transform: `translateX(-${slide * 100}%)` }}>
                        {imageUrls.map((url, idx) => (
                            <div className='slide-wrapper' key={url}>
                                <img 
                                    src={url}
                                    alt={`slide-${idx}`}
                                    className='slide-carousel-index-background'
                                />
                            </div>
                        ))}
                    </div>
                </div>

                <div id='arrows-div'>
                        <div className='index-carousel-arrow-div' onClick={handleLeftArrowClick}>
                            <SlArrowLeft className='arrow-icon' />
                        </div>

                        <div className='index-carousel-arrow-div' onClick={handleRightArrowClick}>
                            <SlArrowRight className='arrow-icon' />
                        </div>
                </div>
            </>
        );
}
