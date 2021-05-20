import './AddPostForm.css';
import HighlightOffRoundedIcon from '@material-ui/icons/HighlightOffRounded';

export const AddPostForm = ({ handleAddFormHide }) => {
	return (
		<>
			<from action="" className="form">
				<button onClick={handleAddFormHide} className="close">
					<HighlightOffRoundedIcon />
				</button>
				<h2>Post creation</h2>
				<div>
					<input className="addFormInput" type="text" name="postTitle" placeholder="Post title"></input>
				</div>
				<div>
					<textarea className="addFormInput" name="postDescription" placeholder="Post description" />
				</div>
				<div>
					<button onClick={handleAddFormHide} className="blackBtn" type="button">Add post</button>
				</div>
			</from>
			<div className="overlay"></div>
		</>
	)
}