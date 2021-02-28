import React from 'react'
import { Text, View, TextInput, TouchableHighlight, Button, StyleSheet } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import OneItem from './todoApp/OneItem';


const DeleteItem = (props) => {

    // console.log(props.route.params.item);
    let item = props.route.params.item;

    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false} >
                <View style={styles.item}>
                    <OneItem item={item} />
                    <View style={styles.buttonTab}>
                        <Text>Are you sure you want to delete this item ?!</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginBottom: 25 }}>
                            <TouchableHighlight
                                style={styles.primaryButtonSave}
                                onPress={() => props.onItemDelete(item.id)}>
                                <View>
                                    <Text style={styles.primaryButtonText}>Yes, Delete Item</Text>
                                </View>
                            </TouchableHighlight>

                            <TouchableHighlight
                                style={styles.primaryButtonCancel}
                                onPress={() => props.navigation.goBack()}
                            >
                                <View>
                                    <Text style={styles.primaryButtonText}>No, Return back</Text>
                                </View>
                            </TouchableHighlight>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 15,
        // backgroundColor: 'red'
    },
    item: {
        marginBottom: 30,
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 8,
    },
    buttonTab: {
        marginTop: 15,
        borderTopColor: 'black',
        borderTopWidth: 0.3,
        paddingTop: 14,
    },
    button: {
        flex: 1,
        margin: 2,
    },
    primaryButtonText: {
        color: 'white',
        fontSize: 15
    },
    primaryButtonCancel: {
        backgroundColor: 'red',
        textAlign: 'center',
        borderRadius: 10,
        height: 35,
        width: 140,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 0.5,
        marginHorizontal: 10,
        marginTop: 9,
    },
    primaryButtonSave: {
        backgroundColor: 'limegreen',
        textAlign: 'center',
        borderRadius: 10,
        height: 35,
        width: 140,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 0.5,
        marginHorizontal: 10,
        marginTop: 9,
    },
});

export default DeleteItem