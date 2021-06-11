import { Avatar, IconButton } from '@material-ui/core'
import { AttachFile, InsertEmoticon, Mic, MoreVert, SearchOutlined } from '@material-ui/icons';
import React, { useEffect, useState } from 'react'
import './Chat.css'

function Chat() {

    const [seed,setSeed] = useState("");
    const [input,setInput] = useState("");

    useEffect(()=>{
        setSeed(Math.floor(Math.random()*5000));
    },[]);

    const sendMessage = (e) =>{
        e.preventDefault();
        console.log(input)
        setInput("")
    }

    return (
        <div className="chat">
            
            <div className="chat_header">
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
                <div className="chat_headerInfo">
                    <h3>Room Name</h3>
                    <p>Last seen at..</p>
                </div>
                <div className="chat_headerRight">
                    <IconButton>
                        <SearchOutlined/>
                    </IconButton>
                    <IconButton>
                        <AttachFile/>
                    </IconButton>
                    <IconButton>
                        <MoreVert/>
                    </IconButton>
                </div>


            </div>

            <div className="chat_body">
                <p className={`chat_message ${true && "chat_reciever"}`}>
                     <span className="chat_name">Sameer</span>
                     hey guys
                     <span className="chat_timestamp">4:00 pm</span>
                </p>
              
            </div>

            <div className="chat_footer">
                <InsertEmoticon/>
                <form>
                    <input
                     value={input}
                     onChange={e => setInput(e.target.value)}
                     type="text"
                     placeholder="Send a message"/>

                    <button onClick={sendMessage} type="submit">Send a message</button>
                </form>
                <Mic/>
            </div>
            
        </div>
    )
}

export default Chat

