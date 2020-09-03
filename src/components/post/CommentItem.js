/** @format */

import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Moment from "react-moment";
import { deleteComment } from "../../actions/post";

const CommentItem = ({
	postId,
	comment: { _id, text, name, avatar, user, date },
	auth,
	deleteComment,
}) => (
	<div
		className='post bg-white p-1 my-1'
		style={{ borderBottom: ".05px dashed black", margin: ".5em" }}
	>
		<div>
			<Link className='img-name' to={`/profile/${user}`}>
				<img className='round-img' src={avatar} alt='' />
				<h4>{name}</h4>
			</Link>
		</div>
		<div className='comment-and-date-grid'>
			<p className='comment-text'>{text}</p>
			<p className='comment-date post-date'>
				<Moment format='MM/DD/YYYY'>{date}</Moment>
			</p>
			{!auth.loading && user === auth.user._id && (
				<button
					onClick={() => deleteComment(postId, _id)}
					type='button'
					className='comment-delete btn btn-danger'
				>
					<i className='fas fa-times' />
				</button>
			)}
		</div>
	</div>
);

CommentItem.propTypes = {
	postId: PropTypes.string.isRequired,
	comment: PropTypes.object.isRequired,
	auth: PropTypes.object.isRequired,
	deleteComment: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
	auth: state.auth,
});

export default connect(mapStateToProps, { deleteComment })(CommentItem);
