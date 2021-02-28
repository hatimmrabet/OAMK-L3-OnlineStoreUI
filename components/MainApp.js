import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import View1 from './todoApp/View1'
import Todos from './todoApp/Todos'
import GetItems from './todoApp/GetItems'
import axios from 'axios';
import ImagePickAndSend from './ImagePickAndSend'
import ImagePickAndModify from './imagePichAndModify'
import ModifyItem from './ModifyItem'
import DeleteItem from './DeleteItem'
import SelectModifyImage from './SelectModifyImage'

const Stack = createStackNavigator();

export default class TodoApp extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isSubmitting: false,
    }    
  }

  componentDidMount() {
		axios({
			method: 'get',
			url: this.props.apiURI + '/items',
			headers: {"Authorization": "Bearer " + this.props.jwt}
		})
	  .then(response => {
			//handle success
			// console.log("Get /items successful")
			// console.log("Received following JSON");
      // console.log(response.data);
			this.setState({ items: response.data })
		})
		.catch(error => {
      console.log("error");
      console.log(error);
			//handle error
			//console.log(error.response.data);
			if (error.ok == false) {
				alert("Error: API response ");
			}
		});
	
	}
  
  onGetItems = () => {
    axios({
			method: 'get',
			url: this.props.apiURI + '/items',
			headers: {"Authorization": "Bearer " + this.props.jwt}
		})
	  .then(response => {
			//handle success
			// console.log("Get /items successful")
			// console.log("Received following JSON");
      // console.log(response.data);
			this.setState({ items: response.data })
      //console.log("------- in onGetitems()")
		})
		.catch(error => {
      console.log("error");
      console.log(error);
			//handle error
			//console.log(error.response.data);
			if (error.ok == false) {
				alert("Error: API response ");
			}
		});
  }

  onItemAdd = (itemTitle,itemDescription,itemPrice,itemCategory,itemCity,itemContryCode,itemDelivery) => {
    let body = {
      title: itemTitle,
      description: itemDescription,
      price: parseFloat(itemPrice),
      category: itemCategory,
      city: itemCity,
      contryCode: itemContryCode,
      delivery: itemDelivery,
      }
      axios({
          method: 'post',
          url: this.props.apiURI + '/items/',
          data: body,
          headers: {
            "Authorization": "Bearer " + this.props.jwt,
            "Content-type": "application/json" }
      })
      .then(response => {
          //handle success
          // console.log(response.data);
          // console.log(this.state.items);
          this.onGetItems();
          alert("Item Succesfully added");
          this.props.navigation.reset({
              index: 0,
              routes: [{ name: 'View1' }],
          })  
      })
      .catch(error => {
          //handle error
          console.log(error.response.data);
          if (error.response.request.status == 401) {
              alert("Unauthorized");
          }
          else if ((error.response.request.status == 400)) {
              alert("Bad Request, Missing data or contains invalid data type in a field: \n" + error.response.data);
          }
      });
  }

  onItemModify = (itemID, itemTitle,itemDescription,itemPrice,itemCategory,itemCity,itemContryCode,itemDelivery) => {
    let body = {
      title: itemTitle,
      description: itemDescription,
      price: parseFloat(itemPrice),
      category: itemCategory,
      city: itemCity,
      contryCode: itemContryCode,
      delivery: itemDelivery,
      }
      axios({
          method: 'put',
          url: this.props.apiURI + '/items/'+itemID,
          data: body,
          headers: {
            "Authorization": "Bearer " + this.props.jwt,
            "Content-type": "application/json" }
      })
      .then(response => {
          //handle success
          console.log("Item Modified =>");
          this.onGetItems();
          alert("Item Succesfully Modified");
          // console.log(response.data);
          // console.log(this.state.items);
          this.props.navigation.reset({
              index: 0,
              routes: [{ name: 'View1' }],
          })
      })
      .catch(error => {
          //handle error
          console.log(error.response.data);
          if (error.response.request.status == 401) {
              alert("Unauthorized");
          }
          else if ((error.response.request.status == 400)) {
              alert("Bad Request, Missing data or contains invalid data type in a field: \n" + error.response.data);
          }
      });
  }

  onItemDelete = (itemID) => {
      axios({
          method: 'delete',
          url: this.props.apiURI + '/items/'+itemID,
          headers: {"Authorization": "Bearer " + this.props.jwt}
      })
      .then(response => {
          //handle success
          // console.log("Item Deleted =>");
          // console.log(response.data);
          this.onGetItems();
          // console.log(this.state.items);
          alert("Item Succesfully Deleted");
          this.props.navigation.reset({
              index: 0,
              routes: [{ name: 'View1' }],
          })
      })
      .catch(error => {
          //handle error
          console.log(error.response);
          if (error.response.request.status == 401) {
              alert("Unauthorized");
          }
          else if ((error.response.request.status == 404)) {
              alert("Item ID not found");
          }
      });
  }

  render() {
    return (
      <Stack.Navigator>

        <Stack.Screen name="View1" options={{ title: 'Home' }}>
          { props => <View1 {...props} onLogout={ this.props.onLogout }/>}
        </Stack.Screen>

        <Stack.Screen name="GetItems" options={{ title: 'All your Items' }}>
          { props => <GetItems {...props}
                         items={this.state.items} onLogout={ this.props.onLogout }/>}
        </Stack.Screen>

        <Stack.Screen name="Todos" options={{ title: 'Add new Item' }} >    
          { props => <Todos {...props} items={ this.state.items } onItemAdd={ this.onItemAdd }/>}
        </Stack.Screen>

        <Stack.Screen name="AddImage" options={{ title: 'Add new Image' }} >    
          { props => 
          <View style={ styles.container }>
            <ImagePickAndSend
            {...props}  jwt={this.props.jwt} targetURI={this.props.apiURI} imageFormName='image'
                        onGetItems={this.onGetItems}>
            </ImagePickAndSend>
          </View>}
        </Stack.Screen>

        <Stack.Screen name="ModifyItem" options={{title: "Modify Item"}}>
          { props => <ModifyItem {...props} onItemModify={this.onItemModify}
          ></ModifyItem>}
        </Stack.Screen>

        <Stack.Screen name="DeleteItem" options={{title: "Delete Item"}}>
          { props => <DeleteItem {...props} onItemDelete={this.onItemDelete}
          ></DeleteItem>}
        </Stack.Screen>
        
        <Stack.Screen name="SelectModifyImage" options={{title: "Select Image to modify"}}>
          { props => <SelectModifyImage {...props} onImageModify={this.onItemDelete}
          ></SelectModifyImage>}
        </Stack.Screen>

        <Stack.Screen name="ModifyImage" options={{ title: 'Modify Image' }} >    
          { props => 
          <View style={ styles.container }>
            <ImagePickAndModify 
            {...props}  jwt={this.props.jwt} targetURI={this.props.apiURI} imageFormName='image'
                        onGetItems={this.onGetItems}>
            </ImagePickAndModify>
          </View>}
        </Stack.Screen>

      </Stack.Navigator>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingTop: 18
  },
});
