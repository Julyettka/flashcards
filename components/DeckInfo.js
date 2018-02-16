import React, { Component } from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import {  } from '../utils/colors'

export default class DeckInfo extends Component {
	static navigationOptions = ({ navigation }) => {
		const { title } = navigation.state.params
		return {
			title
		}
	}
	render () {
		return <View>
                <Text> Deck info title </Text>
            </View>
    }
}