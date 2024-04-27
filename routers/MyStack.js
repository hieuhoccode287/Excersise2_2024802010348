
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './../screen/HomeScreen';
import DetailScreen from './../screen/DetailScreen';
import CustomNavigationBar from '../src/CustomNavigationBar';

const Stack = createStackNavigator()
const MyStack = () => {
    
    return (
        <Stack.Navigator 
        initialRouteName="Home"
        screenOptions={{ 
            header: (props)=> <CustomNavigationBar {...props}/>,
        }}>
            <Stack.Screen name='Home' component={HomeScreen}/>
            <Stack.Screen name='Detail' component={DetailScreen}/>

        </Stack.Navigator>
    )
}

export default MyStack;

