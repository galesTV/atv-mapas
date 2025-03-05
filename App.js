//imports
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MapView, { Marker } from 'react-native-maps';

// Tela inicial com o botão para abrir o mapa
function HomeScreen({ navigation }) {
  const handlePress = () => {
    navigation.navigate('Mapa');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo!</Text>
      <Text style={styles.subtitle}>
        Clique abaixo para ver a localização da ETEC.
      </Text>
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>Onde Estamos</Text>
      </TouchableOpacity>
    </View>
  );
}

// Tela que exibe o mapa com a localização da empresa
function MapScreen() {
  const [region] = useState({
    latitude: -23.454415, // Latitude da Etec Guarulhos
    longitude: -46.50157, // Longitude Etec Guarulhos
    latitudeDelta: 0.01, // margem de precisão
    longitudeDelta: 0.01, // margem de precisão
  });

  const [marker] = useState({
    latitude: -23.454415, // Latitude da Etec Guarulhos
    longitude: -46.50157, // Longitude da Etec Guarulhos
    title: 'Etec Guarulhos',
    description:
      'R. Cristóbal Cláudio Elilo, 88 - Parque Cecap, Guarulhos - SP, 07190-065',
  });

  return (
    <MapView style={styles.map} initialRegion={region}>
      <Marker
        coordinate={{ latitude: marker.latitude, longitude: marker.longitude }}
        title={marker.title}
        description={marker.description}
      />
    </MapView>
  );
}

// Configurando a navegação
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Início' }}
        />
        <Stack.Screen
          name="Mapa"
          component={MapScreen}
          options={{ title: 'Localização da Etec Guarulhos' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// Estilos do aplicativo
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
