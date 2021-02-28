import React, { Component, useState } from "react";
import { View, Button, Text, StyleSheet } from "react-native";
import { createStackNavigator } from '@react-navigation/stack'
import SearchHomeScreen from '../components/SearchHomeScreen';
import SearchByCat from '../components/SearchByCat'
import SearchByDate from '../components/SearchByDate'
import SearchByLocation from '../components/SearchByLocation'
import axios from 'axios';


const SearchStack = createStackNavigator();

export default class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {
            itemsByCat: [],
            itemsByLocation: [],
            itemsByDate: [],
        }
    }

    getItemsByCat = (category) => {
        axios({
            method: 'get',
            url: this.props.apiURI + '/items/search-by/category/' + category,
        })
        .then(response => {
            //handle success
            this.setState({ itemsByCat: response.data });
        })
        .catch(error => {
            //handle error
            console.log("error:", error);
            if (error.ok == false) {
                alert("Error: API response ");
            }
        });
    }

    getItemsByDate = (startDate, endDate) => {
        axios({
            method: 'get',
            url: this.props.apiURI + '/items/search-by/date/'+startDate+'/'+endDate,
        })
        .then(response => {
            //handle success
            this.setState({ itemsByDate: response.data });
        })
        .catch(error => {
            //handle error
            console.log("error:", error);
            if (error.ok == false) {
                alert("Error: API response ");
            }
        });
    }

    getItemsByLocation = (contryCode, city) => {
        axios({
            method: 'get',
            url: this.props.apiURI + '/items/search-by/location/'+contryCode+'/'+city,
        })
        .then(response => {
            //handle success
            this.setState({ itemsByLocation: response.data });
        })
        .catch(error => {
            //handle error
            console.log("error:", error);
            if (error.ok == false) {
                alert("Error: API response ");
            }
        });
    }

    render() {
        return (
            <SearchStack.Navigator>

                <SearchStack.Screen name="SearchHomeScreen" options={{ title: 'Search' }}>
                    {props => <SearchHomeScreen {...props} />}
                </SearchStack.Screen>

                <SearchStack.Screen name="SearchByCat" options={{ title: 'Search by category' }}>
                    {props => <SearchByCat {...props} getItemsByCat={this.getItemsByCat} items={this.state.itemsByCat} />}
                </SearchStack.Screen>

                <SearchStack.Screen name="SearchByDate" options={{ title: 'Search by date' }}>
                    {props => <SearchByDate {...props} getItemsByDate={this.getItemsByDate} items={this.state.itemsByDate} />}
                </SearchStack.Screen>

                <SearchStack.Screen name="SearchByLocation" options={{ title: 'Search by location' }}>
                    {props => <SearchByLocation {...props} getItemsByLocation={this.getItemsByLocation} items={this.state.itemsByLocation} />}
                </SearchStack.Screen>

            </SearchStack.Navigator>
        );
    }
};

