import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import { TouchableHighlight } from 'react-native-gesture-handler'
import { Ionicons } from '@expo/vector-icons';

const View1 = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome Back :)</Text>
            <View style={styles.div1}>

                <TouchableHighlight
                    style={styles.navig}
                    onPress={() => props.navigation.navigate('GetItems')}
                >
                    <View>
                        <Ionicons name="list-outline" size={30} style={styles.icon}></Ionicons>
                        <Text style={styles.text}>Your items</Text>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight
                    style={styles.navig}
                    onPress={() => props.navigation.navigate('Todos')}
                >
                    <View>
                        <Ionicons name="add-outline" size={30} style={styles.icon}></Ionicons>
                        <Text style={styles.text}>Add item</Text>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight
                    style={styles.navig}
                    underlayColor='red'
                    onPress={props.onLogout}
                >
                    <View>
                        <Ionicons name="log-out-outline" size={30} style={styles.icon}></Ionicons>
                        <Text style={styles.text}>Logout</Text>
                    </View>
                </TouchableHighlight>

            </View>
        </View>
    )
}

export default View1

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: '15%',
    },
    title: {
        fontSize: 25,
        fontWeight: '700',
        marginBottom: 15,
    },
    div1: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        // backgroundColor: 'red',
        width: '80%'
    },
    navig: {
        height: 120,
        width: 150,
        textAlign: 'center',
        backgroundColor:"black",
        padding: '10%',
        borderRadius: 10,
    },
    text: {
        alignSelf: 'center',
        paddingBottom: '15%',
        fontSize: 20,
        color:"white",
        fontWeight: 'bold',
    },
    icon: {
        alignSelf: 'center',
        color: "white",
        paddingBottom: 8
    }
});