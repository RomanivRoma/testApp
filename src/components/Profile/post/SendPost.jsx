import React from 'react';
import classes from './SendPost.module.css';

const SendPost = (props) =>{
    let addNewPost = React.createRef();
    let addPost = (e) => {
        e.preventDefault();
        let text = addNewPost.current.value;
        props.addPost(text);
        addNewPost.current.value = "";
    }
    return(
        <div className={ classes.send }>
            <h3>My posts</h3>
            <form>
                <textarea ref={ addNewPost } placeholder="Your news..."></textarea>
                <div className={ classes.wrap}>
                    <button onClick={ addPost }>Send</button>
                </div>
            </form>
        </div>
    );
}

export default SendPost;