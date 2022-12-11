import * as React from 'react';
import { Alert, Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from '../styles/mainStyle';

export default function ClassroomRegisterScreen({navigation}) {

  function RegisterClasses(){
    
  }

    const Logout = (navigation) => {
        AsyncStorage.removeItem('TOKEN').then(() => {
            navigation.reset({
                index:0,
                routes: [{name:'Login'}]
            })
        }).catch(() => {
            Alert.alert('Erro ao sair')
        })        
      }

    return (
      <View style={styles.container}>
        <Text>Registrar aula!</Text>
        <Button 
        icon={
          <Icon
          name="check"
          size={15}
          color="white"
          />
        }
        title="registrar aula"
        style={styles.button}
        onPress={() => RegisterClasses()}       
        />

        <Button 
        icon={
          <Icon
          name="check"
          size={15}
          color="white"
          />
        }
        title="Sair"
        style={styles.button}
        onPress={() => Logout(navigation)}       
        />
      </View>
    );
  }