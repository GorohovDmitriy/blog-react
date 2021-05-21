import './AddPostForm.css';
import HighlightOffRoundedIcon from '@material-ui/icons/HighlightOffRounded';
import { Component } from 'react';

export class AddPostForm extends Component {
	state = {
		postTitle: '',
		postDescription: '',
	}

	handlePostTitleChange = (e) => {
		this.setState({
			postTitle: e.target.value
		})
	}

	handlePostDescChange = (e) => {
		this.setState({
			postDescription: e.target.value
		})
	}

	createPost = (e) => {
		e.preventDefault()
		const post = {
			id: this.props.blogArr.length + 1,
			title: this.state.postTitle,
			description: this.state.postDescription,
			liked: false
		}
		this.props.addNewBlogPost(post);
		this.props.handleAddFormHide()

	}
	// componentDidMount() {
	// 	console.log('sssss')
	// }
	// componentDidUpdate() {
	// 	console.log('dsdsdsdsdsd')
	// }
	// componentWillUnmount() {
	// 	console.log('cxcxcxcxcxc')
	// }

	render() {
		const handleAddFormHide = this.props.handleAddFormHide;

		return (
			<>
				<form action="" className="form" onSubmit={this.createPost}>
					<button
						onClick={handleAddFormHide}
						className="close">
						<HighlightOffRoundedIcon />
					</button>
					<h2>Post creation</h2>
					<div>
						<input className="addFormInput"
							type="text"
							name="postTitle"
							placeholder="Post title"
							value={this.state.postTitle}
							onChange={this.handlePostTitleChange}
							required
						>
						</input>
					</div>
					<div>
						<textarea className="addFormInput"
							name="postDescription"
							placeholder="Post description"
							value={this.state.postDescription}
							onChange={this.handlePostDescChange}
							required
						/>
					</div>
					<div>
						<button
							className="blackBtn"
							type="submit">
							Add post
					</button>
					</div>
				</form>
				<div className="overlay" onClick={handleAddFormHide}></div>
			</>
		)
	}
};