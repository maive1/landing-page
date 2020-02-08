import React from "react";
import PropTypes from "prop-types";

const Card = props => {
	return (
		<div>
			<img
				src={props.image}
				className="card-img-top"
				alt={props.imageName}
			/>
			<div className="card-body">
				<h5 className="card-title">{props.title}</h5>
				<p className="card-text">{props.description}</p>
				<a href={props.link} className="btn btn-primary">
					{props.textLink}
				</a>
			</div>
		</div>
	);
};

Card.propTypes = {
	image: PropTypes.string.isRequired,
	imageName: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	description: PropTypes.string,
	link: PropTypes.string.isRequired,
	textLink: PropTypes.string.isRequired
};
export default Card;
