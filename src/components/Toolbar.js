import React, {Component} from "react";
import {View, Text, TouchableNativeFeedback, Image} from "react-native";

import styles from "./../styles/styles";

defaultProps = {
    title: "",
    navIcon: "",
    onIconClicked: ""
}

class Toolbar extends Component {



    render() {
        return (
          <View style={styles.toolbarContainer}>
            <TouchableNativeFeedback onPress={() => console.log("touched")}>
              <View style={styles.menubar}>
                  <Image
                    source={require('./../assets/menu.png')}
                  />
              </View>
              </TouchableNativeFeedback >
          </View>
        );
    }
}

export default Toolbar;

Toolbar.defaultProps = defaultProps;
