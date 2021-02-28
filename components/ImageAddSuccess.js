import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

const ImageAddSuccess = (props) => {


  return (
    <View style={ styles.screen }>
      <Text style={ styles.header }>Image added Succesfully</Text>
      <Button title="Home View" onPress={ () => 
                                          props.navigation.reset({
                                          index: 0,
                                          routes: [{ name: 'View1' }],
        })}></Button>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: 'rgb(227, 178, 0)',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  header: {
    fontSize: 40,
    marginBottom: 20,
    color: 'white'
  },
  text: {
    fontSize: 20,
    color: 'white'
  }
});


export default ImageAddSuccess
