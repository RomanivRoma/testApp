import classes from '../Dialogues.module.css';
import {NavLink} from 'react-router-dom';

const UserMessage = (props) =>{
    return (
        <li> <NavLink activeClassName={classes.activeMessage} to= {"/dialogues/" + props.id }> { props.name } </NavLink></li>
    );
}

export default UserMessage;