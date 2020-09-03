/** @format */

import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addPost } from "../../actions/post";

const PostForm = ({ addPost }) => {
	const [text, setText] = useState("");

	return (
		<div className='posts-form' style={{ backgroundColor: "none" }}>
			<form
				className='flex-form'
				style={{ width: "100%" }}
				onSubmit={(e) => {
					e.preventDefault();
					addPost({ text });
					setText("");
				}}
			>
				<input
					style={{ backgroundColor: "none" }}
					style={{ width: "70%" }}
					className='text-field'
					name='text'
					cols='30'
					rows='5'
					placeholder="What's on your mind?"
					value={text}
					onChange={(e) => setText(e.target.value)}
					required
				/>
				<input
					type='submit'
					className='btn btn-dark '
					value='Submit'
					style={{}}
				/>
			</form>
		</div>
	);
};

PostForm.propTypes = {
	addPost: PropTypes.func.isRequired,
};

export default connect(null, { addPost })(PostForm);
