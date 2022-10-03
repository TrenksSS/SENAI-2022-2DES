import { View, Text } from "react-native";

export default function listar (props){
    const {titulo, descricao} = props;

    return(
        <View>
            <Text>{titulo}</Text>
            <Text>{descricao}</Text>
        </View>
    )
}