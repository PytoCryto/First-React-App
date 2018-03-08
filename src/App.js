import React, { Component } from 'react';
import {
    Route,
    NavLink,
    HashRouter
} from 'react-router-dom';
import About from './modules/About';
import List from './modules/List';
import './styles/app.css';

class App extends Component {
    render() {
        const Title = () => {
            return (
                <span className="mdl-layout__title">My first application with React, Aw Yiss!</span>
            );
        };

        const Navigation = () => {
            return (
                <nav className="mdl-navigation">
                    <NavLink exact to="/" className="mdl-navigation__link">List</NavLink>
                    <NavLink to="/about" className="mdl-navigation__link">About</NavLink>
                </nav>
            );
        };

        return (
            <HashRouter>
                <div className="mdl-layout mdl-js-layout">
                    <header className="mdl-layout__header mdl-layout__header--scroll">
                        <img className="mdl-layout-icon" alt={""}></img>
                        <div className="mdl-layout__header-row">
                            <Title />
                            <div className="mdl-layout-spacer"></div>
                            <Navigation />
                        </div>
                    </header>
                    <div className="mdl-layout__drawer">
                        <Title />
                        <Navigation />
                    </div>
                    <main className="mdl-layout__content">
                        <Route exact path="/" component={List} />
                        <Route path="/about" component={About} />
                    </main>
                </div>
            </HashRouter>
        );
    }
}

export default App;
