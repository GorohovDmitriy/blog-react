import './EditPostForm.css'
import HighlightOffRoundedIcon from '@material-ui/icons/HighlightOffRounded'
import { Component } from 'react'

export class EditPostForm extends Component {
	state = {
		postTitle: this.props.selectedPost.title,
		postDescription: this.props.selectedPost.description,
	}

	handlePostTitleChange = (e) => {
		this.setState({
			postTitle: e.target.value,
		})
	}

	handlePostDescChange = (e) => {
		this.setState({
			postDescription: e.target.value,
		})
	}

	savePost = (e) => {
		e.preventDefault()
		const post = {
			id: this.props.selectedPost.id,
			title: this.state.postTitle,
			description: this.state.postDescription,
			liked: this.props.selectedPost.liked,
		}
		this.props.editBlogPost(post)
		this.props.handleEditFormHide()
	}
	handleEscape = (e) => {
		if (e.key === 'Escape') {
			this.props.handleEditFormHide()
		}
	}
	componentDidMount() {
		window.addEventListener('keyup', this.handleEscape)
	}
	componentWillUnmount() {
		window.removeEventListener('keyup', this.handleEscape)
	}

	render() {
		const handleEditFormHide = this.props.handleEditFormHide

		return (
			<>
				<form action='' className='form' onSubmit={this.savePost}>
					<button onClick={handleEditFormHide} className='close'>
						<HighlightOffRoundedIcon />
					</button>
					<h2>Post editing</h2>
					<div>
						<input
							className='EditFormInput'
							type='text'
							name='postTitle'
							placeholder='Post title'
							value={this.state.postTitle}
							onChange={this.handlePostTitleChange}
							required
						></input>
					</div>
					<div>
						<textarea
							className='EditFormInput'
							name='postDescription'
							placeholder='Post description'
							value={this.state.postDescription}
							onChange={this.handlePostDescChange}
							rows={6}
							required
						/>
					</div>
					<div>
						<button className='blackBtn' type='submit'>
							Save changes
						</button>
					</div>
				</form>
				<div className='overlay' onClick={handleEditFormHide}></div>
			</>
		)
	}
}
