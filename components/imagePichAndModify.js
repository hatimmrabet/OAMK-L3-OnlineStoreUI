import React, { Component } from 'react'
import { Text, View, TouchableOpacity, ActivityIndicator } from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import axios from 'axios'

export default class ImagePickAndModify extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isSubmitting: false,
        }
    }


    openImagePickerAsync = async () => {
        let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (permissionResult.granted === false) {
            alert("Permission to access camera roll is required!");
            return;
        }

        let pickerResult = await ImagePicker.launchImageLibraryAsync();
        console.log(pickerResult);

        if (pickerResult.cancelled == true) {
            alert('Image picker cancelled or failed');
            return;
        }

        const fileNameSplit = pickerResult.uri.split('/');
        const fileName = fileNameSplit[fileNameSplit.length - 1];

        let postForm = new FormData();
        postForm.append(this.props.imageFormName, {
            uri: pickerResult.uri,
            name: fileName,
            type: 'image/jpg'
        });
        this.setState({ isSubmitting: true })

        axios({
            method: 'put',
            url: this.props.targetURI + '/items/' + this.props.route.params.item.id + '/images/'+this.props.route.params.image.id,
            data: postForm,
            headers: {
                'Content-Type': 'multipart/form-data',
                "Authorization": "Bearer " + this.props.jwt
            }
        })
            .then(response => {
                //handle success
                // console.log(response);
                this.setState({ isSubmitting: false })
                this.props.onGetItems();
                alert("Image modified successfully");
                this.props.navigation.reset({
                    index: 0,
                    routes: [{ name: 'GetItems' }],
                })
            })
            .catch(function (error) {
                //handle err
                // console.log(error.response);
                if (error.status == 400) {
                    alert("Image upload failed, " + error.data);
                }
                else {
                    alert("Image upload failed :\n" + error.data);
                }
            },
                this.setState({ isSubmitting: false })
            );
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <View>
                    <Text> Image Picker </Text>
                    {this.state.isSubmitting ? <ActivityIndicator /> :
                        <TouchableOpacity
                            onPress={this.openImagePickerAsync}
                            style={{ backgroundColor: 'rgb(51, 153, 255)', borderWidth: 1, borderColor: 'black', width: 250, height: 30 }}>
                            <Text style={{ color: 'white' }}>Pick a photo and start upload</Text>
                        </TouchableOpacity>
                    }
                </View>
            </View>
        )
    }
}
