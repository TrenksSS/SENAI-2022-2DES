import { View, Text, StyleSheet, Image, TextInput, Button, TouchableOpacity } from 'react-native';


export default function App() {
  const imgGatin = require('./assets/caca.jpeg');
  const imgLixo = require('./assets/delete.png');
  const nomes = ["Fulano", "Beltrano", "Ciclino", "Tobias", "Jurelson", "Josefina"]
  const perfis = [
    {
      image: require('./assets/p1.png'),
      nome: 'Fulano',
      cargo: 'Atendente',

    },
    {
      image: require('./assets/p2.png'),
      nome: 'Fulano',
      cargo: 'ADM',

    },
    {
      image: require('./assets/p3.png') ,
      nome: 'Fulano',
      cargo: 'Sup',

    },
  ]
  const sp = StyleSheet.create({
    imag: {
      width: '50px',
      height: '50px'
    },
    cont:{
      margin: '10px',
      border: '2px solid #1C1C1C',
      justifyContent: 'space-between',
      flexDirection: 'row',
      alignItems:'center',
      height:'100px',
      padding:'20px',
      borderRadius:'20px'

    }

  })
  return (
    //   <View style={style.conteiner}>
    //     <View style={style.primeira}> 
    //     <Text>Bem vindo, {nomes[0]}</Text>
    //     </View>
    //     <View style={style.segunda}>
    //       <Text>Minha segunda view</Text>
    //       <Image style={style.imgGatin} source={imgGatin}/>
    //       <Image style={style.imgGatin} source={{uri:'https://i.pinimg.com/736x/7e/fd/b9/7efdb9a91e301381f2d8f6ec83201f94.jpg'}}/>
    //       <TextInput placeholder='Tu' style={style.imput}/>
    //       <Button title='cadastrar'/>
    //       <TouchableOpacity style={style.btLixo}>
    //       <Image style={{width:'32px', height:'32px'}} source={imgLixo}/>
    //       </TouchableOpacity>
    //       {
    //         nomes.map(nome =>{
    //          return( 
    //           <Text>{nome}</Text> 
    //          ) 
    //         })
    //       }
    //     </View>
    //   </View>
    
    <View>
      {
    perfis.map(perfil =>{
      return(
      <View style={sp.cont}>
        <Image style={sp.imag} source={perfil.image}/>
        <Text>{perfil.nome}</Text>
        <Text>{perfil.cargo}</Text>
      </View>
      )
      })
}
    </View>
  );
  
  


const style = StyleSheet.create({
  conteiner: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  primeira: {
    backgroundColor: '#F1D2E7'
  },
  segunda: {
    backgroundColor: '#E2F5C8'
  },
  imgGatin: {
    width: '300px',
    height: '300px'
  },
  imput: {
    borderBottom: '1px solid gray',
    borderBottomColor: 'gray',
    padding:'10px',
  },
  btLixo:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#FCFFA6',
    border: '2px spolid #adffa6',
    borderRadius: '10px'
  },
});
}
