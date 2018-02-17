import React, { Component } from 'react'
import { View, Text } from 'react-native'

export default class AddQuestion extends Component{
	static navigationOptions = ({ navigation }) => {
		const { title } = navigation.state.params
		return {
			title: `Add new card to ${title} deck`
		}
	}
	render(){
		return (
			<View>
				<Text>Add Question</Text>
			</View>
			)
	}
}