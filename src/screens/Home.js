import React from 'react';
import {Text, View, TouchableOpacity, DrawerLayoutAndroid} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {connect} from "react-redux";

import Sidebar from "./../components/Sidebar";
import ListView from "./../components/ListView";
import Toolbar from "./../components/Toolbar";

import styles from "./../styles/styles";

class Home extends React.Component {

    logoutRequest = () => {
        this.props.logoutUser()
    }

    render(){
        const navigationView = (<Sidebar/>);
        return (
            <DrawerLayoutAndroid
               drawerWidth={300}
               drawerPosition={DrawerLayoutAndroid.positions.Left}
               renderNavigationView={() => navigationView}>
                    <View style={styles.homeContainer}>
                        <Toolbar />
                        <ListView>
                            <TouchableOpacity style={styles.button} onPress={this.logoutRequest}>
                              <Text style={styles.buttonText}>Logout</Text>
                            </TouchableOpacity>
                        </ListView>
                        <TouchableOpacity style={styles.button} onPress={this.logoutRequest}>
                          <Text style={styles.buttonText}>Logout</Text>
                        </TouchableOpacity>
                    </View>
            </DrawerLayoutAndroid>
        )
    }
}

mapDispatchToProps = dispatch => ({
    logoutUser: () => dispatch({type: "LOGOUT"})
})

export default connect(null, mapDispatchToProps)(Home)
