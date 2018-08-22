import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import {Actions} from 'react-native-router-flux';
import {connect} from "react-redux";

import styles from "./../styles/styles";

class Login extends React.Component {

  signup = () => {
		Actions.signup()
  }

  loginRequest = () => {
      this.props.loginUser();
  }

  
  render() {
    return (
      <View style={styles.container}>
          <View style={styles.logoContainer}>
                <Text style={styles.logoBig}>Laser Ship</Text>	
                <Text style={styles.logoText}>Welcome to My app.</Text>	
          </View>
          <View style={styles.inputContainer}>
              <TextInput style={styles.inputBox} 
                  underlineColorAndroid='rgba(0,0,0,0)' 
                  placeholder="Email"
                  placeholderTextColor = "#ffffff"
                  selectionColor="#fff"
                  keyboardType="email-address"
                  onSubmitEditing={()=> this.password.focus()}
                  />
              <TextInput style={styles.inputBox}  
                  underlineColorAndroid='rgba(0,0,0,0)' 
                  placeholder="Password"
                  secureTextEntry={true}
                  placeholderTextColor = "#ffffff"
                  ref={(input) => this.password = input}
                  />  
              <TouchableOpacity style={styles.button} onPress={this.loginRequest}>
                <Text style={styles.buttonText}>Login</Text>
              </TouchableOpacity>     
          </View>
          <View style={styles.signupTextCont}>
            <Text style={styles.signupText}>Don't have an account yet?</Text>
            <TouchableOpacity onPress={this.signup}><Text style={styles.signupButton}> Signup</Text></TouchableOpacity>
          </View>
			</View>	
    );
  }
}

mapDispatchToProps = (dispatch) => ({
    loginUser: () => dispatch({type: "LOGIN"})
})

export default connect(null, mapDispatchToProps)(Login);
