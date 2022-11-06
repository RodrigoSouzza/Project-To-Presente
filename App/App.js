import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import styles from './styles/mainStyle';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>tela inicial</Text>
      <StatusBar style="auto" />
    </View>
  );
}
