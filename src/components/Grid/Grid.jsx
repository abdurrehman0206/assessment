const Grid = () => {
	return (
		<div className="widget-grid">
			<div id="gi-1" className="grid-item-3x1">
				<div className="grid-item grid-item-2x1-short">
					<img src="./images/wg-1.png" alt="widget-1" />
				</div>
				<div className="grid-item grid-item-1x1-short">
					<img src="./images/wg-2.png" alt="widget-2" />
				</div>
			</div>
			<div id="gi-2" className="grid-item grid-item-1x1">
				<img src="./images/wg-3.png" alt="widget-3" />
			</div>
			<div id="gi-3" className="grid-item grid-item-1x1">
				<img src="./images/wg-4.png" alt="widget-4" />
			</div>
			<div id="gi-4" className="grid-item-4x1">
				<div className="grid-item grid-item-2x1">
					<p className="textblock">
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate
						ab, deleniti animi dicta unde earum maxime et, laudantium temporibus
						dolorum ratione beatae inventore accusantium harum saepe consequatur
						ea quas hic!
					</p>
				</div>
				<div className="grid-item grid-item-2x1-short">
					<img src="./images/wg-6.png" alt="widget-6" />
				</div>
			</div>
			<div id="gi-5" className="grid-item grid-item-2x2 video-container">
				<button className="nested-button">Nesting</button>
				<div className="video-overlay"></div>
				<video
					autoPlay={true}
					loop={true}
					muted={true}
					className="video-player"
				>
					<source src="./videos/video.mp4" type="video/mp4" />
					Your browser does not support the video tag.
				</video>
			</div>
			<div id="gi-6" className="grid-item grid-item-1x2">
				<blockquote cite="unknown" className="quote">
					<p>"The only way to do great work is to love what you do."</p>
				</blockquote>
			</div>
			<div id="gi-7" className="grid-item grid-item-1x1">
				<img src="./images/wg-5.png" alt="widget-5" />
			</div>
		</div>
	);
};

export default Grid;
