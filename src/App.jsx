import React, { useState } from "react";
import LeftNav from "./js/components/LeftNav.jsx";
import Wrap from "./js/components/Wrap.jsx";
import Footer from "./js/components/Footer.jsx";
import Video from "./js/components/Video.jsx";
import Feature from "./js/components/Feature";
import SmoothlyScroll from "./js/components/SmoothlyScroll.jsx";
import News from "./js/components/News";
import WrapSwiper from "./js/components/WrapSwiper";

function App() {
	const [mask, setMask] = useState(0);

    /**
	 * 切换蒙层
     * @param value [number] 默认0, 可选0,1,2
     */
	function toggleMask(value = 0) {
		if (mask !== value) {
			setMask(value);
		}
	}

	return (
		<div className="App">
			<SmoothlyScroll />
			<LeftNav toggleMask={toggleMask} />
			<Wrap toggleVideo={toggleMask}>
				<News />
				<WrapSwiper />
			</Wrap>
			<Footer />
			<Video active={mask === 1} toggleMask={toggleMask} />
			<Feature active={mask === 2} toggleMask={toggleMask} />
		</div>
	);
}

export default App;
