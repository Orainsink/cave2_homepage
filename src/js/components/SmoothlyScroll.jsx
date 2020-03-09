import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin.js";

gsap.registerPlugin(ScrollToPlugin);

export default function SmoothlyScroll() {
	useEffect(() => {
		let scrollTime = 1;
		let scrollDistance = 300;

		function bindScroll(e) {
			e.preventDefault();

			let delta = e.wheelDelta / 120 || -e.detail / 3;
			const scrollTop = Math.max(
				window.pageYOffset,
				document.documentElement.scrollTop,
				document.body.scrollTop
			);
			let finalScroll = scrollTop - parseInt(delta * scrollDistance);

			gsap.to(window, {
				duration: scrollTime,
				scrollTo: {
					y: finalScroll,
					autoKill: true
				},
				ease: "Power1.easeOut",
				overwrite: 5
			});
		}

		window.addEventListener("mousewheel", bindScroll, { passive: false });
	}, []);

	return <></>;
}
