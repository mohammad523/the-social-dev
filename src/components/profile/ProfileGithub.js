/** @format */

import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import { getGithubRepos } from "../../actions/profile";
import { withRouter } from "react-router-dom";

const ProfileGithub = ({ username, getGithubRepos, repos }) => {
	useEffect(() => {
		getGithubRepos(username);
	}, [getGithubRepos]);

	return (
		<div className='profile-github'>
			<h2 className=''>
				{repos === null ? (
					<Spinner />
				) : (
					repos.map((repo) => {
						return (
							<div className=''>
								<div>
									<h4>
										<a href={repo.html_url}>
											{repo.name}
											{repo.name}
										</a>
									</h4>
									<p>{repo.description}</p>
								</div>
								<div>
									<ul>
										<li className=''>Stars: {repo.stargazers_count}</li>
									</ul>
									<ul>
										<li className=''>Watchers: {repo.watchers_count}</li>
									</ul>
									<ul>
										<li className=''>Forks: {repo.forks_count}</li>
									</ul>
								</div>
							</div>
						);
					})
				)}
			</h2>
		</div>
	);
};

ProfileGithub.propTypes = {
	getGithubRepos: PropTypes.func.isRequired,
	repos: PropTypes.array.isRequired,
	username: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
	repos: state.profile.repos,
});

export default connect(mapStateToProps, { getGithubRepos })(ProfileGithub);
