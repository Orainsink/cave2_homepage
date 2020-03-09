import React, { useEffect, useState } from "react";
import Swiper from "swiper";
import "../../styles/WrapSwiper.css";
import { wrapSwiper } from "../configs/data";

export default function WrapSwiper() {
	const [swiper, setSwiper] = useState(null);

	const list = wrapSwiper;

	useEffect(() => {
		setSwiper(
			new Swiper(".swiper-container-carousel", {
				loop: true,
				autoplay: { delay: 3500 },
				disableOnInteraction: false,
				onlyExternal: true,
				preventClicks: false,
				pagination: {
					el: ".swiper-pagination-carousel",
					type: "bullets"
				},
				paginationClickable: true
			})
		);
	}, []);

	function handleClick(boo, e) {
		e.preventDefault();
		if (!swiper) return;
		if (boo) {
			swiper.slideNext();
		} else {
			swiper.slidePrev();
		}
	}

	return (
		<div className="pa carousel">
			<div className="swiper-container swiper-container-carousel">
				<div className="swiper-wrapper">
					{list.map((item, index) => (
						<div
							className="swiper-slide"
							style={{ width: "813px" }}
							key={index}
						>
							<a href={item.url} target="_blank">
								<img src={item.img} />
							</a>
						</div>
					))}
				</div>
				<div className="swiper-pagination swiper-pagination-carousel">
					<span className="swiper-pagination-bullet" />
					<span className="swiper-pagination-bullet" />
					<span className="swiper-pagination-bullet" />
					<span className="swiper-pagination-bullet" />
				</div>
			</div>
			<a
				href="/#"
				className="pa btn btn-prev"
				onClick={handleClick.bind(this, false)}
			>
				<i />
				<em />
			</a>
			<a
				href="/#"
				className="pa btn btn-next"
				onClick={handleClick.bind(this, true)}
			>
				<i />
				<em />
			</a>
		</div>
	);
}
