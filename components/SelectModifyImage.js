import React from 'react'
import { View, Text, StyleSheet, TouchableHighlight, Image } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';

export default function SelectModifyImage(props) {

    let item = props.route.params.item;

    return (
        <View style={styles.galerie}>
            <ScrollView style={styles.ScrollView} contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
                <Text>Select the image that you want to modify :</Text>
                {
                    item.images.map(i =>
                        <TouchableHighlight
                            key={i.id}
                            onPress={() => props.navigation.navigate('ModifyImage', { item:item, image: i })}
                        >
                            <Image key={i.id} style={styles.coverImage} source={{ uri: i.path }}></Image>
                        </TouchableHighlight>
                    )
                }
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    galerie: {
        flex: 1,
        flexDirection:'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginVertical: 10,
    },
    ScrollView: {
        width:'75%',
    },
    scrollContainer:{
        alignItems:'center'
    },
    coverImage: {
        // flex: 1,
        width: 200,
        height: 200,
        margin: 3,
        borderColor: 'black',
        borderWidth: 0.2,
    },
})