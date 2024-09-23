import ImmoLogo from "../Icons/ImmoLogo";
import ChatUI from "../Icons/ChatUI";
import Building from "../Icons/Building";
import Elevator from "../Icons/Elevator";
import Clipbaord from "../Icons/Clipboard";
import EcologyBook from "../Icons/EcologyBook";
import Compass from "../Icons/Compass";
import Golf from "../Icons/Golf";
import { ChevronDown } from "lucide-react";
import MenuItem from "./MenuItem/MenuItem";

const MenuItemsArray = [
	{
		title: "Immobilienlexikon",
		tag: "KI",
		icon: <Building />,
		description: "Immobilienwissen für alle Fälle.",
	},
	{
		title: "Preisschätzung",
		tag: "LINK",
		icon: <Elevator />,
		description: "Den Wert Ihres Hauses schätzen lassen.",
	},
	{
		title: "Checklisten",
		icon: <Clipbaord />,
		tag: "PDF",
		tagIcon: <ChevronDown width={10} height={12} strokeWidth={3} />,
		description: "Praktische Checklisten für jeden Schritt.",
	},
	{
		title: "Ratgeber",
		icon: <EcologyBook />,
		tag: "PDF",
		tagIcon: <ChevronDown width={10} height={12} strokeWidth={3} />,
		description: "Immobilien-Expertenrat für Eigentümer.",
	},
	{
		title: "Mandatsnavigator",
		tag: "KI",
		icon: <Compass />,
		description: "Verständlich zum Verkaufsabschluss.",
	},
	{
		title: "Wohntraumfinder",
		tag: "KI",
		icon: <Golf />,
		description: "Zum Traumheim mit KI-Unterstützung.",
	},
];
const SideBar = () => {
	return (
		<div className="sidebar">
			<div className="sidebar-header">
				<div className="sidebar-header-right">
					<ChatUI />
					<span className="tag">NACHTMODUS</span>
				</div>
			</div>
			<div className="sidebar-logo">
				<ImmoLogo />
			</div>

			<div className="sidebar-menu">
				{MenuItemsArray.map((item, index) => {
					return <MenuItem key={index} props={item} />;
				})}
			</div>
		</div>
	);
};

export default SideBar;
