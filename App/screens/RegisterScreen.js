import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { View } from 'react-native';
import { Button, Input, Text} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../styles/mainStyle';

export default function RegisterScreen({navigation}) {

    const [name, setName] = useState(null)
    const [cpf, setCpf] = useState(null)
    const [email, setEmail] = useState(null)
    const[password, setPassword] = useState(null)
    
    const [errorName, setErrorName] = useState(null)
    const [errorCpf, setErrorCpf] = useState(null)
    const [errorEmail, setErrorEmail] = useState(null)
    const[errorPassword, setErrorPassword] = useState(null)

    const validate = () => {
        let error = false
        const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if(!re.test(String(email).toLowerCase())){
            setErrorEmail("Preencha seu e-mail corretamente")
            error = true
        }
        return !error        
    }

    const save = () => {
        if(validate()){
            console.log("Salvou")
        }
    }

  return (
    <View style={styles.container}>
      <Text h3>Cadastre-se aqui</Text>

      <Input
      placeholder="Digite seu nome"
      leftIcon={{type: 'font-awesome', name: 'user'}}
      onChangeText={value =>{
        setName(value)
        setErrorName(null)}}
      errorMessage={errorName}
      />

      <Input
      placeholder="Digite seu cpf"
      leftIcon={{type: 'font-awesome', name: 'key'}}
      onChangeText={value =>{
        setCpf(value)
        setErrorCpf(null)}}
      keyboardType= "number-pad"
      returnKeyType="done"
      errorMessage={errorCpf}
      />

      <Input
      placeholder="Digite seu email"
      leftIcon={{type: 'font-awesome', name: 'envelope'}}
      onChangeText={value =>{
        setEmail(value)
        setErrorEmail(null)}}
      keyboardType="email-address"
      errorMessage={errorEmail}
      />

      <Input
      placeholder="Digite sua senha"
      leftIcon={{type: 'font-awesome', name: 'lock'}}
      onChangeText={value =>{
        setPassword(value)
        setErrorPassword(null)}}
      secureTextEntry={true}
      returnKeyType="done"
      errorMessage={errorPassword}
      />

      <Button 
      icon={
        <Icon
        name="check"
        size={15}
        color="white"
        />
      }
      title="Salvar"
      onPress={() => save()}    
      />

    </View>
  );
}
