import React from "react";
import "./Slider.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

const Slider = ({ slides }) => {
	return (
		<Swiper
			slidesPerView={6}
			centeredSlides={true}
			spaceBetween={10}
			navigation={{
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev",
			}}
			modules={[Pagination, Navigation]}
			className="mySwiper">
			{slides.map((slide, index) => (
				<SwiperSlide key={index}>
					<img src={slide.src} alt={slide.alt} />
					<p className="slide-title">{slide.title}</p>
					<p className="slide-text">{slide.text}</p>
				</SwiperSlide>
			))}
			<div className="swiper-button-prev" />
			<div className="swiper-button-next" />
		</Swiper>
	);
};

export default Slider;
