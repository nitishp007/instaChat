import { PrettyChatWindow } from 'react-chat-engine-pretty'
const ChatsPage = (props) => {
   
    return (

        <div style={{height: '100vh'}}>
            <PrettyChatWindow
                projectId="b0ff392a-01cf-4790-824a-40e7dff759d8"
                username={props.user.username}
                secret={props.user.secret}
                style={{height:"100%"}}
                />
        </div >    

    )
}
export default ChatsPage