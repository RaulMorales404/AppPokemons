
import 'react-native-gesture-handler';
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import Pokemon from '../screens/Pokemon';
import { SinglePokemons } from '../interfaces/interfacePokemon';
export type RootStackParams = {
    Home: undefined,
    Pokemon: { singlePokemon: SinglePokemons, color: string }
}

const Stack = createStackNavigator<RootStackParams>();

export const NavigationTab2 = () => {
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false, cardStyle: { backgroundColor: '#fff' } }} >
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Pokemon" component={Pokemon} />
        </Stack.Navigator>
    )
}



