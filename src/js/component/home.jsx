import React from "react";
import "../../styles/index.css";

const Home = (props) => {
	return (
		<div>
			<div className="numeros">
				<h2>Simple Counter</h2>
				{props.count}
				&nbsp;
				<i className="fab fa-html5"></i>
			</div>
		</div>
	);
};

export default Home;
