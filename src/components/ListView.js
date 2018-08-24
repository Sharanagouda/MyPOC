import React from 'react';
import {Text, View} from 'react-native';

import styles from "./../styles/styles";

class ListView extends React.Component {

    render(){
        return (
            <View style={styles.listViewContainer}>
                <View style={styles.listViewWrapper}>
                   {this.props.children}
                </View>
            </View>
        )
    }
}

export default ListView;
