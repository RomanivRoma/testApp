import classes from  './Navigation.module.css';

const Navigation = () =>{
    return(
        <nav className={classes.nav}>
            <ul>
                <li className={ classes.active}><a href="/profile">Profile</a></li>
                <li><a href="/dialogues">Messages</a></li>
                <li><a href="/news">News</a></li>
                <li><a href="/music">Music</a></li>
                <li><a href="/settings">Settings</a></li>
            </ul>
      </nav>
    );
}

export default Navigation;