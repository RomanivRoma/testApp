import classes from './Profile.module.css';
import MyPosts from './post/MyPosts';
import SendPost from './post/SendPost';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) =>{
    return (
        <div className={classes.content}>
            <ProfileInfo />
            <SendPost addPost={ props.addPost }/>
            <MyPosts posts={ props.state.posts }/>
      </div>
    );
}

export default Profile;