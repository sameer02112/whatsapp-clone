// import { Chat } from '@material-ui/icons';
import './App.css';
import Chat from './Chat';
import Sidebar from './Sidebar';

function App() {
  return (
    <div className="app">
    
      <div className="app_body">
        {/* sidebar */}
        <Sidebar/>

        {/* chatbar */}
        <Chat/>
        
      </div>
    </div>
  );
}

export default App;
