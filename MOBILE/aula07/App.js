
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native'; 

import AsyncStorage from '@react-native-async-storage/async-storage';


export default function App() {
  const [nome, setNome] = useState("")
  const [carco, setCargo] = useState("")
  const [salario, setSalario] = useState("")
  const [lida, setLida] = useState("")
  var data

  const salvar = async () => {
    try{
      const jsonzinho = JSON.stringify('data')
      await AsyncStorage.setItem('data', jsonzinho)
      setNome("")
    }catch(err) {
      console.log(err)
    }
  }

  const ler = async () => {
    try{
      let data = await AsyncStorage.getItem("data")
      console.log(data)
    }catch(err){
      console.log(err)
    }
  }

  return (
    <View style={styles.container}>
      <Text>Nome</Text>
      <TextInput  onChangeText={(val)=> { setNome(val)}}/>
      <Text>Cargo</Text>
      <TextInput  onChangeText={(val)=> { setCargo(val)}}/>
      <Text>Salario</Text>
      <TextInput  onChangeText={(val)=> { setSalario(val)}}/>
      <Button title='Salvar' onPress={() => {salvar()}} />
      <Button title='ler' onPress={() => {ler()}} />
      <Text>{lida}</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
