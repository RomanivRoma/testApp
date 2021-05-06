import classes from './MyPosts.module.css';
import Post from './Post/Post';



const MyPosts = (props) =>{
    let postsElement = props.posts.map( el => <Post post={el.body}> </Post> )
    return (
        <div className={ classes.posts}>
            { postsElement }
        </div>
    );
}

export default MyPosts;