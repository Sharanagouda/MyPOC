import React from 'react';
import {Text, View, TouchableOpacity, DrawerLayoutAndroid} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {connect} from "react-redux";
import {DrawerNavigator} from 'react-navigation'

import Sidebar from "./../components/Sidebar";
import ListView from "./../components/ListView";
import Toolbar from "./../components/Toolbar";
import Menifest from "./../components/Menifest";

import styles from "./../styles/styles";

class Home extends React.Component {

    logoutRequest = () => {
        this.props.logoutUser()
    }

    openDrawer = () => {
        this.drawer.openDrawer();
    }

    render(){
        const navigationView = (<Sidebar logoutUser={this.logoutRequest} />);
        return (
            <DrawerLayoutAndroid
            id="drwaer"
               drawerWidth={300}
               ref={node => this.drawer = node}
               drawerPosition={DrawerLayoutAndroid.positions.Left}
               renderNavigationView={() => navigationView}>
                    <View style={styles.homeContainer}>
                        <Toolbar openDrawer={this.openDrawer}/>
                        <ListView>
                            <Menifest
                              title="I am the first title"
                              subtitle="I am the first subtitle"
                              desc="I am first desc"
                              />
                        </ListView>
                        <ListView>
                            <Menifest
                              title="I am the sec title"
                              subtitle="I am the sec subtitle"
                              desc="I am sec desc"
                              />
                        </ListView>
                        <ListView>
                            <Menifest
                              title="I am the third title"
                              subtitle="I am the third subtitle"
                              desc="I am third desc"
                              />
                        </ListView>
                    </View>
            </DrawerLayoutAndroid>
        )
    }
}

mapDispatchToProps = dispatch => ({
    logoutUser: () => dispatch({type: "LOGOUT"})
})

export default connect(null, mapDispatchToProps)(Home)
