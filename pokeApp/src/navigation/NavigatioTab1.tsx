import React, { useEffect } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SplashScreen from 'react-native-splash-screen'
import { NavigationTab2 } from './NavigationTab2';
import { Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { NavigationTab3 } from './NavigationTab3';

const configRoute = {
    "search": {
        tabBarLabel: "Search",
        tabBarIcon: (({ color }: any) => <Icon name="search-outline" color={color} size={25} />)
    },
    "Home": {
        tabBarLabel: "Lista",
        tabBarIcon: ({ color }: any) => <Icon name="list-outline" color={color} size={25} />
    }
}




const Tab = createBottomTabNavigator();
const NavigatioTab1 = () => {
    
    useEffect(() => {

        SplashScreen.hide();
        return () => {

        }
    }, [])

    return (
        <Tab.Navigator
            sceneContainerStyle={{ backgroundColor: 'white' }}
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: "#5856D6",
                tabBarStyle: {
                    height: 85,
                    backgroundColor: 'rgba(255,255,255,0.92)',
                    position: 'absolute',
                    borderWidth: 0,
                    elevation: 0,
                },
                tabBarLabelStyle: {
                    marginBottom: Platform.OS === 'android' ? 20 : 0,
                    fontSize: 14,
                    fontWeight: '300',
                }
            }}



        >
            <Tab.Screen name="HomeScreen"
                options={configRoute.Home}
                component={NavigationTab2}
            />
            <Tab.Screen name="Search"
                options={configRoute.search}
                component={NavigationTab3} />
        </Tab.Navigator>


    )
}

export default NavigatioTab1;