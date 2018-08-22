import React from 'react';
import {Text, View} from 'react-native';

import styles from "./../styles/styles";

class ListView extends React.Component {

    render(){
        return (
            <View style={styles.listViewContainer}>
                {this.props.children}
            </View>
        )
    }
}

export default ListView;
