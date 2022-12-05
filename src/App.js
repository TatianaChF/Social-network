import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import {Route, Routes} from "react-router-dom";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Friends from "./components/Friends/Friends";
import UsersContainer from "./components/Users/UsersContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";

const App = (props) => {

  return (
          <div className="app-wrapper">
              <Header />
              <Navbar />
              <div className='app-wrapper-content'>
                  <Routes>
                      <Route path="/profile/:userId/*"
                             element={<ProfileContainer />} />
                      <Route path="/dialogs/*"
                             element={<DialogsContainer />} />
                      <Route path="/news" element={<News />} />
                      <Route path="/music" element={<Music />} />
                      <Route path="/settings" element={<Settings />} />
                      <Route path="/friends" element={<Friends />} />
                      <Route path="/users" element={<UsersContainer />} />
                  </Routes>
              </div>
          </div>
  );
}

export default App;
