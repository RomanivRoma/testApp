import classes from './SendPost.module.css';

const SendPost = () =>{
    return(
        <div className={ classes.send }>
            <h3>My posts</h3>
            <form>
                <textarea placeholder="Your news..."></textarea>
                <div className={ classes.wrap}>
                    <button>Send</button>
                </div>
            </form>
        </div>
);
}

export default SendPost;