import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import { Swiper, SwiperSlide } from 'swiper/react';
import '@smastrom/react-rating/style.css'
import comma from './comma.svg'
// import required modules
import { Pagination, Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useEffect, useState } from 'react';
import { Rating } from '@smastrom/react-rating';
const Testimonials = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(response => response.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <>
            <section className='my-20'>
                <SectionTitle
                    heading='What Our Clients Say'
                    subHeading='TESTIMONIALS'
                ></SectionTitle>

                <Swiper
                    pagination={{
                        type: 'progressbar',
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >
                    {
                        reviews.map(review => <SwiperSlide key={review.id} review={review}>
                            <div className='m-24 flex flex-col items-center'>
                                <Rating
                                    style={{ maxWidth: 280 }}
                                    value={review.rating}
                                    readOnly
                                />
                                <img src={comma} alt="" />
                                <p className='text-center  py-8'>{review.details}</p>
                                <h3 className="text-2x text-xl text-orange-500">{review.name}</h3>
                            </div>
                        </SwiperSlide>)
                    }

                </Swiper>
            </section>
        </>
    );
};

export default Testimonials;