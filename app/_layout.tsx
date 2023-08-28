import {Stack} from 'expo-router';
import { Provider } from 'react-redux';
import store from '../store';

const StackLayout = () => {
    return(
        <Provider store={store}>
        <Stack>
        <Stack.Screen  name="(tabs)" />
       </Stack>
       </Provider>
    ) 
};

export default StackLayout;