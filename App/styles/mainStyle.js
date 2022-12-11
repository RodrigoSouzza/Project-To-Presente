import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  button: {
    width: '100%',
    marginTop: 10,
    backgroundColor: 'red'
  },
  logo: {
    width: 200,
    height: 100,
    marginTop: -100
  },  
  container: {
      flex: 1,
      backgroundColor:'#6269E6',
      alignItems: 'center',
      justifyContent: 'center',
    },
    maskedInput: {
      flexGrow:1,
      height: 40,
      fontSize: 18,
      borderBottomColor: "#999",
      borderBottomWidth: 1,
      borderStyle: "solid",
      alignSelf:'flex-start',      
    },
    containerMask: {
      flexDirection: "row",
      marginBottom: 5,
      marginLeft: 10,
      marginRight: 10,
    },
    errorMessage: {
      alignSelf: 'flex-start',
      marginLeft: 15,
      color: "#f00",
      fontSize:12,
    }
  });
  export default styles 
  
  