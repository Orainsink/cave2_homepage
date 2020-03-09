import React, { useState, useEffect } from "react";
import "../../styles/Wrap.css";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin.js";
import { Controller, Scene } from "react-scrollmagic";
import { Tween } from "./Tween.jsx";
import { info } from "../configs/data";
import Slogan from "./Slogan.jsx";

gsap.registerPlugin(ScrollToPlugin);

function SkipBtn() {
	function handleClick(e) {
		e.preventDefault();
		gsap.to(window, {
			duration: 2,
			ease: "power2.out",
			scrollTo: {
				y: document.getElementsByTagName("body")[0].scrollHeight - 900,
				autoKill: true
			}
		});
	}

	return (
		<a className="skip" title="跳过" onClick={handleClick} href="/#">
			<i />
			<span>skip</span>
		</a>
	);
}

function Info(props) {
	const { content, id, position, fadeIn } = props;
	const lines = props.lines || null;
	const pos = JSON.parse(JSON.stringify(position));
	const [active, setActive] = useState(false);

	useEffect(() => {
		if (fadeIn) setActive(true);
	}, [fadeIn]);

	useEffect(() => {
		Object.keys(pos).map(key => (pos[key] += "px"));
	}, [pos]);

	return (
		<div className={`pa info ${active ? "fadeIn" : ""}`} style={{ ...pos }}>
			<div className="pa turntable" />
			<div className="pa note note-1">
				<img
					src={require(`../../assets/images/note-${id}.gif`)}
					width="100%"
				/>
			</div>
			<div className={`pa img english-words english-words-${id}`} />
			<p className="pa p-letters">{content}</p>
			{active &&
				lines &&
				lines.map((line, index) => (
					<div
						key={index}
						style={{
							width: line.width + "px",
							top: line.top + "px",
							left: line.left + "px"
						}}
						className="pa underline-box"
					>
						<div className="underline " />
					</div>
				))}
		</div>
	);
}

export default function Wrap(props) {
	const { toggleVideo } = props;

	return (
		<div className="wrap">
			<SkipBtn />
			<Controller>
				<div id="trigger" />
				<Scene
					triggerElement="#trigger"
					triggerHook="onLeave"
					duration={1284}
				>
					{progress => (
						<div id="section1" className="section_box">
							<Slogan toggleVideo={()=>{toggleVideo(1)}} />
							<Tween
								to={{
									backgroundPosition: `50% 600px`
								}}
								totalProgress={progress}
								paused
							>
								<div className="section section1" />
							</Tween>
							<Tween
								to={{
									backgroundPosition: `50% 0%`
								}}
								totalProgress={progress}
								paused
							>
								<div className="floor" />
							</Tween>
							<Tween
								to={{
									backgroundPosition: `0% 500px`
								}}
								totalProgress={progress}
								paused
							>
								<div className="layer rockery" />
							</Tween>
						</div>
					)}
				</Scene>
				<Scene
					triggerElement="#trigger"
					triggerHook="onLeave"
					duration={1385}
					offset={1284}
				>
					{progress => (
						<div id="section2" className="section_box">
							<Info {...info[0]} fadeIn={!!progress} />
							<Tween
								to={{
									backgroundPosition: `50% 200px`
								}}
								totalProgress={progress}
								paused
							>
								<div className="section section2" />
							</Tween>
							<div className="ceiling" />
							<div className="floor" />
						</div>
					)}
				</Scene>
				<Scene
					triggerElement="#trigger"
					triggerHook="onLeave"
					duration={1611}
					offset={2669}
				>
					{progress => (
						<div id="section3" className="section_box">
							<Info {...info[1]} fadeIn={!!progress} />
							<Tween
								to={{
									backgroundPosition: `50% 250px`
								}}
								totalProgress={progress}
								paused
							>
								<div className="section section3" />
							</Tween>
							<div className="ceiling" />
							<div className="floor" />
						</div>
					)}
				</Scene>
				<Scene
					triggerElement="#trigger"
					triggerHook="onLeave"
					duration={1429}
					offset={4280}
				>
					{progress => (
						<div id="section4" className="section_box">
							<Info {...info[2]} fadeIn={!!progress} />
							<Tween
								to={{
									backgroundPosition: `50% 350px`
								}}
								totalProgress={progress}
								paused
							>
								<div className="section section4" />
							</Tween>
							<Tween
								to={{
									backgroundPosition: `0% 100px`
								}}
								totalProgress={progress}
								paused
							>
								<div className="layer master" />
							</Tween>
							<Tween
								to={{
									backgroundPosition: `0% 200px`
								}}
								totalProgress={progress}
								paused
							>
								<div className="layer staff" />
							</Tween>
							<div className="ceiling" />
							<div className="floor" />
						</div>
					)}
				</Scene>
				<Scene
					triggerElement="#trigger"
					triggerHook="onLeave"
					duration={1771}
					offset={5709}
				>
					{progress => (
						<div id="section5" className="section_box">
							<Info {...info[3]} fadeIn={!!progress} />
							<Tween
								to={{
									backgroundPosition: `50% 650px`
								}}
								totalProgress={progress}
								paused
							>
								<div className="section section5" />
							</Tween>
							<div className="ceiling" />
							<Tween
								to={{
									backgroundPosition: `0% 400px`
								}}
								totalProgress={progress}
								paused
							>
								<div className="layer gold-coin" />
							</Tween>
							<Tween
								to={{
									backgroundPosition: `0% -100px`
								}}
								totalProgress={progress}
								paused
							>
								<div className="layer hand" />
							</Tween>
							<div className="floor" />
						</div>
					)}
				</Scene>
				<Scene
					triggerElement="#trigger"
					triggerHook="onLeave"
					duration={1412}
					offset={7480}
				>
					{progress => (
						<div id="section6" className="section_box">
							<Info {...info[4]} fadeIn={!!progress} />
							<Tween
								to={{
									backgroundPosition: `50% 210px`
								}}
								totalProgress={progress}
								paused
							>
								<div className="section section6" />
							</Tween>
							<div className="ceiling" />
							<Tween
								to={{
									backgroundPositionY: `350px`
								}}
								totalProgress={progress}
								paused
							>
								<div className="layer gold-coin-2" />
								<div className="layer gold-coin-3" />
							</Tween>
							<div className="floor" />
						</div>
					)}
				</Scene>
				<div className="section_box" id="section7">
					<div className="pa turntable2" />
					{props.children}
				</div>
			</Controller>
		</div>
	);
}
