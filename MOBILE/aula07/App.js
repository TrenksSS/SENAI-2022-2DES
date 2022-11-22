
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
      const jsonzinho = JSON.stringify({
        nome:nome,
        cargo:carco,
        salario:salario
      })
      await AsyncStorage.setItem('data', jsonzinho)
      setNome("")
      setCargo("")
      setSalario("")
    }catch(err) {
      console.log(err)
    }
  }

  const ler = async () => {
    try{
      let data = await AsyncStorage.getItem("data")
     var alguma = data != null ? JSON.parse(data) : null;
      setLida(
        <View>
          <Text>Nome: {alguma.nome}</Text>
          <Text>Cargo: {alguma.cargo}</Text>
          <Text>Salario: {alguma.salario}</Text>
        </View>
      )
      console.log(lida)
    }catch(err){
      console.log(err)
    }
  }

  return (
    <View style={styles.container}>
      <Text>Nome</Text>
      <TextInput value={nome} onChangeText={(val)=> { setNome(val)}}/>
      <Text>Cargo</Text>
      <TextInput value={carco} onChangeText={(val)=> { setCargo(val)}}/>
      <Text>Salario</Text>
      <TextInput value={salario} onChangeText={(val)=> { setSalario(val)}}/>
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
