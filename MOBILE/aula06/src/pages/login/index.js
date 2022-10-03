import{useState} from "react"
import { View, Text, TouchableOpacity, TextInput, Image} from "react-native";

import Button from '../../components/button';


import styles from "./style";

export default function Login({ navigation }) {
    const [login, setLogin] = useState(""); 
    const [senha, setSenha] = useState("");
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
        users.forEach(item => {
            if(login == item.email && senha == item.senha){
                return(navigation.navigate("Home",{"userId":item.id}))
            }
        });
        
    }

    return (
        <View style={styles.cont}>
            <Image
                style={styles.logo}
                source={{ uri: image}}
            />
            <TextInput style={styles.inp} placeholder="Login" onChangeText={val => { setLogin(val) }} value={login}/>
            <TextInput style={styles.inp} placeholder="Senha" onChangeText={val => { setSenha(val) }} value={senha}/>
            <Button value="Login" onPress={()=>{funcao()}} />
        </View>
    )
}