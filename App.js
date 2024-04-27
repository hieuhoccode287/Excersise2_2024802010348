
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import MyStack from './routers/MyStack';
import { PaperProvider } from 'react-native-paper';


const App = () => {

  return (
    <NavigationContainer>
      <PaperProvider>
        <MyStack/>
      </PaperProvider>
    </NavigationContainer>
  )
}

export default App;