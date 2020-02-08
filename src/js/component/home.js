import React from "react";
//import Navbar from './navbar';
//import Warning from './warning';
import Cards from "./cards";
import Footer from "./footer";

const Home = () => {
	return (
		<div className="container">
			<div className="row">
				<div className="col-md-12">clase navbar</div>
			</div>
			<div className="row">
				<div className="col-md-12">Warning</div>
			</div>
			<div className="row">
				<Cards />
			</div>
			<div className="row">
				<div className="col-md-12 my-4">
					<Footer
						title="Contacts"
						text="Email: support@landingpage.com"
						link="www.google.com"
						linkName=" Click me"
					/>
				</div>
			</div>
		</div>
	);
};

export default Home;
