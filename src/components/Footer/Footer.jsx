import ImmoIQ from "../Vectors/ImmoIQ";
const Footer = () => {
	return (
		<div className="footer">
			<p className="footer-muted-text">Bereitgestellt von</p>
			<ImmoIQ />
			<p className="footer-text">
				IMMO<b>IQ</b>
			</p>
		</div>
	);
};

export default Footer;
