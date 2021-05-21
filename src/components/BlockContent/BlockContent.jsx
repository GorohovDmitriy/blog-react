
import { BlogCart } from './components/BlogCart.jsx';
import { AddPostForm } from './components/AddPostForm.jsx';
import axios from 'axios';
import React, { Component } from 'react';


import './BlockContent.css';

export class BlockContent extends Component {

	state = {
		showAddForm: false,
		blogArr: []
	}

	likePost = (pos) => {
		const temp = [...this.state.blogArr];
		temp[pos].liked = !temp[pos].liked

		this.setState({
			blogArr: temp
		})

		localStorage.setItem('blogPosts', JSON.stringify(temp))
	}

	deletePost = pos => {
		if (window.confirm(`Вы действительно хотите удалить ${this.state.blogArr[pos].title} ?`)) {
			const temp = [...this.state.blogArr]
			temp.splice(pos, 1)

			this.setState({
				blogArr: temp
			})

			localStorage.setItem('blogPosts', JSON.stringify(temp))
		}
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

	handleEscape = (e) => {
		if (e.key === 'Escape' && this.state.showAddForm) {
			this.handleAddFormHide()
		}
	}

	addNewBlogPost = (blogPost) => {
		this.setState((state) => {
			const posts = [...state.blogArr];
			posts.push(blogPost)
			localStorage.setItem('blogPosts', JSON.stringify(posts))
			return {
				blogArr: posts
			}
		})
	}

	componentDidMount() {
		axios.get('https://5fb3db44b6601200168f7fba.mockapi.io/api/posts')
			.then((response) => {
				this.setState({
					blogArr: response.data
				})
			})
			.catch((err) => {
				console.error(err)
			})
		window.addEventListener('keyup', this.handleEscape)
	}
	componentWillUnmount() {
		window.removeEventListener('keyup', this.handleEscape)
	}

	render() {
		const blockPosts = this.state.blogArr.map((item, pos) => {
			return (
				<BlogCart
					key={item.id}
					title={item.title}
					description={item.description}
					liked={item.liked}
					likePost={() => this.likePost(pos)}
					deletePost={() => this.deletePost(pos)}
				/>
			)
		})

		if (this.state.blogArr.length === 0)
			return <h1>Loading data...</h1>


		return (
			<>
				{this.state.showAddForm &&
					<AddPostForm
						blogArr={this.state.blogArr}
						addNewBlogPost={this.addNewBlogPost}
						handleAddFormHide={this.handleAddFormHide}
					/>
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
					<div className="posts">
						{blockPosts}
					</div>
				</>
			</>
		)
	}
}


