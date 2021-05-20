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

	handlePostDescChange = e => {
		this.setState({
			postDescription: e.target.value
		})
	}

	render() {
		return (
			<>
				<form action="" className="form">
					<button
						onClick={this.handleAddFormHide}
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
						>
						</input>
					</div>
					<div>
						<textarea className="addFormInput"
							name="postDescription"
							placeholder="Post description"
							value={this.state.postDescription}
							onChange={this.handlePostDescChange}
						/>
					</div>
					<div>
						<button
							onClick={this.handleAddFormHide}
							className="blackBtn"
							type="button">
							Add post
						</button>
					</div>
				</form>
				<div onClick={this.handleAddFormHide} className="overlay"></div>
			</>
		)
	}
}