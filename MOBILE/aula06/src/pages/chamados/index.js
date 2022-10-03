import { View, Text, TouchableOpacity, TextInput, Image, ScrollView} from "react-native";
import { useState } from "react";
import Listar from '../../components/lista';

import styles from "./style";

export default function Home({route}) {
    const [pesq, setPesquisa] = useState(''); 
    const {userId}= route.params;
    var user
    
    const chamados = [
        {
            "user_id": 1,
            "chamados": [
                {
                    "titulo":"Manutenção de Roteador",
                    "descricao":"Cliente reclamou que está sem internet, possível troca"
                },
                {
                    "titulo":"Mudança de Endereço",
                    "descricao":"Fazer a instalação na nova instalação"
                },
                {
                    "titulo":"Recolher equipamento",
                    "descricao":"Assinatura Cancelada, recolher os equipamentos da instalação"
                }
            ]
        },
        {
            "user_id": 2,
            "chamados": [
                {
                    "titulo":"Recolher equipamento",
                    "descricao":"Assinatura Cancelada, recolher os equipamentos da instalação"
                },
                {
                    "titulo":"Mudança de Endereço",
                    "descricao":"Fazer a instalação na nova instalação"
                },
                {
                    "titulo":"Manutenção de Roteador",
                    "descricao":"Cliente reclamou que está sem internet, possível troca"
                }
            ]
        }
    ]
    array.forEach( => {
        
    });
    return (
        <View>
            <ScrollView>
                <TextInput onChangeText={val => { setPesquisa(val) }} value={pesq}/>
                {
                    chamados[userId].map((item, index)=>{
                        return (
                            <Listar titulo={item.titulo} descricao={item.descricao}/>
                        )
                    })
                }
            </ScrollView>
       </View>
    )
}