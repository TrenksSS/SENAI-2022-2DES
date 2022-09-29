import { View, Text, TouchableOpacity, TextInput, Image, useState } from "react-native";
import Button from '../../components/button';
const [login, setLogin] = useState ('') 
const [senha,setSenha] = useState ('')

import styles from "./style";

export default function Login({ navigation }) {
    const users = [
        {
            "id": 1,
            "email": "user01@empresa.com",
            "senha": "teste1234",
        },
        {
            "id": 2,
            "email": "user02@empresa.com",
            "senha": "1234teste",
        },
    ]
    const image = require('../../../assets/logo.png')
    const funcao = () => {
        let use = false
        users.forEach(user =>{
            if{user.email == login}
        }
        )
    }
    return (
        <View style={styles.cont}>
            <Image
                style={styles.logo}
                source={{ uri: image}}
            />
            <TextInput style={styles.inp} placeholder="Login" onChangeText={(val) => { setNome(val) }} />
            <TextInput style={styles.inp} placeholder="Senha" onChangeText={(val) => { setNome(val) }} />
            <Button value="Login" onPress={funcao} />
        </View>
    )
}