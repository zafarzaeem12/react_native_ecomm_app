/* eslint-disable prettier/prettier */
import React,{useState} from 'react';
import {NativeBaseProvider} from 'native-base';
import Home from './components/Home';
// import Login from './components/Login';
// import Register from './components/Register';
const App = () => {
  const [selected, setSelected] = useState(1);
  return (
    <NativeBaseProvider>
      {/* <Welcome /> */}
      {/* <Login /> */}
      {/* <Register /> */}
      <Home />
      
    </NativeBaseProvider>
  );
};

export default App;
