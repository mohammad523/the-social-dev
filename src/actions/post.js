/** @format */

import axios from "axios";
import { setAlert } from "./alert";
import {
	GET_POSTS,
	GET_POST,
	POST_ERROR,
	UPDATE_LIKES,
	DELETE_POST,
	ADD_POST,
	ADD_COMMENT,
	REMOVE_COMMENT,
	PROFILE_ERROR,
} from "./types";

const URL = "http://localhost:5000/api";

// Get posts
export const getPosts = () => async (dispatch) => {
	try {
		const res = await axios.get(`${URL}/posts`);

		dispatch({
			type: GET_POSTS,
			payload: res.data,
		});
	} catch (error) {
		dispatch({
			type: PROFILE_ERROR,
			payload: {
				msg: error.response.statusText,
				status: error.response.status,
			},
		});
	}
};

// Add Like
export const addLike = (id) => async (dispatch) => {
	try {
		const res = await axios.put(`${URL}/posts/like/${id}`);

		dispatch({
			type: UPDATE_LIKES,
			payload: { id, likes: res.data },
		});
	} catch (error) {
		dispatch({
			type: POST_ERROR,
			payload: {
				msg: error.response.statusText,
				status: error.response.status,
			},
		});
	}
};
// Add Like
export const removeLike = (id) => async (dispatch) => {
	try {
		const res = await axios.put(`${URL}/posts/unlike/${id}`);

		dispatch({
			type: UPDATE_LIKES,
			payload: { id, likes: res.data },
		});
	} catch (error) {
		dispatch({
			type: POST_ERROR,
			payload: {
				msg: error.response.statusText,
				status: error.response.status,
			},
		});
	}
};
// Delete Post
export const deletePost = (id) => async (dispatch) => {
	try {
		const res = await axios.delete(`${URL}/posts/${id}`);

		dispatch({
			type: DELETE_POST,
			payload: { id },
		});

		// dispatch(setAlert("Post Removed", "success"));
	} catch (error) {
		dispatch({
			type: POST_ERROR,
			payload: {
				msg: error.response.statusText,
				status: error.response.status,
			},
		});
	}
};
// Add post
export const addPost = (formData) => async (dispatch) => {
	const config = {
		headers: {
			"Content-Type": "application/json",
		},
	};
	try {
		const res = await axios.post(`${URL}/posts/`, formData, config);

		dispatch({
			type: ADD_POST,
			payload: res.data,
		});

		// dispatch(setAlert("Post Created", "success"));
	} catch (error) {
		dispatch({
			type: POST_ERROR,
			payload: {
				msg: error.response.statusText,
				status: error.response.status,
			},
		});
	}
};

// Get post with comments
export const getPost = (id) => async (dispatch) => {
	try {
		const res = await axios.get(`${URL}/posts/${id}`);

		dispatch({
			type: GET_POST,
			payload: res.data,
		});
	} catch (err) {
		dispatch({
			type: POST_ERROR,
			payload: { msg: err.response.statusText, status: err.response.status },
		});
	}
};

// Add comment
export const addComment = (postId, formData) => async (dispatch) => {
	const config = {
		headers: {
			"Content-Type": "application/json",
		},
	};
	try {
		const res = await axios.post(
			`${URL}/posts/comment/${postId}`,
			formData,
			config
		);

		dispatch({
			type: ADD_COMMENT,
			payload: res.data,
		});

		// dispatch(setAlert("Comment Added", "success"));
	} catch (error) {
		dispatch({
			type: POST_ERROR,
			payload: {
				msg: error.response.statusText,
				status: error.response.status,
			},
		});
	}
};
// Delete comment
export const deleteComment = (postId, commentId) => async (dispatch) => {
	try {
		const res = await axios.post(`${URL}/posts/comment/${postId}/${commentId}`);

		dispatch({
			type: REMOVE_COMMENT,
			payload: commentId,
		});

		dispatch(setAlert("Comment Removed", "success"));
	} catch (error) {
		dispatch({
			type: POST_ERROR,
			payload: {
				msg: error.response.statusText,
				status: error.response.status,
			},
		});
	}
};
