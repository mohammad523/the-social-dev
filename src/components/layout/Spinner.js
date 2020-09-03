/** @format */

import React from "react";
import spinner from "./spinner.gif";

export default () => (
	<>
		<img
			src={spinner}
			style={{
				width: "200px",
				margin: "auto",
				display: "block",
				gridArea: 2 / 10 / 2 / 10,
			}}
			alt='Loading...'
		/>
	</>
);
