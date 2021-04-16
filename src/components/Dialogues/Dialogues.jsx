import classes from './Dialogues.module.css';

const Dialogues = (props) =>{
    return (
        <div className={ classes.dialogues }>
            <h3 className={ classes.title }>DIALOGUES</h3>
            <div className={ classes.users }>
                <ul>
                    <li> <a href="#"> Andrew</a></li>
                    <li> <a className={ classes.active } href="#"> Dmitriy</a></li>
                    <li> <a href="#"> Sasha</a></li>
                    <li> <a href="#"> Sceta</a></li>
                </ul>
            </div>

            <div className={ classes.dialogue }>
                <div className={ classes.notif }>
                   <div className={ classes.wrap}> <div className={ classes.userIcon }><div className={ classes.smile }></div></div><p>Dmitriy</p></div>
                    <div className={ classes.message }><p>Hello, Roma, how are you? Where have you been? </p></div>
                </div>
                <div className={ classes.notif }>
                   <div className={ classes.wrap}> <div className={ classes.userIcon }><div className={ classes.smile }></div></div><p>Me</p></div>
                    <div className={ classes.message }><p>Hello, Roma, how are you? Where have you been? </p></div>
                </div>
                <div className={ classes.notif }>
                   <div className={ classes.wrap}> <div className={ classes.userIcon }><div className={ classes.smile }></div></div><p>Dmitriy</p></div>
                    <div className={ classes.message }><p>Hello, Roma, how are you? Where have you been? </p></div>
                </div>
                <div className={ classes.notif }>
                   <div className={ classes.wrap}> <div className={ classes.userIcon }><div className={ classes.smile }></div></div><p>Me</p></div>
                    <div className={ classes.message }><p>Hello, Roma, how are you? Where have you been? </p></div>
                </div>
            </div>
        </div>
    );
}

export default Dialogues;