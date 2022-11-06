import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { View } from 'react-native';
import { Button, Input, Text} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../styles/mainStyle';

export default function LoginScreen({navigation}) {

  const [email, setEmail] = useState(null)
  const[password, setPassword] = useState(null)

  const login = () => {
    navigation.reset({
        index: 0,
        routes:[{name: "Main"}]
    })
}

const Register = () => {
    navigation.navigate("Register")
}

  return (
    <View style={styles.container}>
      <Text h3>Tô Presente</Text>

      <Input
      placeholder="Digite seu e-mail"
      leftIcon={{type: 'font-awesome', name: 'envelope'}}
      onChangeText={value => setEmail(value)}
      keyboardType="email-address"
      />

      <Input
      placeholder="Digite sua senha"
      leftIcon={{type: 'font-awesome', name: 'lock'}}
      onChangeText={value => setPassword(value)}
      secureTextEntry={true}
      />

      <Button 
      icon={
        <Icon
        name="check"
        size={15}
        color="white"
        />
      }
      title="Entrar"
      onPress={() => login()}       
      /> 

      <Button 
      icon={
        <Icon
        name="user"
        size={15}
        color="white"
        />
      }
      title="Cadastrar"
      onPress={() => Register()}       
      />     
    </View>
  );
}
