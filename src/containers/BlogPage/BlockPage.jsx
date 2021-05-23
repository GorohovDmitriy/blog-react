import React, { Component } from 'react';
import axios from 'axios';
import LinearProgress from '@material-ui/core/LinearProgress';
import { BlogCart } from './components/BlogCart.jsx';
import { AddPostForm } from './components/AddPostForm.jsx';
import { EditPostForm } from './components/EditPostForm.jsx';

import './BlockPage.css';

let source;


export class BlockPage extends Component {

	state = {
		showAddForm: false,
		showEditForm: false,
		blogArr: [],
		isPanding: false,
		selectedPost: {},
	}

	fetchPosts = () => {
		source = axios.CancelToken.source();
		let config = { cancelToken: source.token }
		axios.get('https://60a9186c20a6410017306b45.mockapi.io/blog', config)
			.then((response) => {
				this.setState({
					blogArr: response.data,
					isPanding: false
				})
			}).catch((err) => {
				console.log(err)
			})
	}
	componentDidMount() {
		this.fetchPosts()
	}
	componentWillUnmount() {
		if (source) {
			source.cancel()
		}
	}

	likePost = (blogPost) => {
		const temp = { ...blogPost }
		temp.liked = !temp.liked
		axios.put(`https://60a9186c20a6410017306b45.mockapi.io/blog/${blogPost.id}`, temp)
			.then((response) => {
				this.fetchPosts()
				console.log(response.data)
			})
			.catch((err) => {
				console.log(err)
			})
	}

	deletePost = (blogPost) => {
		if (window.confirm(`Вы действительно хотите удалить ${blogPost.title} ?`)) {
			this.setState({
				isPanding: true
			})
			axios.delete(`https://60a9186c20a6410017306b45.mockapi.io/blog/${blogPost.id}`)
				.then((response) => {
					console.log('post udalen ', response)
					this.fetchPosts()
				})
				.catch((err) => {
					console.log(err)
				})
		}
	}

	addNewBlogPost = (blogPost) => {
		this.setState({
			isPanding: true
		})
		axios.post('https://60a9186c20a6410017306b45.mockapi.io/blog/', blogPost)
			.then((response) => {
				console.log('dobavili post', response.data)
				this.fetchPosts()
			})
			.catch((err) => {
				console.log(err)
			})
	}

	editBlogPost = (updatedBlogPost) => {
		this.setState({
			isPanding: true
		})
		axios.put(`https://60a9186c20a6410017306b45.mockapi.io/blog/${updatedBlogPost.id}`, updatedBlogPost)
			.then((response) => {
				this.fetchPosts()
			})
			.catch((err) => {
				console.log(err)
			})
	}

	handleAddFormShow = () => {
		this.setState({
			showAddForm: true
		})
	}

	handleAddFormHide = () => {
		this.setState({
			showAddForm: false
		})
	}
	handleEditFormShow = () => {
		this.setState({
			showEditForm: true
		})
	}
	handleEditFormHide = () => {
		this.setState({
			showEditForm: false
		})
	}
	handleSelectPost = (blogPost) => {
		this.setState({
			selectedPost: blogPost
		})
	}

	render() {
		const blockPosts = this.state.blogArr.map((item) => {
			return (
				<BlogCart
					key={item.id}
					title={item.title}
					description={item.description}
					liked={item.liked}
					likePost={() => this.likePost(item)}
					deletePost={() => this.deletePost(item)}
					handleEditFormShow={this.handleEditFormShow}
					handleSelectPost={() => this.handleSelectPost(item)}
				/>
			)
		})

		if (this.state.blogArr.length === 0)
			return <h1>Loading data...</h1>

		const postOpacity = this.state.isPanding ? 0.5 : 1

		return (
			<>
				{this.state.showAddForm &&
					<AddPostForm
						blogArr={this.state.blogArr}
						addNewBlogPost={this.addNewBlogPost}
						handleAddFormHide={this.handleAddFormHide}
					/>
				}

				{
					this.state.showEditForm && (
						<EditPostForm
							handleEditFormHide={this.handleEditFormHide}
							selectedPost={this.state.selectedPost}
							editBlogPost={this.editBlogPost}
						/>
					)
				}

				<>
					<h1>Single Blog</h1>
					<div className="addNewPost">
						<button
							onClick={this.handleAddFormShow}
							className="blackBtn">
							Create new post
						</button>
					</div>
					{
						this.state.isPanding && <LinearProgress />
					}
					<div className="posts" style={{ opacity: postOpacity }}>
						{blockPosts}
					</div>
				</>
			</>
		)
	}
}