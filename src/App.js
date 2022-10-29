import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import {Route, Routes} from "react-router-dom";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Friends from "./components/Friends/Friends";

const App = (props) => {
    debugger;
  return (
          <div className="app-wrapper">
              <Header />
              <Navbar />
              <div className='app-wrapper-content'>
                  <Routes>
                      <Route path="/profile"
                             element={<Profile store={props.store} />} />
                      <Route path="/dialogs/*"
                             element={<Dialogs store={props.store} />} />
                      <Route path="/news" element={<News />} />
                      <Route path="/music" element={<Music />} />
                      <Route path="/settings" element={<Settings />} />
                      <Route path="/friends" element={<Friends
                          data={props.store.friendsPage} />} />
                  </Routes>
              </div>
          </div>
  );
}

export default App;
