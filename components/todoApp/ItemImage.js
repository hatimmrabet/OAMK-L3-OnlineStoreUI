import React from 'react'
import { View, Text, StyleSheet, Button, Image } from 'react-native'
import noImage from '../../assets/noImageError.png';

export default function ItemImage({ item }) {

    const showImage = (item) => {
        if (item.images.length == 0) {
            return (
                <Image key={item.id} style={styles.coverImage} source={noImage}></Image>
            )
        }
        else {
            return (
                <View style={styles.galerie}>
                    {
                        item.images.map(i =>
                            <Image key={i.id} style={styles.coverImage} source={{ uri: i.path }}></Image>
                        )
                    }
                </View>
            )
        }
    }


    return (
        <View style={{ flex: 1 }}>
            { showImage(item)}
        </View>
    )
}

const styles = StyleSheet.create({
    galerie: {
        flex: 1,
        flexDirection: 'row',
        justifyContent:'space-between',
        marginVertical: 10,
    },
    coverImage: {
        flex: 1,
        width: 100,
        height: 100,
        margin: 3,
        borderColor: 'black',
        borderWidth: 0.2,
    },
})