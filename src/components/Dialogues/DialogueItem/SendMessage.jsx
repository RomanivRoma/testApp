import React from 'react';
import classes from './SendMessage.module.css';

const SendMessage = (props) =>{
    let sendNewMessage = React.createRef();
    let sendMessage = () =>{

    }
    return(
        <div className={ classes.send }>
            <h3></h3>
            <form>
                <textarea ref={ sendNewMessage } placeholder="Message..."></textarea>
                <div className={ classes.wrap}>
                    <button onClick={ sendMessage }>Send</button>
                </div>
            </form>
        </div>
    );
}

export default SendMessage;