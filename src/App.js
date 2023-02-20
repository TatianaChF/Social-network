import './App.css';
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Friends from "./components/Friends/Friends";
import UsersContainer from "./components/Users/UsersContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import React, {Component, lazy, Suspense} from "react";
import {connect, Provider} from "react-redux";
import {setInitializationApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import store from "./redux/redux-store";


const ProfileContainerHooks = lazy(() => import('./components/Profile/ProfileContainerHooks'));
const Login = lazy(() => import('./components/Login/Login'));

class App extends Component {
    componentDidMount() {
        this.props.setInitializationApp();
    }

    render() {

        /*if (!this.props.isInitialization) {
            return <Preloader />
        }*/

        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Suspense fallback={<div><Preloader /></div>}>
                        <Routes>
                            <Route exact path="/" element={<Navigate to={'/profile'} /> } />
                            <Route path="/profile"
                                   element={<ProfileContainerHooks/>}/>
                            <Route path="/profile/:userId/*"
                                   element={<ProfileContainerHooks/>}/>
                            <Route path="/dialogs"
                                   element={<DialogsContainer/>}/>
                            <Route path="/news" element={<News/>}/>
                            <Route path="/music" element={<Music/>}/>
                            <Route path="/settings" element={<Settings/>}/>
                            <Route path="/friends" element={<Friends/>}/>
                            <Route path="/users" element={<UsersContainer/>}/>
                            <Route path="/login" element={<Login/>}/>
                            <Route path="*" element={<div>404 NOT FOUND</div>}/>
                        </Routes>
                    </Suspense>
                </div>
            </div>
        );
    }
}

let mapStateToProps = (state) => ({
    isInitialization: state.app.isInitialization
})

let AppContainer = connect(mapStateToProps, {setInitializationApp})(App);

export const MainApp = (props) => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        </BrowserRouter>
    )
}