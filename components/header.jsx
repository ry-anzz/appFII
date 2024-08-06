import { StyleSheet, Text, View } from 'react-native';


export default function Card() {
    return (
      
      <View style={styles.header}>
        <View style={styles.borderTop} />
        <Text style={styles.titulo}>10 Fundos Imobiliários Mais Baratos</Text>
        <View style={styles.borderBottom} />
      </View>
    );
  }
  const styles = StyleSheet.create({

    header:{
      backgroundColor: 'white',
    },

    borderBottom:{
      position: 'fixed',
      width: '100%',
      height: 4, 
      backgroundColor: '#4f0000', 
      marginTop: 30, 
     borderRadius:20,
    },

    titulo: {
      justifyContent: 'center',
      textAlign: 'center',
      marginTop: 20,
      fontSize: 23,
      color: 'red',
      fontWeight: 'bold',
    },


    


  });
