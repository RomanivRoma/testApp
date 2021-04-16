import classes from './Post.module.css';

const Post = (props) =>{
    return (
        <div className= {classes.posts}>
            <div className={classes.post}>
                <img className={classes.ava} src="https://www.thesprucepets.com/thmb/GLarzZ5ILugQfIv8Epmo9G-6hxY=/450x0/filters:no_upscale():max_bytes(150000):strip_icc()/adorable-white-pomeranian-puppy-spitz-921029690-5c8be25d46e0fb000172effe.jpg"></img>
                <p>{props.post}</p>
            </div>
        </div>
    );
}

export default Post;