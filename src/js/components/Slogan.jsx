import React from "react";

export default function Slogan(props) {
	const { toggleVideo } = props;

	function handleClick(e) {
		e.preventDefault();
		toggleVideo();
	}

	return (
		<div className="pa center">
			<div className="pa slogan">
				<a
					href="/#"
					className="pa btn-play"
					title="播放"
					onClick={handleClick}
				>
					贪婪洞窟2手游视频
				</a>
			</div>
			<div className="pa down">
				<div className="pa er-down">
					<img
						src={require("../../assets/images/qrcode.png")}
						width="100%"
						alt=""
					/>
					<div className="pa down-line" />
				</div>
				<a
					download="caveonline_2.1.1.apk"
					href="https://itunes.apple.com/cn/app/id1309063930'"
					className="pa btn btn-ios"
				>
					贪婪洞窟2手游iOS下载
				</a>
				<a
					download="caveonline_2.1.1.apk"
					href="https://cavedl.leiting.com/full/caveonline_2.1.1.apk"
					className="pa btn btn-android"
				>
					贪婪洞窟2手游Android下载
				</a>
			</div>
		</div>
	);
}
