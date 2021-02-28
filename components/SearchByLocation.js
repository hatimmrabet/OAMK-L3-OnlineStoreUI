import React, {useState} from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Button, FlatList } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import OneItem from './todoApp/OneItem';


const SearchByLocation = (props) => {
    
    const [contryCode, setContryCode] = useState('FI');
    const [city, setCity] = useState('Helsinki');

    return (
        <View style={styles.container}>
            <View style={styles.searchBar}>
                <TextInput 
                    style={styles.searchText}
                    placeholder="Contry code"
                    onChangeText={value => setContryCode(value)}
                    value={contryCode}>
                </TextInput>
                <TextInput 
                    style={styles.searchText}
                    placeholder="City"
                    onChangeText={value => setCity(value)}
                    value={city}>
                </TextInput>
                <Button 
                    title="Search" 
                    style={styles.searchButton} 
                    onPress={() => props.getItemsByLocation(contryCode, city)} 
                />
            </View>
            <View style={styles.items}>
                {props.items.length != 0 ? 
                    (<FlatList showsVerticalScrollIndicator={false}
                        data={props.items}
                        renderItem={({ item }) => (
                            <View style={styles.item}>
                                <OneItem item={item} />
                            </View>
                        )}
                    />)
                :
                    (<Text>No items found</Text>)
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 10,
    },
    searchBar: {
        flexDirection: 'row',
        width: '80%',
        margin: 15,
        borderColor: 'black',
        borderStyle: 'solid',
        borderRadius: 5,
        borderWidth: 1,
        padding: 3
    },
    searchText: {
        flex: 5,
        paddingLeft: 10,
        borderRightColor: 'black',
        borderRightWidth: 1,
    },
    searchButton: {
        flex: 1,
        borderRadius: 5,
    },
    items: {
        flex:1,
        width: '80%'
    },
    item: {
        borderColor: 'black',
        borderWidth: 0.5,
        marginBottom: 10,
    },
});

export default SearchByLocation
