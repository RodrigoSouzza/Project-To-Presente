import * as React from 'react';
import { Alert, Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function ClassroomRegisterScreen({navigation}) {

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
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Registrar aula!</Text>
        <Button 
        icon={
          <Icon
          name="check"
          size={15}
          color="white"
          />
        }
        title="Sair"
        onPress={() => Logout(navigation)}       
        />
      </View>
    );
  }