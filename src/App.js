import React from "react";
import "./App.css";
import Slider from "./ui/slider/Slider";

const App = () => {
	const slides = [
		{
			src: "https://i.pinimg.com/564x/1c/95/3f/1c953f2068dcce959486919034b3c590.jpg",
			alt: "Slide 1",
			title: "China Lion Cars",
			text: "217 объявлений",
		},
		{
			src: "https://dr1ver.ru/wp-content/uploads/2020/04/vinfast_logo.png",
			alt: "Slide 2",
			title: "China Lion Cars",
			text: "217 объявлений",
		},
		{
			src: "https://dr1ver.ru/wp-content/uploads/2020/04/vinfast_logo.png",
			alt: "Slide 3",
			title: "China Lion Cars",
			text: "217 объявлений",
		},
		{
			src: "https://dr1ver.ru/wp-content/uploads/2020/04/vinfast_logo.png",
			alt: "Slide 4",
			title: "China Lion Cars",
			text: "217 объявлений",
		},
		{
			src: "https://dr1ver.ru/wp-content/uploads/2020/04/vinfast_logo.png",
			alt: "Slide 5",
			title: "China Lion Cars",
			text: "217 объявлений",
		},
		{
			src: "https://dr1ver.ru/wp-content/uploads/2020/04/vinfast_logo.png",
			alt: "Slide 6",
			title: "China Lion Cars",
			text: "217 объявлений",
		},
		{
			src: "https://dr1ver.ru/wp-content/uploads/2020/04/vinfast_logo.png",
			alt: "Slide 7",
			title: "China Lion Cars",
			text: "217 объявлений",
		},
		{
			src: "https://dr1ver.ru/wp-content/uploads/2020/04/vinfast_logo.png",
			alt: "Slide 8",
			title: "China Lion Cars",
			text: "217 объявлений",
		},
		{
			src: "https://dr1ver.ru/wp-content/uploads/2020/04/vinfast_logo.png",
			alt: "Slide 9",
			title: "China Lion Cars",
			text: "217 объявлений",
		},
		{
			src: "https://dr1ver.ru/wp-content/uploads/2020/04/vinfast_logo.png",
			alt: "Slide 4",
			title: "China Lion Cars",
			text: "217 объявлений",
		},
		{
			src: "https://dr1ver.ru/wp-content/uploads/2020/04/vinfast_logo.png",
			alt: "Slide 4",
			title: "China Lion Cars",
			text: "217 объявлений",
		},
		{
			src: "https://dr1ver.ru/wp-content/uploads/2020/04/vinfast_logo.png",
			alt: "Slide 4",
			title: "China Lion Cars",
			text: "217 объявлений",
		},
		{
			src: "https://dr1ver.ru/wp-content/uploads/2020/04/vinfast_logo.png",
			alt: "Slide 4",
			title: "China Lion Cars",
			text: "217 объявлений",
		},
		{
			src: "https://dr1ver.ru/wp-content/uploads/2020/04/vinfast_logo.png",
			alt: "Slide 4",
			title: "China Lion Cars",
			text: "217 объявлений",
		},
		{
			src: "https://dr1ver.ru/wp-content/uploads/2020/04/vinfast_logo.png",
			alt: "Slide 4",
			title: "China Lion Cars",
			text: "217 объявлений",
		},
	];

	return (
		<>
			<Slider slides={slides} />
		</>
	);
};

export default App;
