import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Users"
                component={HomeScreen}
                options={{
                    title: 'Users',
                    headerTitleAlign: 'center',
                }}
            />
            <Stack.Screen name="Detail" component={DetailScreen} options={{ headerTitleAlign: 'center' }}/>
        </Stack.Navigator>
    );
};

export default AppNavigator;