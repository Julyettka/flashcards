import React, { Component } from 'react'
import { View, Text, TextInput, StyleSheet, KeyboardAvoidingView,
	TouchableOpacity, Platform } from 'react-native'
import { primaryText, white, primaryDark } from '../utils/colors'
import SubmitBtn from './SubmitBtn'

export default class AddQuestion extends Component{
	static navigationOptions = ({ navigation }) => {
		const { title } = navigation.state.params
		return {
			title: `Add new card to ${title} deck`
		}
	}
	state = {
		question: '',
		answer: ''
	}

	addQuestion = () => {
		//add question and merge it with others
	}
	render(){
		return (
			<KeyboardAvoidingView behavior='padding' style={styles.container}>
				<Text style={styles.text}>New question</Text>
				<TextInput style={styles.input}
				onChangeText={question => this.setState({question})}></TextInput>
				<Text style={styles.text}>Answer</Text>
				<TextInput style={styles.input}
				onChangeText={answer => this.setState({answer})}></TextInput>
				<SubmitBtn onPress={this.addQuestion}/>
			</KeyboardAvoidingView>
			)
	}
}

const styles = StyleSheet.create({
container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	input: {
        width: 300,
        height: 45,
        padding: 6,
        margin: 24,
        textAlign: 'center',
    },
    text: {
    	fontSize: 18,
    	color: primaryText,
    },
})