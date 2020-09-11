import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from 'react-router-dom';
import { HomeScreen } from '../pages/HomeScreen';
import { SearchScreen } from '../pages/SearchScreen';
import { DiscoverScreen } from '../pages/DiscoverScreen';
import { Header } from '../components/Header';


import { GameInfo } from '../components/GameInfo';
import { Footer } from '../components/Footer';


export const AppRouter = () => {
    return (
       
        <Router>
            <div>
                <Header/>
                <Switch>
                    <Route exact path = '/' component = {HomeScreen}/>
                    <Route exact path = "/gamedetails" component = {GameInfo}/>
                    <Route exact path = '/discover' component = {DiscoverScreen}/>
                    <Route exact path = "/search" component = {SearchScreen}/>
                </Switch>
                <Footer/>
            </div>
        </Router>
    )
}
