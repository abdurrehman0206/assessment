import { CircleHelp } from "lucide-react";
const TopBanner = () => {
	return (
		<div className="top-banner">
			<div className="banner-content-left">
				<h1 className="top-banner-title">
					Beginnen Sie Ihre Verkaufsreise 👋{" "}
				</h1>
				<p className="top-banner-description">
					Entdecken Sie mühelos jede Facette Ihres Verkaufsmandatsvertrags.
				</p>
			</div>
			<div className="banner-content-right">
				<button className="reload-button">
					<CircleHelp />
					Reload
				</button>
			</div>
		</div>
	);
};

export default TopBanner;
