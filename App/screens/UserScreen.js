import 'react-native-gesture-handler';
import React from 'react';
import { View } from 'react-native';
import { Button, Text } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../styles/mainStyle';


export default function UserScreen({navigation}) {

const UserTeacher = () => {
    navigation.navigate("Professor")
}

const UserStudent = () => {
  navigation.navigate("Aluno")
}
 
  return (
    <View style={styles.container}>      
        <Text h3>Tô Presente</Text>
        <Button 
        icon={
          <Icon
          name="user"
          size={15}
          color="white"
          />
        }
        title="Professor"
        style={styles.button}
        onPress={() => UserTeacher()}       
        />
        
        <Button 
        icon={
          <Icon
          name="user"
          size={15}
          color="white"
          />
        }
        title="Aluno"
        style={styles.button}
        onPress={() => UserStudent()}       
        />        
    </View>
  );
}
