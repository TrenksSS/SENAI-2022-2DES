import { ScrollView, TouchableOpacity } from "react-native";
import { View, Text, } from "react-native-web";

export default function Tarefa({ route }) {
    const {descricao} = route.params
    const data = [
        {
            "id_compromisso": 1,
            "descricao": "- Entrega da Atividade.\n- Matéria Nova.",
            "observacoes": "",
        },
        {
            "id_compromisso": 4,
            "descricao": "",
            "observacoes": "Não esquecer a carteirinha !!!",
        },
        {
            "id_compromisso": 3,
            "descricao": "- Pão.\n- Presunto.\n- Queijo.",
            "observacoes": "Ver se o sabão está em promoção e levar uma caixa.",
        },
        {
            "id_compromisso": 2,
            "descricao": "Consulta de retorno.",
            "observacoes": "Levar os exames.",
        },
    ]
    const funcao = () => {
        console.log("teste")
    }
    return (
        <ScrollView>
            {
                data.map((item, index) => {
                    return (
                        <TouchableOpacity>
                            <Text>{item.descricao}</Text>
                            <Text>{item.observacoes}</Text>
                        </TouchableOpacity>
                    )
                })
            }
        </ScrollView>
    )
    array.forEach(element => {

    });
}