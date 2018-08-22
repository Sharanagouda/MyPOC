import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container : {
      backgroundColor:'#455a64',
      flex: 1,
      alignItems:'center',
      justifyContent :'center'
    },
    homeContainer : {
      backgroundColor:'#718792',
      flex: 1,
      alignItems:'center',
      justifyContent :'flex-start'
    },
    inputContainer : {
      flexGrow: 1,
      justifyContent:'center',
      alignItems: 'center'
    },
    signupTextCont : {
        flexGrow: 1,
      alignItems:'flex-end',
      justifyContent :'center',
      paddingVertical:16,
      flexDirection:'row'
    },
    signupText: {
        color:'rgba(255,255,255,0.6)',
        fontSize:16
    },
    signupButton: {
        color:'#ffffff',
        fontSize:16,
        fontWeight:'500'
    },
    inputBox: {
      width:300,
      backgroundColor:'rgba(255, 255,255,0.2)',
      borderRadius: 25,
      paddingHorizontal:16,
      fontSize:16,
      color:'#ffffff',
      paddingVertical: 8,
      marginVertical: 10
    },
    button: {
      width:300,
      backgroundColor:'#1c313a',
       borderRadius: 25,
        marginVertical: 10,
        paddingVertical: 13
    },
    buttonText: {
      fontSize:16,
      fontWeight:'500',
      color:'#ffffff',
      textAlign:'center'
    },
    logoContainer : {
      flexGrow: 1,
      justifyContent:'flex-end',
      alignItems: 'center'
    },
    logoText : {
        marginVertical: 8,
        fontSize:18,
        color:'rgba(255, 255, 255, 0.7)'
    },
    logoBig: {
      fontSize:28,
      color:'rgba(255, 255, 255, 1)',
      fontWeight: "700"
    },

    sidebarContainer: {
      flex: 1,
    },

    listViewCont: {
        height: 50,
        borderBottomWidth: 1,
        borderBottomColor: "#ddd",
        justifyContent: "center",
        paddingHorizontal: 16
    },
    listViewContainer: {
        width: "100%",
        padding: 16
    },
    toolbarContainer: {
        height:56,
        backgroundColor: "#455a64",
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    menubar: {
      height:56,
      alignItems: "center",
      justifyContent: "center",
      width: 36,
      marginHorizontal: 16
    }
  });


  export default styles;
