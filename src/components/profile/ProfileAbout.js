/** @format */

import React from "react";
import PropTypes from "prop-types";

const ProfileAbout = ({
	profile: {
		bio,
		skills,
		user: { name },
	},
}) => {
	return (
		<>
			<div class=''>
				{bio && (
					<>
						<h2 class=''>{name.trim().split(" ")[0]}'s Bio</h2>
						<p>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed
							doloremque nesciunt, repellendus nostrum deleniti recusandae nobis
							neque modi perspiciatis similique?
						</p>
						<div class='line'></div>
					</>
				)}
				<h2 className=''>Skill Set</h2>
				<div className='skills'>
					{skills.map((skill, index) => (
						<div key={index} className=''>
							<i className='fas fa-check'></i>
							{skill}
						</div>
					))}
				</div>
			</div>
		</>
	);
};

ProfileAbout.propTypes = {
	profile: PropTypes.object.isRequired,
};

export default ProfileAbout;
