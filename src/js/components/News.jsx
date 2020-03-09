import React, { useState } from "react";
import { news } from "../configs/data";
import "../../styles/News.css";

export default function News() {
	const [tab, setTab] = useState(0);
	const [active, setActive] = useState(true);
	const tabList = ["全部", "新闻", "公告", "攻略"];

	function handleTab(value,e) {
		e.preventDefault();
		if (value !== tab) {
			setTab(value);
			setActive(false);
			setTimeout(() => {
				setActive(true);
			}, 100);
		}
	}

	function handleClick(e) {
		e.preventDefault();
	}

	return (
		<div className="pa news">
			<div className="pa note-6">
				<div className="pa img english-words english-words-6" />
			</div>
			<div className="pa news-list-tab">
				{tabList.map((value, index) => (
					<a
						onClick={handleTab.bind(this, index)}
						key={index}
						className={tab === index?"active": ""}
						href="/#"
					>
						{value}
						<i />
					</a>
				))}
				<a
					href="https://cave2.leiting.com/news"
					target="_blank"
					href="/#"
					onClick={handleClick}
				>
					更多
					<i />
				</a>
			</div>
			<div className="pa news-queue ">
				<div className={`news-list-queue ${active ? "active" : ""}`}>
					{news &&
						news[tab].map((item, index) => (
							<a href={item.url} target="_blank" key={index}>
								<span>{item.title}</span>
								<em>{item.time}</em>
								<i />
							</a>
						))}
				</div>
			</div>
		</div>
	);
}
