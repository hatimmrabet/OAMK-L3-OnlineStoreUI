import React, { useState } from 'react'
import { View, Text, TextInput, TouchableHighlight, Button, StyleSheet } from 'react-native'
import { Base64 } from 'js-base64'
import axios from 'axios';

const LoginScreen = (props) => {
	const [userName, setUserName] = useState("");
	const [password, setPassword] = useState("");

	function loginClick() {
		axios({
			method: 'get',
			url: props.apiURI + '/users/login',
			headers: {"Authorization": "Basic " + Base64.encode(userName + ":" + password)}
		})
		.then(response => {
			//handle success
			console.log("Login successful")
			console.log("Received following JSON");
			console.log(response.data);
			props.onLoginReceiveJWT(response.data.token);
		})
		.catch(error => {
			//handle error
			console.log(error);
			if (error.response.status == 401) {
				alert("incorrect username or password");
			}
		})
	}

	return (
		<View style={styles.screen}>
			<Text style={styles.header}>User Login</Text>
			<Text style={styles.text}>Username</Text>
			<TextInput
				autoCapitalize='none'
				style={styles.input}
				value={userName}
				placeholder="johndoe"
				onChangeText={value => setUserName(value)}
			/>
			<Text style={styles.text}>Password</Text>
			<TextInput
				autoCapitalize='none'
				style={styles.input}
				value={password}
				placeholder="password"
				onChangeText={value => setPassword(value)}
			/>
			<View style={{flexDirection:'row', justifyContent:'space-around'}}>
				<TouchableHighlight 
					underlayColor='green'
					style={styles.primaryButton}
					onPress={() => loginClick()}
				>
					<View>
						<Text style={styles.primaryButtonText}>Login</Text>
					</View>
				</TouchableHighlight>
				<TouchableHighlight 
					style={styles.primaryButton}
					onPress={() => props.navigation.navigate('Signup')} 
				>
					<View>
						<Text style={styles.primaryButtonText}>Sign up</Text>
					</View>
				</TouchableHighlight>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	screen: {
		backgroundColor: 'rgb(51, 153, 255)',
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	header: {
		fontSize: 40,
		marginBottom: 30,
		color: 'white',
		fontWeight: 'bold',
		marginBottom: 20,
	},
	text: {
		fontSize: 20,
		color: 'white'
	},
	input: {
		borderWidth: 1,
		borderRadius: 10,
		height: 40,
		width: '75%',
		backgroundColor: 'white',
		textAlign: 'center',
		fontSize: 18,
		marginTop: 5,
		marginBottom: 20
	},
	primaryButton: {
        textAlign: 'center',
        backgroundColor:"black",
        borderRadius: 10,
		height: 50,
		width: 140,
		justifyContent: 'center',
		alignItems: 'center',
		borderWidth: 0.5,
		marginTop: 20,
		marginHorizontal: 10,
	},
	primaryButtonText: {
		color: 'white',
		fontSize: 17,
		fontWeight: 'bold',
	}
});

export default LoginScreen
