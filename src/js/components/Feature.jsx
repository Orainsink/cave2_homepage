import React, { useEffect } from "react";
import "../../styles/Feature.css";
import Swiper from "swiper";
import { Tween } from "./Tween.jsx";

export default function Feature(props) {
	const { active, toggleMask } = props;

	const imgList = [
		require("../../assets/images/selling-point-00.png"),
		require("../../assets/images/selling-point-01.png"),
		require("../../assets/images/selling-point-02.png"),
		require("../../assets/images/selling-point-03.png"),
		require("../../assets/images/selling-point-04.png")
	];

	useEffect(() => {
		if (active) {
			const mySwiper = new Swiper(".swiper-container-game", {
				loop: true,
				effect: "coverflow",
				grabCursor: true,
				centeredSlides: true,
				slidesPerView: "auto",
				coverflowEffect: {
					rotate: 0,
					stretch: 148,
					depth: 100,
					modifier: 3.5,
					slideShadows: false
				},
				preventClicks: false
			});
		}
	}, [active]);

	return (
		<>
			{active && (
				<Tween
					to={{
						opacity: 1
					}}
					duration={0.8}
				>
					<div className="make-mask faj">
						<div className="feature faj pr">
							<div className="light pa" />
							<div className="rotate2 pa" />
							<div className="game-carousel pr">
								<div className="swiper-container-game swiper-container">
									<div className="swiper-wrapper">
										{imgList.map((item, index) => (
											<div
												className="swiper-slide"
												key={index}
											>
												<img src={item} alt="" />
											</div>
										))}
									</div>
								</div>
							</div>
							<div className="close pa" onClick={toggleMask} />
						</div>
					</div>
				</Tween>
			)}
		</>
	);
}
