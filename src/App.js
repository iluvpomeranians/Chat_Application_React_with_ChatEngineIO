import { ChatEngine } from "react-chat-engine";
import './App.css'
import ChatFeed from './components/ChatFeed'
import LoginForm from './components/LoginForm'

const App = () => {

    if(!localStorage.getItem('username')) return <LoginForm />

    return (
        <ChatEngine
                height="100vh"
                projectID="9004225e-604b-458b-a6b4-b943c9ab94a2"
                userName={localStorage.getItem('username')}
                userSecret={localStorage.getItem('password')}
                renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        />
    );

}


export default App; 