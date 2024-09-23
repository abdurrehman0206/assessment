const MenuItem = ({ props }) => {
	return (
		<div className="menu-item">
			<div className="menu-item-icon">{props.icon}</div>
			<div className="menu-item-info">
				<div className="menu-item-top-info">
					<h1>{props.title}</h1>
					<span className="tag">
						{props.tag} {props.tagIcon}
					</span>
				</div>
				<div className="menu-item-bottom-info">{props.description}</div>
			</div>
		</div>
	);
};

export default MenuItem;
