import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Router, Scene} from "react-native-router-flux";

import Login from "./../screens/Login";
import Signup from './../screens/Signup';
import Home from './../screens/Home';

export default class Routes extends React.Component {
  render() {
    return (
        <Router>
                <Scene>
                    <Scene key="auth" hideNavBar={true} initial={!this.props.loggedIn} >
                        <Scene key="login" component={Login} title="Login" />
                        <Scene key="signup" component={Signup} title="Signup" />
                    </Scene> 
                    <Scene key="user" hideNavBar={true} initial={this.props.loggedIn}>
                        <Scene key="home" component={Home} title="Home"/>
                    </Scene>
                </Scene>
        </Router>
    );
  }
}

{/* <Scene key="user" hideNavBar={true} initial={loggedIn}>
                        <Scene key="dashboard" component={Dashboard} title="Dashboard"/>
                        <Scene tabs key="createEvent" hideNavBar={true} hideTabBar={true} swipeEnabled={false} tabBarPosition="bottom">
                        <Scene key="firstScreen" hideNavBar={true} component={EventFirstScreen} />
                        <Scene key="secondScreen" hideNavBar={true} component={EventSecondScreen} />
                    </Scene> */}


