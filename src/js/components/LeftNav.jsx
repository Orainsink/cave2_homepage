import React, { useState } from "react";
import "../../styles/LeftNav.css";
import { leftList } from "../configs/data";

export default function LeftNav(props) {
	const { toggleMask } = props;
	const [active, setActive] = useState(0);

	function handleClick(item, e) {
		if (!item.url) e.preventDefault();
		if (item.showBtn && item.showBtn === "feature") {
            toggleMask(2);
		}
	}

	return (
		<div className="left-nav">
			{leftList.map(item => {
				return (
					<a
						href={item.url || ""}
						target={item.url ? "_blank" : ""}
						className={
							item.alwaysActive
								? "active"
								: item.id === active
								? "active"
								: ""
						}
						key={item.id}
						onMouseEnter={() => setActive(item.id)}
						onMouseLeave={() => setActive(0)}
						onClick={handleClick.bind(this, item)}
					>
						{item.text}
						<i />
						{item.img && <img src={item.img} alt="" />}
					</a>
				);
			})}
		</div>
	);
}
