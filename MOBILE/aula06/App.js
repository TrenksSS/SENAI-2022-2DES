import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Login from './src/pages/login'

const Stack = createNativeStackNavigator()

export default function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}