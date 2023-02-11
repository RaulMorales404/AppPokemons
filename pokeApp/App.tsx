import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import NavigatioTab1 from './src/navigation/NavigatioTab1';


const App = () => {
  return (
    <NavigationContainer>
      <NavigatioTab1/>
    </NavigationContainer>
  )
}

export default App;