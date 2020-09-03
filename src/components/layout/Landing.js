/** @format */

import React from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const Landing = ({ isAuthenticated }) => {
	if (isAuthenticated) {
		return <Redirect to='/dashboard' />;
	}
	return (
		<div className='widget-inner wi-l'>
			<h1>The Social Dev</h1>
			<p className='lead'>The new social network, designed for developers.</p>
			<div className='btnLandingDiv'>
				<Link to='/login'>
					<button className='btnLanding'>Sign In</button>
				</Link>
				<br />
				<Link to='/register'>
					<button className='btnLanding'>Sign Up</button>
				</Link>
				<br />
			</div>
		</div>
	);
};
Landing.propTypes = {
	isAuthenticated: PropTypes.bool,
};
const mapStateToProps = (state) => ({
	isAuthenticated: state.auth.isAuthenticated,
});
export default connect(mapStateToProps)(Landing);
