// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import {BlurView} from 'expo-blur';
import { Image,Text,StyleSheet,View,ScrollView,TouchableOpacity,TextInput,Button, Alert } from 'react-native';
import fondo from './images/fondo.jpg';
import logo from './images/logo.png';
import alarmaicono from './images/alarmaicono.png';
import {getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword } from 'firebase/auth';
import{initializeApp } from 'firebase/app';
import{firebaseConfig }from './firebase-config';
import{NavigationContainer} from '@react-navigation/native';
import{createNativeStackNavigator} from '@react-navigation/native-stack';
import{useNavigation } from '@react-navigation/native';


function HomeScreem() {
  return (
   
    // <ScrollView contentContainerStyle={{flex:1,width:'100%', 
    // height:'100%',alignItems:'center',
    // justifyContent:'center'}}> 
    // <BlurView intensity={250} style={styles.fondotwo} >
    // <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#349CE8' }}>
    //   <Text style={{ fontSize: 40, fontWeight: '400', color: '#3949AB', marginBottom:60 }}>Panel de Emergencia</Text>
    //   <TouchableOpacity style={styles.buttonon}>
    //     <Text style={{ fontSize: 25, fontWeight: '400', color: 'white' }}>ENCENDER</Text>
    //   </TouchableOpacity>
    //   <TouchableOpacity style={styles.buttonoff}>
    //     <Text style={{ fontSize: 25, fontWeight: '400', color: 'white' }}>APAGAR</Text>
    //   </TouchableOpacity>
    // </View>
    // </BlurView>
    // </ScrollView>

    <View style={styles.containerdos}>
    <Image source={fondo} style={[styles.image, StyleSheet.absoluteFill]}></Image>
    <ScrollView contentContainerStyle={{flex:1,width:'100%', 
    height:'100%',alignItems:'center',
    justifyContent:'center'}}> 
    <BlurView intensity={250} style={styles.fondoone} >
      <View style={styles.login}>
      <Image source={alarmaicono} style={styles.profile}></Image>
      <TouchableOpacity style={styles.buttonlogin}>
      <Text style={{fontSize:17, fontWeight:'400',color:'white'}}>ENCENDER</Text>
      </TouchableOpacity>
      <TouchableOpacity  style={styles.buttoncuenta}>
      <Text style={{fontSize:17, fontWeight:'400',color:'white'}}>APAGAR</Text>
      </TouchableOpacity>
      </View>
    </BlurView>
    </ScrollView>
    </View>
  );
}
function LoginScreem(){

  const [email,setEmail] = React.useState ('');
  const [clave,setClave] = React.useState ('');
  const navigation = useNavigation('');
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const handleCreateAccount = () => {
    createUserWithEmailAndPassword(auth, email, clave)
      .then((userCredential) => {
        console.log('usuario creado');
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
        Alert.alert(error.message)
      });
  };
  
  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email, clave)
      .then((userCredential) => {
        console.log('usuario logeado');
        const user = userCredential.user;
        console.log(user);
        navigation.navigate('Home')
      })
      .catch((error) => {
        console.log(error);
      });
  };
  

  
  return(
    <View style={styles.container}>
    <Image source={fondo} style={[styles.image, StyleSheet.absoluteFill]}></Image>
    <ScrollView contentContainerStyle={{flex:1,width:'100%', 
    height:'100%',alignItems:'center',
    justifyContent:'center'}}> 
    <BlurView intensity={250} style={styles.fondoone} >
      <View style={styles.login}>
      <Image source={logo} style={styles.profile}></Image>
      <View>
        <Text style={{fontSize:17, fontWeight:'400',color:'indigo'}}>Email</Text>
        <TextInput onChangeText={(text)=> setEmail(text)}  style={styles.input} placeholder='ingresa tu correo'></TextInput>
      </View>
      <View>
        <Text style={{fontSize:17, fontWeight:'400',color:'indigo'}}>Clave</Text>
        <TextInput  onChangeText={(text)=> setClave(text)} style={styles.input} placeholder='ingresa tu clave' secureTextEntry={true}></TextInput>
      </View>
      <TouchableOpacity onPress={handleSignIn} style={styles.buttonlogin}>
      <Text style={{fontSize:17, fontWeight:'400',color:'white'}}>Entrar</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleCreateAccount} style={styles.buttoncuenta}>
      <Text style={{fontSize:17, fontWeight:'400',color:'white'}}>Crear Cuenta</Text>
      </TouchableOpacity>
      </View>
    </BlurView>
    </ScrollView>
    </View>
  );
}
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="login" component={LoginScreem} />
        <Stack.Screen name="Home" component={HomeScreem} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

    
  },
  image: {
    width:'100%',
    height:'100%',
    resizeMode:'cover',

  },

  login: {
    width:350,
    height:500,
    borderColor:'#fff',
    borderWidth:2,
    borderRadius:20,
    padding:10,
    alignItems:'center',
  },
  profile:{
    width:100,
    height:100,
    borderRadius:50,
    borderColor:'#fff',
    borderWidth:0.5,
    marginVertical:30

  },
  input:{
    width:250,
    height:40,
    borderColor: '#fff',
    borderWidth:2,
    borderRadius:10,
    padding:10,
    marginVertical:10,
    backgroundColor:'#ffffff90',
    marginBottom:20

  },
  fondoone:{
    borderRadius:10
  },
  buttonlogin:{
    width:250,
    height:40,
    borderRadius:10,
    backgroundColor:'#00800090',
    alignItems:'center',
    justifyContent:'center',
    marginVertical:10,
    borderColor:'#fff',
    borderWidth:1

  },
  buttoncuenta:{
    width:250,
    height:40,
    borderRadius:10,
    backgroundColor:'#9e2a2a90',
    alignItems:'center',
    justifyContent:'center',
    marginVertical:10,
    borderColor:'#fff',
    borderWidth:1

  },
  buttonon: {
    width: 200,
    height: 200,
    borderRadius: 90, // Hacer el botón redondo
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    borderColor: '#fff',
    borderWidth: 1
  },
  buttonoff: {
    width: 200,
    height: 200,
    borderRadius: 90, // Hacer el botón redondo
    backgroundColor: '#3949AB',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    borderColor: '#fff',
    borderWidth: 1
  },
  containerdos: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
