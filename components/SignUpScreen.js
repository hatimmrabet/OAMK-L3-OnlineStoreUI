import React, { useState } from 'react'
import { View, Text, StyleSheet, Button, TextInput, TouchableHighlight, ScrollView } from 'react-native'
import axios from 'axios';

const SignUpScreen = (props) => {

    const [username, setUsername] = useState("tester");
    const [password, setPassword] = useState("12345");
    const [firstName, setFirstName] = useState("Foo");
    const [lastName, setLastName] = useState("Bar");
    const [dateOfBirth, setDateOfBirth] = useState("2000-06-30");
    const [email, setEmail] = useState("test@test.com");
    const [gender, setGender] = useState("male");
    const [phoneNumber, setPhoneNumber] = useState("+33618256737");
    const [city, setCity] = useState("Oulu");
    const [contryCode, setContryCode] = useState("FI");

    function signupPressed() {
        let body = {
            username: username,
            password: password,
            firstName: firstName,
            lastName: lastName,
            dateOfBirth: dateOfBirth,
            email: email,
            gender: gender,
            phoneNumber: phoneNumber,
            city: city,
            contryCode: contryCode,
        }
        axios({
            method: 'post',
            url: props.apiURI + '/users/',
            data: body,
            headers: { "Content-type": "application/json" }
        })
            .then(response => {
                //handle success
                console.log("user added =>" + response.data)
                props.navigation.reset({
                    index: 0,
                    routes: [{ name: 'SignupCompleted' }],
                })
            })
            .catch(error => {
                //handle error
                console.log(error.response.data);
                if (error.response.request.status == 409) {
                    alert("username exist already");
                }
                else if ((error.response.request.status == 400)) {
                    alert("Bad Request, Missing data or contains invalid data type in a field: \n" + error.response.data);
                }
            });
    }

    return (
        <View style={styles.screen}>
            <Text style={styles.header}>Sign Up</Text>
            <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
                <View style={styles.form}>
                    <Text>Please enter your username</Text>
                    <TextInput
                        autoCapitalize='none'
                        style={styles.input}
                        value={username}
                        placeholder="johndoe"
                        onChangeText={value => setUsername(value)}
                    />
                    <Text>Please enter your email</Text>
                    <TextInput
                        keyboardType='email-address'
                        autoCapitalize='none'
                        style={styles.input}
                        value={email}
                        placeholder="test@email.com"
                        onChangeText={value => setEmail(value)}
                    />
                    <Text>Please enter your password</Text>
                    <TextInput
                        autoCapitalize='none'
                        style={styles.input}
                        value={password}
                        placeholder="password"
                        onChangeText={value => setPassword(value)}
                    />
                    <Text>Please enter your First Name</Text>
                    <TextInput
                        style={styles.input}
                        value={firstName}
                        placeholder="Hatim"
                        onChangeText={value => setFirstName(value)}
                    />
                    <Text>Please enter your Last Name</Text>
                    <TextInput
                        style={styles.input}
                        value={lastName}
                        placeholder="M'rabet"
                        onChangeText={value => setLastName(value)}
                    />
                    <Text>Please enter your Birth date</Text>
                    <TextInput
                        keyboardType='numeric'
                        autoCapitalize='none'
                        style={styles.input}
                        value={dateOfBirth}
                        placeholder="2000-11-30"
                        onChangeText={value => setDateOfBirth(value)}
                    />
                    <Text>Please enter your gender (male/female)</Text>
                    <TextInput
                        autoCapitalize='none'
                        style={styles.input}
                        value={gender}
                        placeholder="male"
                        onChangeText={value => setGender(value)}
                    />
                    <Text>Please enter your phone number</Text>
                    <TextInput
                        keyboardType="phone-pad"
                        autoCapitalize='none'
                        style={styles.input}
                        value={phoneNumber}
                        placeholder="+33618256737"
                        onChangeText={value => setPhoneNumber(value)}
                    />
                    <Text>Please enter your city</Text>
                    <TextInput
                        autoCapitalize='none'
                        style={styles.input}
                        value={city}
                        placeholder="Helsinki"
                        onChangeText={value => setCity(value)}
                    />
                    <Text>Please enter your contry code</Text>
                    <TextInput
                        autoCapitalize='none'
                        style={styles.input}
                        value={contryCode}
                        placeholder="FI"
                        onChangeText={value => setContryCode(value)}
                    />
                    <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
                        <TouchableHighlight
                            style={styles.primaryButton}
                            underlayColor='green'
                            onPress={() => signupPressed()}>
                            <View >
                                <Text style={styles.primaryButtonText}>Sign up</Text>
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight
                            style={styles.primaryButton}
                            underlayColor='red'
                            onPress={() => props.navigation.reset({
                                index: 0,
                                routes: [{ name: 'Login' }],
                            })}>
                            <View>
                                <Text style={styles.primaryButtonText}>Cancel</Text>
                            </View>
                        </TouchableHighlight>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        backgroundColor: 'rgb(51, 153, 255)',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    scrollView: {
        flex: 1,
        width: '80%',
        marginHorizontal: "5%"
    },
    header: {
        textAlign: "center",
        fontSize: 40,
        marginBottom: 20,
        color: 'white'
    },
    text: {
        fontSize: 20,
        color: 'white',
        textAlign: "center"
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
        backgroundColor: "black",
        borderRadius: 10,
        height: 50,
        width: 140,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 0.5,
        marginBottom: 20,
        marginHorizontal: 10,
    },
    primaryButtonText: {
        color: 'white',
        fontSize: 17,
        fontWeight: 'bold',
    },
    form: {
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        // backgroundColor:'red',
    }
});


export default SignUpScreen
