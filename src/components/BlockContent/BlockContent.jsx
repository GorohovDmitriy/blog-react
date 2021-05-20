import { posts } from '../../Shared/projectData.js';
import { BlogCart } from './components/BlogCart.jsx';
import { AddPostForm } from './components/AddPostForm.jsx';
import './BlockContent.css';
import React, { Component } from 'react';

export class BlockContent extends Component {

	state = {
		showAddForm: false,
		blogArr: JSON.parse(localStorage.getItem('blogPosts')) || posts
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
		return (
			<div>
				{this.state.showAddForm ? <AddPostForm handleAddFormHide={this.handleAddFormHide} /> : null}

				<h1>Single Blog</h1>
				<button onClick={this.handleAddFormShow} className="blackBtn" >Create new post</button>
				<div className="posts">
					{blockPosts}
				</div>
			</div>
		)
	}
}


