import classes from  './Navigation.module.css';
import {NavLink} from 'react-router-dom';

const Navigation = (props) =>{
    return(
        <nav className={classes.nav}>
            <NavLink activeClassName={classes.active} to="/profile">Profile</NavLink>
            <NavLink activeClassName={classes.active} to="/dialogues">Messages</NavLink>
            <NavLink activeClassName={classes.active} to="/news">News</NavLink>
            <NavLink activeClassName={classes.active} to="/music">Music</NavLink>
            <NavLink activeClassName={classes.active} to="/settings">Settings</NavLink>
      </nav>
    );
}

export default Navigation;