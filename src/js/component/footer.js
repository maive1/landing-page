import React from "react";
import propTypes from "prop-types";

const Footer = props => {
	return (
		<footer className="page-footer font-small blue pt-4">
			<div className="container-fluid text-center text-md-left">
				<div className="row">
					<div className="col-md-6 mt-md-0 mt-3">
						<h5 className="text-uppercase font-weight-bold">
							{props.title}
						</h5>
						<p>{props.text}</p>
					</div>
				</div>
			</div>
			<div className="footer-copyright text-center py-3">
				© 2020 Copyright:
				<a href={props.link}>{props.linkName}</a>
			</div>
		</footer>
	);
};

Footer.propTypes = {
	title: propTypes.string.isRequired,
	text: propTypes.string.isRequired,
	link: propTypes.string.isRequired,
	linkName: propTypes.string.isRequired
};

export default Footer;
