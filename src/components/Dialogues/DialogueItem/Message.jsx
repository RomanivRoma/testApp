// import classes from './Message.module.css';
import classes from '../Dialogues.module.css';

const Message = (props) =>{
    return (
        <div className={ classes.notif }>
            <div className={ classes.wrap}> <div className={ classes.userIcon }><div className={ classes.smile }></div></div><p>{ props.from }</p></div>
            <div className={ classes.message }><p>{ props.message } </p></div>
        </div>
    );
}

export default Message;