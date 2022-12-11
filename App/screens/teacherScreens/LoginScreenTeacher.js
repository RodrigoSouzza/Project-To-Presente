import 'react-native-gesture-handler';
import React, {  useState } from 'react';
import { View, Alert } from 'react-native';
import { Button, Input, Text} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../../styles/mainStyle';
import userService from '../../services/userService';


export default function LoginScreenTeacher({navigation}) {

  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)
  const [isLoading, setLoading] = useState(false)
  const [isLoadingToken, setLoadingToken] = useState(true)

  const login = () => {

    let data = {
      username:email,
      password: password
    }

    userService.login(data)
    .then((response) => {
      setLoading(false)
      navigation.reset({
        index: 0,
        routes:[{name: "Main"}]
      })      
    })
    .catch((error) => {
      setLoading(false)
      Alert.alert('Usuário não existe')            
    })   
}

const loginToken = (token) => {

  setLoadingToken(true)
  let data = {
    token:token
  }

  userService.loginToken(data)
  .then((response) => {
    setLoadingToken(false)
    navigation.reset({
      index: 0,
      routes:[{name: "Main"}]
    })      
  })
  .catch((error) => {
    setLoadingToken(false)                
  })
}

const Register = () => {
    navigation.navigate("Register")
}
 
  return (
    <View style={styles.container}>      
        <Text h3>Óla, Professor</Text>        
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
        style={styles.button}
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
        style={styles.button}
        onPress={() => Register()}       
        />        
    </View>
  );
}
