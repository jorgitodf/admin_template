import React, { Component } from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import Templates from './routes';
import Header from './../components/Header';
import Sidebar from './../components/Sidebar';

export default class AppLayout extends Component {
    render() {
        return (
            <div className="d-flex" id="main-wrapper">
                <Sidebar />
                    <div className="content-wrapper">
                    <Header />
                    <Switch>
                        {Templates.map((route, index) => (
                            <div className="content-dynamic">
                                <Route 
                                    key={index}
                                    path={route.path}
                                    exact={true} 
                                    render={props => <route.template {...props} /> } />
                            </div>
                        ))}
                    </Switch>
                </div>
            </div>
        )
    }
}
