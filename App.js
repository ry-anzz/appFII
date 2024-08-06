import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Card from './components/header.jsx';
import Main from './components/conteudo.jsx';


export default function App() {
  return (
    <View style={styles.container}>
      <Card/>
      <Main/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    border: 0,
    border: 'box-sizing',
    flex: 1,
    backgroundColor: 'black',
  
  },
});
