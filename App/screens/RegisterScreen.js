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

    const save = () => {
        console.log("Salvou")
    }

  return (
    <View style={styles.container}>
      <Text h3>Cadastre-se aqui</Text>

      <Input
      placeholder="Digite seu nome"
      leftIcon={{type: 'font-awesome', name: 'user'}}
      onChangeText={value => setName(value)}
      />

      <Input
      placeholder="Digite seu cpf"
      leftIcon={{type: 'font-awesome', name: 'key'}}
      onChangeText={value => setCpf(value)}
      keyboardType= "number-pad"
      returnKeyType="done"
      />

      <Input
      placeholder="Digite seu email"
      leftIcon={{type: 'font-awesome', name: 'envelope'}}
      onChangeText={value => setEmail(value)}
      keyboardType="email-address"
      />

      <Input
      placeholder="Digite sua senha"
      leftIcon={{type: 'font-awesome', name: 'lock'}}
      onChangeText={value => setPassword(value)}
      secureTextEntry={true}
      returnKeyType="done"
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
