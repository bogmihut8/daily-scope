import React, { Component } from 'react';
// import * as ReactDOM from 'react-dom';
// import logo from './logo.svg';
import './App.css';
import TasksContainer from './TasksContainer'

class App extends Component {
  render() {
    return (
      <section className="hero is-info is-large">
        
        <div className="hero-head">
          <nav className="navbar">
            <div className="container">
              <div className="navbar-brand">
                <h1 className="navbar-item">
                  Daily Scope
                </h1>
                <p className="navbar-item nav-text">List your today's shit</p>
                <span className="navbar-burger burger" data-target="navbarMenuHeroB">
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
              </div>
              <div id="navbarMenuHeroB" className="navbar-menu">
                <div className="navbar-end">
                  <a className="navbar-item is-active">
                    Today
                  </a>
                  <a className="navbar-item">
                    Pasts
                  </a>
                </div>
              </div>
            </div>
          </nav>
        </div>
        
        <div className="hero-body">
          <div className="container has-text-centered">
          <div className="columns">
            <div className="column is-three-fifths is-offset-one-fifth">
              <TasksContainer />
            </div>
          </div>
          </div>
        </div>
      
        <div className="hero-foot">
          <nav className="tabs is-boxed is-fullwidth">
            <div className="container has-text-centered">
              <p>&copy; Copyright Daily Scope 2018</p>
            </div>
          </nav>
        </div>
      </section>
    );
  }
}

export default App;
