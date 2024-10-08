import Footer from "./components/Footer/Footer";
import Grid from "./components/Grid/Grid";
import TopBanner from "./components/TopBanner/TopBanner";
import SideBar from "./components/SideBar/SideBar";
function App() {
	return (
		<div className="App">
			<div className="wrapper">
				<SideBar />
				<div className="widget-view">
					<TopBanner />
					<div className="widget-grid-wrapper">
						<Grid />
					</div>
					<Footer />
				</div>
			</div>
		</div>
	);
}

export default App;
