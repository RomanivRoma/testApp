import classes from './Header.module.css'

const Header = (props) =>{
    return(
        <header className={classes.header}>
                <a href="#"><img src="https://pngimg.com/uploads/facebook_logos/facebook_logos_PNG19754.png" className={classes.logo} /></a>
        </header>
    );
}


export default Header;
