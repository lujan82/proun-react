import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'; 
import 'swiper/swiper.scss';
import Error from './Error';
import Loading from './Loading';
import Testimonials from './Testimonials';


const Slider = () => {

    const [{ testimonialsData, error, isLoading }, dispatch] = useState({
        testimonialsData: null,
        error: null,
        isLoading: true
    })

    useEffect(() => {
        dispatch(state => ({ ...state, isLoading: true }))
        
        fetch('http://localhost:3000/api/data.json')
        .then(response => response.json())
        .then(data => dispatch({testimonialsData: data.data, error: null, isLoading: false}))
        .catch(error => dispatch({ testimonialsData: null, error, isLoading: false }));
    }, [])

    if (isLoading) return <Loading />;
    if (testimonialsData === null) return <Loading />;
    if (error) return <Error />;

    return (
         <Swiper
            spaceBetween={50}
            slidesPerView={1}
            pagination={{ clickable: true }}
        >
            
         {
            testimonialsData.map((testimonial,i) => (
                <SwiperSlide key={i}>
                    <Testimonials testimonial={testimonial} />
                </SwiperSlide>
            ))
                
        } 
        </Swiper>
    );
};

export default Slider;