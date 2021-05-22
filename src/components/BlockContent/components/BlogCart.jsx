import './BlogCart.css';
import DeleteForeverRoundedIcon from '@material-ui/icons/DeleteForeverRounded';
import FavoriteIcon from '@material-ui/icons/Favorite';
import EditIcon from '@material-ui/icons/Edit';


export const BlogCart = ({
	title,
	description,
	liked,
	likePost,
	deletePost,
	handleEditFormShow,
	handleSelectPost
}) => {

	const showEditForm = () => {
		handleSelectPost();
		handleEditFormShow();
	}

	const heartFill = liked ? 'crimson' : 'black'

	return (
		<div className="post">
			<div className="post-content">
				<h2>{title}</h2>
				<p>{description}</p>
				<div>
					<button onClick={likePost}>
						<FavoriteIcon style={{ fill: heartFill }} />
					</button>
				</div>
			</div>
			<div className="blog-control">
				<button className="edit-btn" onClick={showEditForm}>
					<EditIcon />
				</button>
				<button className="btn-remove" onClick={deletePost}>
					<DeleteForeverRoundedIcon />
				</button>
			</div>
		</div>
	)

}