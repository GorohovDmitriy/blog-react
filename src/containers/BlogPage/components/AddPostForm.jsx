import './AddPostForm.css'
import HighlightOffRoundedIcon from '@material-ui/icons/HighlightOffRounded'
import { Component } from 'react'

export class AddPostForm extends Component {
	state = {
		postTitle: '',
		postDescription: '',
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

	createPost = (e) => {
		e.preventDefault()
		const post = {
			title: this.state.postTitle,
			description: this.state.postDescription,
			liked: false,
		}
		this.props.addNewBlogPost(post)
		this.props.handleAddFormHide()
	}
	handleEscape = (e) => {
		if (e.key === 'Escape') {
			this.props.handleAddFormHide()
		}
	}
	componentDidMount() {
		window.addEventListener('keyup', this.handleEscape)
	}
	componentWillUnmount() {
		window.removeEventListener('keyup', this.handleEscape)
	}

	render() {
		const handleAddFormHide = this.props.handleAddFormHide

		return (
			<>
				<form action='' className='form' onSubmit={this.createPost}>
					<button onClick={handleAddFormHide} className='close'>
						<HighlightOffRoundedIcon />
					</button>
					<h2>Post creation</h2>
					<div>
						<input
							className='addFormInput'
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
							className='addFormInput'
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
							Add post
            </button>
					</div>
				</form>
				<div className='overlay' onClick={handleAddFormHide}></div>
			</>
		)
	}
}
