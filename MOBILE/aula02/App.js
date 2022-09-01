import {useState} from 'react';
import { View, TouchableOpacity, Text, StyleSheet, TextInput } from 'react-native';

export default function App() {
  const [value1,setValue1] = useState("Valor 1");
  const [value2,setValue2] = useState("Valor 2");
  const [result, setResult] = useState("Resultado"); 
  const [calc, setCalc] = useState("Resultado");

  return(
    <View style={style.cont}>
      <View>
      <Text style={style.textSimb}>Some aqui</Text>
      </View >
      <TextInput style={style.calc} value={value1} onChangeText={(val) => {setValue1(val)}}/>
      <TextInput style={style.calc} value={value2} onChangeText={(val) => {setValue2(val)}}/>
      <TouchableOpacity style={style.simb} onPress={() => {setResult(parseInt(value1) + parseInt(value2))}}>
        <Text style={style.textSimb}>+</Text>
      </TouchableOpacity>
      <TouchableOpacity style={style.simb} onPress={() => {setResult(parseInt(value1) - parseInt(value2))}}>
        <Text style={style.textSimb}>-</Text>
      </TouchableOpacity>
      <TouchableOpacity style={style.simb} onPress={() => {setResult(parseInt(value1) / parseInt(value2))}}>
        <Text style={style.textSimb}>/</Text>
      </TouchableOpacity>
      <TouchableOpacity style={style.simb} onPress={() => {setResult(parseInt(value1) * parseInt(value2))}}>
        <Text style={style.textSimb}>*</Text>
      </TouchableOpacity>

      <TouchableOpacity style={style.bot} onPress={() => {setCalc (result)}}>
        <Text style={style.text2}>Calcular</Text>
      </TouchableOpacity>
      <Text style={style.textSimb}>{calc}</Text>
    </View>
  );


}
const style = StyleSheet.create({
  cont: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    border: '2px solid #adffa6',
  },
  primeira: {
    backgroundColor: '#F1D2E7'
  },
  segunda: {
    backgroundColor: '#E2F5C8'
  },
  calc:{
    border: '2px spolid #E2F5C8',
    borderRadius: '10px',
  },
  simb:{
    alignItems: 'center',
    justifyContent: 'center',
    border: '2px solid black',
    fontSize: 50,
    fontWeight: "bold",
    width:'40px',
    height:'40px',
    borderRadius:'10px',

  },
  textSimb:{
    fontSize: 30,
    fontWeight: "bold"
  },
  bot:{
    alignItems:'center',
    border: '2px solid black',
    fontWeight: "bold",
    width:'200px',
    height:'40px',
    borderRadius:'10px',
  },
  text2:{
    fontSize: 30,
  }

});