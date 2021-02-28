import React, { Component, useState } from 'react'
import { Text, View, TextInput, TouchableHighlight, Button, StyleSheet, ScrollView } from 'react-native'

const Todos = (props) => {

    const [itemTitle, setItemTitle] = useState("testtt");
    const [itemDescription, setItemDescription] = useState("fsdgg");
    const [itemCategory, setItemCategory] = useState("tests");
    const [itemCity, setItemCity] = useState("Oulu");
    const [itemContryCode, setItemContryCode] = useState("FI");
    const [itemPrice, setItemPrice] = useState("15.99");
    const [itemDelivery, setItemDelivery] = useState("Pickup");


    return (
        <View style={styles.screen}>
            <ScrollView contentContainerStyle={styles.scrollView}>
                <Text style={styles.header}>Add new item</Text>
                <View>
                    <Text style={styles.title}>Enter Title:</Text>
                    <TextInput style={{}}
                        style={styles.input}
                        placeholder="new phone..."
                        onChangeText={value => setItemTitle(value)}
                        value={itemTitle}>
                    </TextInput>

                    <Text style={styles.title}>Enter description:</Text>
                    <TextInput style={{}}
                        style={styles.input}
                        placeholder="phone never used..."
                        onChangeText={value => setItemDescription(value)}
                        value={itemDescription}>
                    </TextInput>

                    <Text style={styles.title}>Enter Category:</Text>
                    <TextInput style={{}}
                        style={styles.input}
                        placeholder="phones/cars/bikes..."
                        onChangeText={value => setItemCategory(value)}
                        value={itemCategory}>
                    </TextInput>

                    <Text style={styles.title}>Enter City:</Text>
                    <TextInput style={{}}
                        style={styles.input}
                        placeholder="Oulu"
                        onChangeText={value => setItemCity(value)}
                        value={itemCity}>
                    </TextInput>

                    <Text style={styles.title}>Enter contry code:</Text>
                    <TextInput style={{}}
                        style={styles.input}
                        placeholder="FI"
                        onChangeText={value => setItemContryCode(value)}
                        value={itemContryCode}>
                    </TextInput>

                    <Text style={styles.title}>Enter price:</Text>
                    <TextInput style={{}}
                        style={styles.input}
                        keyboardType="numeric"
                        placeholder="1500"
                        onChangeText={value => setItemPrice(value)}
                        value={itemPrice}>
                    </TextInput>

                    <Text style={styles.title}>Enter delivery:</Text>
                    <TextInput style={{}}
                        style={styles.input}
                        placeholder="(Pickup/Shipping)"
                        onChangeText={value => setItemDelivery(value)}
                        value={itemDelivery}>
                    </TextInput>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginBottom:25 }}>
                        <TouchableHighlight
                            style={styles.primaryButtonSave}
                            onPress={() =>
                                props.onItemAdd(itemTitle, itemDescription, itemPrice, itemCategory, itemCity, itemContryCode, itemDelivery)}>
                            <View>
                                <Text style={styles.primaryButtonText}>Save</Text>
                            </View>
                        </TouchableHighlight>

                        <TouchableHighlight
                            style={styles.primaryButtonCancel}
                            onPress={() => props.navigation.goBack()}
                        >
                            <View>
                                <Text style={styles.primaryButtonText}>Cancel</Text>
                            </View>
                        </TouchableHighlight>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        backgroundColor: 'rgb(51, 153, 255)',
        flexDirection: "column",
        justifyContent: "space-around",
        //  alignContent: "center",
        flex: 1,
    },
    scrollView: {
        width: "70%",
        marginLeft: "15%"
    },
    header: {
        textAlign: "center",
        fontSize: 30,
        marginTop: 10,
        marginBottom: 10,
        color: 'white',
        fontWeight: 'bold',
    },
    title:{
        color: 'white',
    },
    text: {
        fontSize: 20,
        color: 'white',
        textAlign: "center"
    },
    input: {
        borderWidth: 1,
        borderRadius: 10,
        height: 40,
        //width: '90%',
        backgroundColor: 'white',
        textAlign: 'center',
        fontSize: 18,
        marginTop: 5,
        marginBottom: 20
    },
    primaryButtonCancel: {
        backgroundColor: 'red',
        textAlign: 'center',
        borderRadius: 10,
        height: 50,
        width: 140,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 0.5,
        marginHorizontal: 10,
    },
    primaryButtonSave: {
        backgroundColor: 'limegreen',
        textAlign: 'center',
        borderRadius: 10,
        height: 50,
        width: 140,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 0.5,
        marginHorizontal: 10,
    },
    primaryButtonText: {
        color: 'white',
        fontSize: 17,
        fontWeight: 'bold',
    }
});

export default Todos