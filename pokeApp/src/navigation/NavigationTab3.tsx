import { createStackNavigator } from "@react-navigation/stack";
import { RootStackParams } from "./NavigationTab2";
import Pokemon from "../screens/Pokemon";
import Search from "../screens/Search";

const Tab2 = createStackNavigator<RootStackParams>();

export const NavigationTab3 = () => {
    return (

        <Tab2.Navigator
            screenOptions={{ headerShown: false, cardStyle: { backgroundColor: '#fff' } }} >
            <Tab2.Screen name="Home" component={Search} />
            <Tab2.Screen name="Pokemon" component={Pokemon} />
        </Tab2.Navigator>

    )
}
