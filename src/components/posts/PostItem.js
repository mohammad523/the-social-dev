/** @format */

import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import { connect } from "react-redux";
import { addLike, removeLike, deletePost } from "../../actions/post";

const PostItem = ({
	addLike,
	removeLike,
	deletePost,
	auth,
	post: { _id, text, name, avatar, user, likes, comments, date },
	showActions,
}) => (
	<div
		className='post  p-1 my-1'
		style={{ borderBottom: ".05px dashed black", margin: ".5em" }}
	>
		<div>
			<Link className='img-name' to={`/profile/${user}`}>
				<img className='round-img' src={avatar} alt='' />
				<h4>{name}</h4>
			</Link>
		</div>
		<div style={{ marginLeft: ".5rem" }}>
			<div className='post-and-date'>
				<p className='my-1'>{text}</p>
				<p className='post-date'>
					<Moment format='MM/DD/YYYY'>{date}</Moment>
				</p>
			</div>

			{showActions && (
				<div className='post-actions'>
					<button
						onClick={() => addLike(_id)}
						type='button'
						className='btn btn-light'
					>
						<i className='fas fa-thumbs-up' />{" "}
						<span>{likes.length > 0 && <span>{likes.length}</span>}</span>
					</button>
					<button
						onClick={() => removeLike(_id)}
						type='button'
						className='btn btn-light'
					>
						<i className='fas fa-thumbs-down' />
					</button>
					<Link
						to={`/posts/${_id}`}
						className='small-btn comments'
						style={{ fontSize: "15px" }}
					>
						Comments{" "}
						{comments.length > 0 && (
							<span className='comment-count'>({comments.length})</span>
						)}
					</Link>
					{!auth.loading && user === auth.user._id && (
						<button
							onClick={() => deletePost(_id)}
							type='button'
							className='btn btn-danger'
						>
							<i className='fas fa-times' />
						</button>
					)}
				</div>
			)}
		</div>
	</div>
);

PostItem.defaultProps = {
	showActions: true,
};

PostItem.propTypes = {
	post: PropTypes.object.isRequired,
	auth: PropTypes.object.isRequired,
	addLike: PropTypes.func.isRequired,
	removeLike: PropTypes.func.isRequired,
	deletePost: PropTypes.func.isRequired,
	showActions: PropTypes.bool,
};

const mapStateToProps = (state) => ({
	auth: state.auth,
});

export default connect(mapStateToProps, { addLike, removeLike, deletePost })(
	PostItem
);
