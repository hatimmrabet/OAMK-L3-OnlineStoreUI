import React from 'react'
import { View, Text, StyleSheet, Button, Image } from 'react-native'
import ItemImage from './ItemImage';

export default function OneItem({ item }) {
    
    return (
        <View style={styles.container}>
            <ItemImage item={item} />
            <View>
                <Text >Title : {item.title}</Text>
                <Text >Description : {item.description}</Text>
                <Text >Price : {item.price}€</Text>
                <Text >Category : {item.category}</Text>
                <Text >Delivery : {item.delivery}</Text>
                <Text >Posting date : {item.postingDate}</Text>
                <Text >Category : {item.category}</Text>
                <Text >City : {item.city}</Text>
                <Text >Contry Code : {item.contryCode}</Text>
                <Text >Seller Fullname : {item.seller.firstName} {item.seller.lastName}</Text>
                <Text >Phone Number : {item.seller.phoneNumber}</Text>
                <Text >e-mail : {item.seller.email}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 5,
    },
})