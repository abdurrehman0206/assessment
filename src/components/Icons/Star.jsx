const Star = ({ status, index }) => {
	const gradientStops = {
		none: {
			stop1: "#D9D9D9",
			stop2: "#D9D9D9",
			offset1: "0",
			offset2: "1",
		},
		half: {
			stop1: "#FEA500",
			stop2: "#D9D9D9",
			offset1: "0.5",
			offset2: "0.5",
		},
		full: {
			stop1: "#FEA500",
			stop2: "#FEA500",
			offset1: "1",
			offset2: "1",
		},
	};

	const { stop1, stop2, offset1, offset2 } = gradientStops[status];
	const gradientId = `gradient-${index}`;

	return (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M20.5151 0H3.401C1.74415 0 0.401001 1.34315 0.401001 3V20.2727C0.401001 21.9296 1.74415 23.2727 3.401 23.2727H20.5151C22.1719 23.2727 23.5151 21.9296 23.5151 20.2727V3C23.5151 1.34315 22.1719 0 20.5151 0Z"
				fill={`url(#${gradientId})`}
			/>
			<path
				d="M11.9581 15.9141L15.4734 14.9663L16.9421 19.7819L11.9581 15.9141ZM20.048 9.6897H13.8602L11.9581 3.49097L10.056 9.6897H3.86816L8.87621 13.5319L6.97411 19.7307L11.9822 15.8884L15.0641 13.5319L20.048 9.6897Z"
				fill="white"
			/>
			<defs>
				<linearGradient
					id={gradientId}
					x1="0.401001"
					y1="11.6364"
					x2="23.5151"
					y2="11.6364"
					gradientUnits="userSpaceOnUse"
				>
					<stop offset={offset1} stopColor={stop1} />
					<stop offset={offset2} stopColor={stop2} />
				</linearGradient>
			</defs>
		</svg>
	);
};

export default Star;
