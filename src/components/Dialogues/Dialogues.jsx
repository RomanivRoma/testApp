import classes from './Dialogues.module.css';
import Message from './DialogueItem/Message';
import UserMessage from './DialogueItem/UserMessage';
import SendMessage from './DialogueItem/SendMessage';


const Dialogues = (props) =>{
    let userComponent = props.state.messages.map(user => <UserMessage name={props.state.users[user.id-1].name} id={ user.id }/> )
    let messageComponent = props.state.messages.map(user =>{
        return user.message.map(el => {
            if(user.id == window.location.pathname.split('/')[2]){
                return(          
                    <Message from={el.id !== 0 ? props.state.users[el.id-1].name : 'Me' } message={ el.text } />
                );
            }
        })
    })
    return (
        <div className={ classes.dialogues }>
            <h3 className={ classes.title }>DIALOGUES</h3>
            <div className={ classes.users }>
                <ul>
                   { userComponent }
                </ul>
            </div>

            <div className={ classes.dialogue }>
                { messageComponent }
                <SendMessage />
            </div>
            
        </div>
    );
}

export default Dialogues;