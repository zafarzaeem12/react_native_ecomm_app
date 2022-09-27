/* eslint-disable prettier/prettier */
import React,{useState} from 'react';
import { NavigationContainer  } from '@react-navigation/native';
import { createNativeStackNavigator   } from '@react-navigation/native-stack'
import Welcome from './components/Welcome';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
const App = () => {
  const [selected, setSelected] = useState(1);
  const Stack = createNativeStackNavigator ();
  return (

        <NavigationContainer>
          <Stack.Navigator>
              <Stack.Screen  name='Welcome' component={ Welcome } />
              <Stack.Screen  name='Login' component={ Login } />
              <Stack.Screen  name='Register' component={ Register } />
              <Stack.Screen  name='Home' component={Home} />
          </Stack.Navigator>
        </NavigationContainer>
    
  );
};

export default App;
