import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AuthDemo from './screen/AuthDemo';
import Search from './screen/Search'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from 'react-native-vector-icons';


const Tab = createBottomTabNavigator();

export default function App() {

    return (
        <View style={styles.container}>
            <NavigationContainer>
                <Tab.Navigator>
                    
                    <Tab.Screen name="Private" options={{
                        title: 'login',
                        tabBarIcon: ({ color, size }) => (<Ionicons name="ios-home" color={color} size={size} />)
                    }}>
                        {(props) => <AuthDemo {...props} apiURI="https://graded-exercice-api.herokuapp.com" />}
                    </Tab.Screen>

                    <Tab.Screen name="Public"
                        options={{
                            title: 'Search',
                            tabBarIcon: ({ color, size }) => (<Ionicons name="ios-search-sharp" color={color} size={size} />)
                        }}>
                        {(props) => <Search {...props} apiURI="https://graded-exercice-api.herokuapp.com" />}
                    </Tab.Screen>


                </Tab.Navigator>
            </NavigationContainer>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        paddingTop: 18
    },
});