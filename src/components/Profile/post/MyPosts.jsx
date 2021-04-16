import classes from './MyPosts.module.css';
import Post from './Post/Post';


let posts = ["Hey, my name is Roma and it`s my first tweet", "Test post for my new app", ]

const MyPosts = () =>{
    return (
        <div className={ classes.posts}>
            <Post post={posts[0]} />
            <Post post={posts[1]}/>
    
        </div>
    );
}

export default MyPosts;