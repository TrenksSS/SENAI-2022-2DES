import { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

export default function Login({ navigation }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <View>
            <Text>Bem vindo</Text>
            <TextInput onChangeText={(value) => { setEmail(value) }} />
            <TextInput onChangeText={(value) => { setPassword(value) }} />
            <Button title="Login" onPress={() => {
                let encontrei = false;
                fetch("http://localhost:4500/users/read")
                .then(res => {return res.json()})
                .then(usuarios  => {
                    usuarios.forEach((usuario) => {
                        if((usuario.email == email) && (usuario.senha == password)) {
                            encontrei = true
                            navigation.navigate("Forum", { "id": usuario.id - 1 });
                        }
                    })
                    if(encontrei){ 
                        alert("Obrigado por utilizar 🙂")
                    }else{
                        alert("Login ou senha invalidos 😪")
                    }
                })
            }} />
        </View>

    )
}