import React from "react";
import Card from "./card";

let cardsFour = [
	{
		image: "https://via.placeholder.com/200.png/09f/fff",
		imageName: "Imagen 1",
		title: "Título 1",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac.",
		link: "https://www.google.com/",
		textLink: "Click me"
	},
	{
		image: "https://via.placeholder.com/200.png/09f/fff",
		imageName: "Imagen 2",
		title: "Título 2",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac.",
		link: "https://www.google.com/",
		textLink: "Click me"
	},
	{
		image: "https://via.placeholder.com/200.png/09f/fff",
		imageName: "Imagen 3",
		title: "Título 3",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac.",
		link: "https://www.google.com/",
		textLink: "Click me"
	},
	{
		image: "https://via.placeholder.com/200.png/09f/fff",
		imageName: "Imagen 4",
		title: "Título 4",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac.",
		link: "https://www.google.com/",
		textLink: "Click me"
	}
];

const Cards = () => {
	const cardsAll = cardsFour.map((item, i) => {
		return (
			<div className="card" key={i}>
				<Card
					image={item.image}
					imageName={item.imageName}
					title={item.title}
					link={item.link}
					textLink={item.textLink}
				/>
			</div>
		);
	});
	return <div className="card-deck col-lg-12">{cardsAll}</div>;
};

export default Cards;
