import './BlogCart.css';
import DeleteForeverRoundedIcon from '@material-ui/icons/DeleteForeverRounded';
import FavoriteIcon from '@material-ui/icons/Favorite';


export const BlogCart = ({ title, description, liked, likePost, deletePost }) => {

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
			<button className="btn-remove" onClick={deletePost}>
				<DeleteForeverRoundedIcon />
			</button>
		</div>
	)

}