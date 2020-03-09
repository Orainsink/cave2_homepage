import React from "react";
import "../../styles/Video.css";
import { Tween } from "./Tween.jsx";

export default function Video(props) {
	const { active, toggleMask } = props;

	return (
		<>
			{active && (
				<Tween
					to={{
						opacity: 1
					}}
					duration={0.3}
				>
					<div className="mask-video video" onClick={toggleMask}>
						{/*<video
						src="xxxxxxxxxxxx"
						controls=""
						id="video"
					/>*/}
						<iframe
							width="910"
							height="512"
							src="https://www.youtube.com/embed/OFt3SThGi7M"
							frameBorder="0"
							allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
							allowFullScreen
						/>
					</div>
				</Tween>
			)}
		</>
	);
}
