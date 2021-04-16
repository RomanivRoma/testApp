import classes from './Profile.module.css';
import MyPosts from './post/MyPosts';
import SendPost from './post/SendPost';

const Profile = () =>{
    return (
        <div className={classes.content}>
            <SendPost />
            <img className= { classes.cover } src="https://previews.123rf.com/images/copestello/copestello1205/copestello120500004/13854171-city-park-in-the-begining-of-summer-very-wide-view.jpg"></img>
            <img className={ classes.avatar} src="https://www.thesprucepets.com/thmb/GLarzZ5ILugQfIv8Epmo9G-6hxY=/450x0/filters:no_upscale():max_bytes(150000):strip_icc()/adorable-white-pomeranian-puppy-spitz-921029690-5c8be25d46e0fb000172effe.jpg"></img>
            <div className={ classes.info}>
                <h3>Roman R.</h3>
                <p>Date of birth: 22 April</p>
                <p>City: Kyiv</p>
                <p>Education: KPI`2019 </p>
            <p>GitHub: <a href="github.com">github.com</a> </p>
            </div>
            
            <MyPosts />
      </div>
    );
}

export default Profile;