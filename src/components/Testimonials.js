import React from 'react';

const Testimonials = ( testimonial ) => {
    
    const { image, name, text } = testimonial.testimonial

    return (
        <>
            <img className="swiper--image" src={image} alt="" />
            <div className="swiper--content">
                <div className="swiper--title"> {name} </div>
                <div className="swiper--person"> {text} </div>
            </div>   
        </>
    );
};

export default Testimonials;