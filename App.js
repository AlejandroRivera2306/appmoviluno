


// import * as React from 'react';
// import * as Location from 'expo-location';
// import { useEffect, useState } from 'react';
// import fondo from './images/fondo.jpg';
// import logo from './images/logo.png';
// import alarmaicono from './images/alarmaicono.png';
// import { PermissionsAndroid,  Text, StyleSheet, View, ScrollView, TouchableOpacity, TextInput, Button, Alert } from 'react-native';
// import { BlurView } from 'expo-blur';
// import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
// import { initializeApp } from 'firebase/app';
// import { firebaseConfig } from './firebase-config';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { useNavigation } from '@react-navigation/native';
// import MapView, { Marker, Polyline } from 'react-native-maps';
// import MapViewDirections from 'react-native-maps-directions';
// import { GOOGLE_MAPS_KEY } from '@env';
// // import { basealarma} from './database/firebase';
// import app, { basealarma } from './firebase-config';
// import { collection, addDoc } from 'firebase/firestore';
// import { async } from '@firebase/util';
// import { Image } from 'react-native';
// import { getDatabase, ref, set } from 'firebase/database';


// function HomeScreen({ navigation }) {
//   const handleMap = () => {
//     navigation.navigate('Map');
    
//   };

//   const DropdownButton = () => {
//     const [selectedOption, setSelectedOption] = useState(0);
//     const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  
//     const options = [
//       { label: 'Grupo 1', value: 1 },
      
//     ];
  
//     const handleSelectOption = (option) => {
//       setSelectedOption(option);
//       setIsDropdownVisible(false);
//     };
  
//     // const Pulsador = async () => {
//     //   console.log(selectedOption);
  
//     //   let booleanValue;
//     //   if (selectedOption === 'grupo1') {
//     //     booleanValue = true;
//     //   } else {
//     //     booleanValue = false;
//     //   }
  
//     //   const data = {
//     //     grupo: booleanValue
//     //   };
  
//     //   await addDoc(collection(basealarma, 'grupos'), data);
//     // };

//     // const Pulsador = async () => {
//     //   console.log(selectedOption);
    
//     //   let booleanValue;
//     //   if (selectedOption === 'grupo1') {
//     //     booleanValue = true;
//     //   } else {
//     //     booleanValue = false;
//     //   }
    
//     //   const database = getDatabase();
//     //   const dataRef = ref(database, 'grupoone');
//     //   await set(dataRef, {
//     //     grupo: booleanValue
//     //   });
//     // };
    
//     // const Pulsador = async () => {
//     //   console.log(selectedOption);
    
//     //   let booleanValue;
//     //   if (selectedOption === 'grupo1') {
//     //     booleanValue = true;
//     //   } else {
//     //     booleanValue = false;
//     //   }
    
//     //   const database = getDatabase();
//     //   const dataRef = ref(database, 'grupoone');
//     //   await set(dataRef, booleanValue);
//     // };

//     // const Pulsador = async () => {
//     //   console.log(selectedOption);
    
//     //   let booleanValue;
//     //   if (selectedOption === 1) {
//     //     booleanValue = true;
//     //   } else  {
//     //     booleanValue = false;
//     //   }
    
//     //   console.log(booleanValue); // Agrega este console.log para verificar el valor booleano antes de enviarlo a la base de datos
    
//     //   const database = getDatabase();
//     //   const dataRef = ref(database, 'grupoone');
//     //   await set(dataRef, booleanValue);
//     // };
//     const Pulsador = async () => {
//       console.log(selectedOption);
//       let booleanValue = selectedOption === 1 ? true : false;
    
//       console.log(booleanValue); // Agrega este console.log para verificar el valor booleano antes de enviarlo a la base de datos
    
//       const database = getDatabase();
//       const dataRef = ref(database, 'grupoone');
//       await set(dataRef, booleanValue);
//     };
    
    
  
    
//     return (
//       <View style={styles.dropdownContainer}>
//         <TouchableOpacity onPress={() => setIsDropdownVisible(!isDropdownVisible)}>
//           <Text style={styles.dropdownButtonText}>{selectedOption || 'Selecciona un grupo'}</Text>
//         </TouchableOpacity>
//         {isDropdownVisible && (
//           <View style={styles.dropdown}>
//             {options.map((option) => (
//               <TouchableOpacity
//                 key={option.value}
//                 style={styles.dropdownOption}
//                 onPress={() => handleSelectOption(option.label)}
//               >
//                 <Text>{option.label}</Text>
//               </TouchableOpacity>
//             ))}
//           </View>
//         )}
//          <TouchableOpacity style={styles.buttoncuenta} onPress={() => Pulsador()}>
//               <Text style={{ fontSize: 17, fontWeight: '400', color: 'white' }}>GUARDAR GRUPO</Text>
//             </TouchableOpacity>
//       </View>
//     );
//   };
  

  
//   return (
//     <View style={styles.containerdos}>
//       <Image source={fondo} style={[styles.image, StyleSheet.absoluteFill]}></Image>
//       <ScrollView
//         contentContainerStyle={{
//           flex: 1,
//           width: '100%',
//           height: '100%',
//           alignItems: 'center',
//           justifyContent: 'center',
//         }}
//       >
//         <BlurView intensity={250} style={styles.fondoone}>
//           <View style={styles.login}>
//             <Image source={alarmaicono} style={styles.profile}></Image>
//             <TouchableOpacity style={styles.buttonlogin} onPress={handleMap}>
//               <Text style={{ fontSize: 17, fontWeight: '400', color: 'white' }}>ENCENDER</Text>
//             </TouchableOpacity>
//             <TouchableOpacity style={styles.buttoncuenta}>
//               <Text style={{ fontSize: 17, fontWeight: '400', color: 'white' }}>APAGAR</Text>
//             </TouchableOpacity>
//             <DropdownButton />
//           </View>
//         </BlurView>
//       </ScrollView>
//     </View>
//   );
// }




// function MapScreen() {
//   const [origin, setOrigin] = React.useState({
//     latitude: -0.159761,
//     longitude: -78.485374,
//   });
//   const [destination, setDestination] = React.useState({
//     latitude: -0.17513169139127757,
//     longitude: -78.50125430341484,    
//   });

// async function getLocationPermission(){
//   let {status} = await Location.requestForegroundPermissionsAsync();
//   if (status !== 'granted') {
//     alert('permiso denegado')
//     return;
//   }
//   let location = await Location.getCurrentPositionAsync({});
//   const current = {
//     latitude: location.coords.latitude,
//     longitude: location.coords.longitude
//   }
//   console.log(current)
//   setOrigin(current);
// } 


// React.useEffect(() => {
//   getLocationPermission();
// }, []);

//   return (
//     <View style={styles.container}>
//       <MapView
//         style={styles.map}
//         initialRegion={{
//           latitude: origin.latitude,
//           longitude: origin.longitude,
//           latitudeDelta: 0.07,
//           longitudeDelta: 0.04,
//         }}
//       >
//         <Marker 
//           draggable ={true}
//           coordinate={origin}
//           onDragEnd={(direction) => setOrigin(direction.nativeEvent.coordinate)}
//         />

       
//         <Marker
//           draggable ={true}
//           coordinate={destination}
//           onDragEnd={(direction) => setDestination(direction.nativeEvent.coordinate)}
//         />

//         <MapViewDirections
//         origin={origin}
//         destination={destination}
//         apikey={GOOGLE_MAPS_KEY}
//         strokeColor="blue"
//         strokeWidth={5}
        
//         />
//       </MapView>
//     </View>
//   );
// }




// function LoginScreen() {
//   const [email, setEmail] = React.useState('');
//   const [clave, setClave] = React.useState('');
//   const navigation = useNavigation('');
//   const app = initializeApp(firebaseConfig);
//   const auth = getAuth(app);

//   const handleCreateAccount = () => {
//     createUserWithEmailAndPassword(auth, email, clave)
//       .then((userCredential) => {
//         console.log('usuario creado');
//         const user = userCredential.user;
//         console.log(user);
//       })
//       .catch((error) => {
//         console.log(error);
//         Alert.alert(error.message);
//       });
//   };

//   const handleSignIn = () => {
//     signInWithEmailAndPassword(auth, email, clave)
//       .then((userCredential) => {
//         console.log('usuario logeado');
//         const user = userCredential.user;
//         console.log(user);
//         navigation.navigate('Home');
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   return (
//     <View style={styles.container}>
//       <Image source={fondo} style={[styles.image, StyleSheet.absoluteFill]}></Image>
//       <ScrollView
//         contentContainerStyle={{
//           flex: 1,
//           width: '100%',
//           height: '100%',
//           alignItems: 'center',
//           justifyContent: 'center',
//         }}
//       >
//         <BlurView intensity={250} style={styles.fondoone}>
//           <View style={styles.login}>
//             <Image source={logo} style={styles.profile}></Image>
//             <View>
//               <Text style={{ fontSize: 17, fontWeight: '400', color: 'indigo' }}>Emailvalio</Text>
//               <TextInput
//                 onChangeText={(text) => setEmail(text)}
//                 style={styles.input}
//                 placeholder='ingresa tu correo'
//               ></TextInput>
//             </View>
//             <View>
//               <Text style={{ fontSize: 17, fontWeight: '400', color: 'indigo' }}>Clave</Text>
//               <TextInput
//                 onChangeText={(text) => setClave(text)}
//                 style={styles.input}
//                 placeholder='ingresa tu clave'
//                 secureTextEntry={true}
//               ></TextInput>
//             </View>
//             <TouchableOpacity onPress={handleSignIn} style={styles.buttonlogin}>
//               <Text style={{ fontSize: 17, fontWeight: '400', color: 'white' }}>Entrar</Text>
//             </TouchableOpacity>
//             <TouchableOpacity onPress={handleCreateAccount} style={styles.buttoncuenta}>
//               <Text style={{ fontSize: 17, fontWeight: '400', color: 'white' }}>Crear Cuenta</Text>
//             </TouchableOpacity>
//           </View>
//         </BlurView>
//       </ScrollView>
//     </View>
//   );
// }

// const Stack = createNativeStackNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName='Login'>
//         <Stack.Screen name='Login' component={LoginScreen} />
//         <Stack.Screen name='Home' component={HomeScreen} />
//         <Stack.Screen name='Map' component={MapScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   image: {
//     width: '100%',
//     height: '100%',
//     resizeMode: 'cover',
//   },
//   login: {
//     width: 350,
//     height: 500,
//     borderColor: '#fff',
//     borderWidth: 2,
//     borderRadius: 20,
//     padding: 10,
//     alignItems: 'center',
//   },
//   profile: {
//     width: 100,
//     height: 100,
//     borderRadius: 50,
//     borderColor: '#fff',
//     borderWidth: 0.5,
//     marginVertical: 30,
//   },
//   input: {
//     width: 250,
//     height: 40,
//     borderColor: '#fff',
//     borderWidth: 2,
//     borderRadius: 10,
//     padding: 10,
//     marginVertical: 10,
//     backgroundColor: '#ffffff90',
//     marginBottom: 20,
//   },
//   fondoone: {
//     borderRadius: 10,
//   },
//   buttonlogin: {
//     width: 250,
//     height: 40,
//     borderRadius: 10,
//     backgroundColor: '#00800090',
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginVertical: 10,
//     borderColor: '#fff',
//     borderWidth: 1,
//   },
//   buttoncuenta: {
//     width: 250,
//     height: 40,
//     borderRadius: 10,
//     backgroundColor: '#9e2a2a90',
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginVertical: 10,
//     borderColor: '#fff',
//     borderWidth: 1,
//   },
//   buttonon: {
//     width: 200,
//     height: 200,
//     borderRadius: 90, // Hacer el botón redondo
//     backgroundColor: 'green',
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginVertical: 10,
//     borderColor: '#fff',
//     borderWidth: 1,
//   },
//   buttonoff: {
//     width: 200,
//     height: 200,
//     borderRadius: 90, // Hacer el botón redondo
//     backgroundColor: '#3949AB',
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginVertical: 10,
//     borderColor: '#fff',
//     borderWidth: 1,
//   },
//   containerdos: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   map: {
//     width: '100%',
//     height: '100%'


//   },
//     dropdownContainer: {
//       borderWidth: 1,
//       borderColor: 'gray',
//       borderRadius: 5,
//       padding: 10,
//       marginBottom: 10,
//     },
//     dropdownButtonText: {
//       fontSize: 16,
//       color: 'black',
//     },

// });




import * as React from 'react';
import * as Location from 'expo-location';
import { useEffect, useState } from 'react';
import fondo from './images/fondo.jpg';
import logo from './images/logo.png';
import alarmaicono from './images/alarmaicono.png';
import { PermissionsAndroid,  Text, StyleSheet, View, ScrollView, TouchableOpacity, TextInput, Button, Alert } from 'react-native';
import { BlurView } from 'expo-blur';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './firebase-config';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import MapView, { Marker, Polyline } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import { GOOGLE_MAPS_KEY } from '@env';
// import { basealarma} from './database/firebase';
import app, { basealarma } from './firebase-config';
import { collection, addDoc } from 'firebase/firestore';
import { async } from '@firebase/util';
import { Image } from 'react-native';
import { getDatabase, ref, set } from 'firebase/database';


function HomeScreen({ navigation }) {
  const handleMap = () => {
    navigation.navigate('Map');
  };

  const [selectedOption, setSelectedOption] = useState(0);

  const handleOnPressOn = () => {
    setSelectedOption(1);
    Pulsador(1); // Llama a la función Pulsador con el valor 1 (ON)
  };

  const handleOnPressOff = () => {
    setSelectedOption(0);
    Pulsador(0); // Llama a la función Pulsador con el valor 0 (OFF)
  };

  const Pulsador = async (value) => {
    console.log(value);
    let booleanValue = value === 1 ? true : false;
    console.log(booleanValue);

    // Aquí debes agregar el código para guardar el valor en la base de datos
    const database = getDatabase();
    const dataRef = ref(database, 'grupoone');
    await set(dataRef, booleanValue);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleOnPressOn} style={styles.buttonon}>
        <Text style={{ fontSize: 17, fontWeight: '400', color: 'black' }}>ON</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleOnPressOff} style={styles.buttonoff}>
        <Text style={{ fontSize: 17, fontWeight: '400', color: 'white' }}>OFF</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleMap} style={styles.buttonlogin}>
        <Text style={{ fontSize: 17, fontWeight: '400', color: 'white' }}>ENCENDER</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttoncuenta}>
        <Text style={{ fontSize: 17, fontWeight: '400', color: 'white' }}>APAGAR</Text>
      </TouchableOpacity>
    </View>
  );
}


function MapScreen() {
  const [origin, setOrigin] = React.useState({
    latitude: -0.159761,
    longitude: -78.485374,
  });
  const [destination, setDestination] = React.useState({
    latitude: -0.17513169139127757,
    longitude: -78.50125430341484,    
  });

async function getLocationPermission(){
  let {status} = await Location.requestForegroundPermissionsAsync();
  if (status !== 'granted') {
    alert('permiso denegado')
    return;
  }
  let location = await Location.getCurrentPositionAsync({});
  const current = {
    latitude: location.coords.latitude,
    longitude: location.coords.longitude
  }
  console.log(current)
  setOrigin(current);
} 


React.useEffect(() => {
  getLocationPermission();
}, []);

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: origin.latitude,
          longitude: origin.longitude,
          latitudeDelta: 0.07,
          longitudeDelta: 0.04,
        }}
      >
        <Marker 
          draggable ={true}
          coordinate={origin}
          onDragEnd={(direction) => setOrigin(direction.nativeEvent.coordinate)}
        />

       
        <Marker
          draggable ={true}
          coordinate={destination}
          onDragEnd={(direction) => setDestination(direction.nativeEvent.coordinate)}
        />

        <MapViewDirections
        origin={origin}
        destination={destination}
        apikey={GOOGLE_MAPS_KEY}
        strokeColor="blue"
        strokeWidth={5}
        
        />
      </MapView>
    </View>
  );
}




function LoginScreen() {
  const [email, setEmail] = React.useState('');
  const [clave, setClave] = React.useState('');
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
        Alert.alert(error.message);
      });
  };

  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email, clave)
      .then((userCredential) => {
        console.log('usuario logeado');
        const user = userCredential.user;
        console.log(user);
        navigation.navigate('Home');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <View style={styles.container}>
      <Image source={fondo} style={[styles.image, StyleSheet.absoluteFill]}></Image>
      <ScrollView
        contentContainerStyle={{
          flex: 1,
          width: '100%',
          height: '100%',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <BlurView intensity={250} style={styles.fondoone}>
          <View style={styles.login}>
            <Image source={logo} style={styles.profile}></Image>
            <View>
              <Text style={{ fontSize: 17, fontWeight: '400', color: 'indigo' }}>Emailvalio</Text>
              <TextInput
                onChangeText={(text) => setEmail(text)}
                style={styles.input}
                placeholder='ingresa tu correo'
              ></TextInput>
            </View>
            <View>
              <Text style={{ fontSize: 17, fontWeight: '400', color: 'indigo' }}>Clave</Text>
              <TextInput
                onChangeText={(text) => setClave(text)}
                style={styles.input}
                placeholder='ingresa tu clave'
                secureTextEntry={true}
              ></TextInput>
            </View>
            <TouchableOpacity onPress={handleSignIn} style={styles.buttonlogin}>
              <Text style={{ fontSize: 17, fontWeight: '400', color: 'white' }}>Entrar</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleCreateAccount} style={styles.buttoncuenta}>
              <Text style={{ fontSize: 17, fontWeight: '400', color: 'white' }}>Crear Cuenta</Text>
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
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name='Login' component={LoginScreen} />
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='Map' component={MapScreen} />
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
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  login: {
    width: 350,
    height: 500,
    borderColor: '#fff',
    borderWidth: 2,
    borderRadius: 20,
    padding: 10,
    alignItems: 'center',
  },
  profile: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderColor: '#fff',
    borderWidth: 0.5,
    marginVertical: 30,
  },
  input: {
    width: 250,
    height: 40,
    borderColor: '#fff',
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#ffffff90',
    marginBottom: 20,
  },
  fondoone: {
    borderRadius: 10,
  },
  buttonlogin: {
    width: 250,
    height: 40,
    borderRadius: 10,
    backgroundColor: '#00800090',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    borderColor: '#fff',
    borderWidth: 1,
  },
  buttoncuenta: {
    width: 250,
    height: 40,
    borderRadius: 10,
    backgroundColor: '#9e2a2a90',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    borderColor: '#fff',
    borderWidth: 1,
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
    borderWidth: 1,
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
    borderWidth: 1,
  },
  containerdos: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: '100%',
    height: '100%'


  },
    dropdownContainer: {
      borderWidth: 1,
      borderColor: 'gray',
      borderRadius: 5,
      padding: 10,
      marginBottom: 10,
    },
    dropdownButtonText: {
      fontSize: 16,
      color: 'black',
    },

});

