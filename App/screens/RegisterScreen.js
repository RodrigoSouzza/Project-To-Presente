import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { View } from 'react-native';
import { Button, Input, Text} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../styles/mainStyle';
import { TextInputMask } from 'react-native-masked-text';
import userService from '../services/userService';

export default function RegisterScreen({navigation}) {

    const [name, setName] = useState(null)
    const [cpf, setCpf] = useState(null)
    const [email, setEmail] = useState(null)
    const[password, setPassword] = useState(null)
    
    const [errorName, setErrorName] = useState(null)
    const [errorCpf, setErrorCpf] = useState(null)
    const [errorEmail, setErrorEmail] = useState(null)
    const[errorPassword, setErrorPassword] = useState(null)
    const[isLoading, setLoading] = useState(false)

    let cpfField = null

    const validate = () => {
        let error = false
        const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if(!re.test(String(email).toLowerCase())){
            setErrorEmail("Preencha seu e-mail corretamente")
            error = true
        }
        if(!cpfField.isValid()){
          setErrorCpf("Preencha seu CPF corretamente")
          error = true
        }
        if(password == null){
          setErrorPassword("Preencha sua senha corretamente")
          error = true
        }
        if(name == null){
          setErrorName("Preencha seu nome corretamente")
          error = true
        }
        if(email == null){
          setErrorEmail("Preencha seu email corretamente")
        }
        return !error        
    }

    const save = () => {
        if(validate()){
            setLoading(true)

            let data = {
              name: name,
              cpf: cpf,
              email: email,
              password: password
            }

            userService.register(data)
            .then((response) => {
              setLoading(false)
              const title = (response.data.status) ? "Sucesso" : "Erro"
              showDialog(title, response.data.message, "SUCESSO")
            })
            .catch((error) => {
              setLoading(false)
              showDialog("Erro", "Houve um erro inesperado", "ERRO")
            })
        }
    }    

  return (
    <View style={styles.container}>
      <Text h3>Cadastre-se aqui</Text>

      <Input
      placeholder="Digite seu nome"
      onChangeText={value =>{
        setName(value)
        setErrorName(null)}}
      errorMessage={errorName}
      />      

      <View style={styles.containerMask}>
      <TextInputMask
        placeholder='CPF'
        type={'cpf'}
        value={cpf}
        onChangeText={value =>{
          setCpf(value)
          setErrorCpf(null)}}
        keyboardType= "number-pad"
        returnKeyType="done"
        style={styles.maskedInput}
        ref={(ref) => cpfField = ref}
        />        
      </View>
      <Text style={styles.errorMessage}>{errorCpf}</Text>

      <Input
      placeholder="Digite seu email"
      onChangeText={value =>{
        setEmail(value)
        setErrorEmail(null)}}
      keyboardType="email-address"
      errorMessage={errorEmail}
      />

      <Input
      placeholder="Digite sua senha"
      onChangeText={value =>{
        setPassword(value)
        setErrorPassword(null)}}
      secureTextEntry={true}
      returnKeyType="done"
      errorMessage={errorPassword}
      />
    
    {isLoading && 
    <Text>Carregando...</Text>
    }
    {!isLoading && 
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
    }
    </View>
  );
}
