import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView } from 'react-native';

export default function Home() {

  // Essa é a maneira de fazer o input criando uma constante e atribuindo um estado.
  const [nome, setNome] = useState("")
  const [cargo, setCargo] = useState("")
  // O useStatus pode ser vasio ou ter alguma coisa como a baixo
  const [lista, setLista] = useStatus([
    {
      "nome": "fulano",
      "cargo": "Programador"
    },
    {
      "nome": "Beltrano",
      "cargo": "Analista"
    }
  ])

  const cadastrar = () => {
    //console.log(nome, cargo)
      let nFunc = {
        "nome":nome,
        "cargo":cargo
      }
      setLista([...lista, nFunc])
  }

  return (
    <View style={styles.container}>
      <TextInput placeholder='Nome do Funcionario' onChangeText={(val) => {setNome(val)}}/>
      <TextInput placeholder='Cargo do Funcionario' onChangeText={(val) => {srtCargo(val)}} />
      <Button title="Cadastrar Funcionario" onPress={() => {cadastrar()}}/>
      {/* Essa area é rolavel usando essa importação */}
      <ScrollView>
        {
          lista.map((funcionario, indice) => {
            return(
              <View key={indice}>
                <Text>{funcionario.nome}</Text>
                <Text>{funcionario.cargo}</Text>
              </View>
            )
          })
        }

      </ScrollView>
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
