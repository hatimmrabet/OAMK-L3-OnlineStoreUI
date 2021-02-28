import React,  { Component, useState }  from 'react'
import { View, Text, ActivityIndicator, StyleSheet, Button } from 'react-native'

const SearchHomeScreen = (props) => {
  
  return (
    <View style={styles.searchBar}>
        <Text style={styles.text} >Search Items by:</Text>
        <View style={styles.buttons}>
            <Button title={"Category"} style={styles.button} onPress={() =>props.navigation.navigate('SearchByCat') }/>
            <Button title={"Date"} style={styles.button} onPress={() => props.navigation.navigate('SearchByDate')} />
            <Button title={"Location"} style={styles.button} onPress={() => props.navigation.navigate('SearchByLocation')} />
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  searchBar: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent:'center',
    textAlign:'center',
    margin: 15
  },
  text: {
    flex:1,
    fontSize: 14,
    padding: 6
  },
  buttons: {
    flex:2, 
    flexDirection:'row', 
    justifyContent:'space-around',
  },
  button: {
    margin: 10,
  }
});

export default SearchHomeScreen
