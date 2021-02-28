import React from 'react'
import { View, Text, StyleSheet, Button, TouchableHighlight } from 'react-native'
import { FlatList } from 'react-native-gesture-handler';
import OneItem from './OneItem';

const GetItems = (props) => {

    return (
        <View style={styles.container}>
            {   props.items.length == 0 ?
            (<FlatList showsVerticalScrollIndicator={false}
                data={props.items}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <OneItem item={item} />
                        <View style={styles.buttons}>
                            <TouchableHighlight
                                style={styles.primaryButtonAdd}
                                onPress={() => props.navigation.navigate('AddImage', { item: item })}
                            >
                                <View>
                                    <Text style={styles.primaryButtonText}>Add Image</Text>
                                </View>
                            </TouchableHighlight>
                            { item.images.length != 0 ?
                                (<TouchableHighlight
                                    style={styles.primaryButtonModifyImages}
                                    onPress={() => props.navigation.navigate('SelectModifyImage', { item: item })}
                                >
                                    <View>
                                        <Text style={styles.primaryButtonText}>Modify Images</Text>
                                    </View>
                                </TouchableHighlight>) : null
                            }
                            <TouchableHighlight
                                style={styles.primaryButtonModify}
                                onPress={() => props.navigation.navigate('ModifyItem', { item: item })}
                            >
                                <View>
                                    <Text style={styles.primaryButtonText}>Modify Item</Text>
                                </View>
                            </TouchableHighlight>

                            <TouchableHighlight
                                style={styles.primaryButtonDelete}
                                onPress={() => props.navigation.navigate('DeleteItem', { item: item })}
                            >
                                <View>
                                    <Text style={styles.primaryButtonText}>Delete Item</Text>
                                </View>
                            </TouchableHighlight>

                        </View>
                    </View>
                )}
            />)
            : 
            (<Text>You don't have any item</Text>)
        }
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
    },
    item: {
        borderColor: 'black',
        borderWidth: 0.5,
        borderRadius: 8,
        marginBottom: 10,
    },
    buttons: {
        flexDirection: 'row',
        justifyContent:'space-around',
    // padding: 2,
        marginBottom: 5,
    },
    button: {
        flex: 1,
        margin: 2,
    },
    primaryButtonAdd: {
        backgroundColor: 'limegreen',
        textAlign: 'center',
        borderRadius: 5,
        height: 30,
        // width: 75,
        paddingHorizontal:7,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 0.5,
        marginHorizontal: 10,
    },
    primaryButtonModifyImages: {
        backgroundColor: 'blue',
        textAlign: 'center',
        borderRadius: 5,
        height: 30,
        // width: 75,
        paddingHorizontal:7,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 0.5,
        marginHorizontal: 10,
    },
    primaryButtonModify: {
        backgroundColor: 'orange',
        textAlign: 'center',
        borderRadius: 5,
        height: 30,
        // width: 75,
        paddingHorizontal:7,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 0.5,
        marginHorizontal: 10,
    },
    primaryButtonDelete: {
        backgroundColor: 'red',
        textAlign: 'center',
        borderRadius: 5,
        height: 30,
        // width: 75,
        paddingHorizontal:7,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 0.5,
        marginHorizontal: 10,
    },
    primaryButtonText: {
        color: 'white',
        fontSize: 13,
    }
})

export default GetItems