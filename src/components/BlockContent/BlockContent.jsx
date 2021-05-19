import { posts } from '../../Shared/projectData.js';
import { BlogCart } from './components/BlogCart.jsx';
import './BlockContent.css';
import React, { Component } from 'react';

export class BlockContent extends Component {

	state = {
		showBlock: true,
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


	toggleBlock = () => {
		this.setState(({ showBlock }) => {
			return {
				showBlock: !showBlock
			}
		})
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
			<>
				<button onClick={this.toggleBlock}>
					{
						this.state.showBlock ? 'Hide Block' : 'Show Block'
					}
				</button>
				{
					this.state.showBlock ?
						<> <h1>Single Blog</h1>
							<div className="posts">
								{blockPosts}
							</div>
						</> : null
				}

			</>
		)
	}
}


