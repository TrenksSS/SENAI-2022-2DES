import 'react-native-gesture-handler';
import * as React from 'react';
import { useState, useEffect } from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';


function HomeScreen({ navigation }) {

  const [post, setPosts] = useState([]);

  useEffect(()=> {
    const options = {method:'GET'};

    fetch('')
  })



  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      
        (post !== undefined)
        ?
        <View>
          <Text>{post.titulo_post}</Text>
        </View>
        
        
      
    </View>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Feed" component={HomeScreen} />
      <Drawer.Screen name="Perfil" component={NotificationsScreen} />
    </Drawer.Navigator>
  );
}