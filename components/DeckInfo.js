import React, { Component } from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { white } from '../utils/colors'

function AddCardBtn ({ onPress }) {
	return (
			<TouchableOpacity
			onPress= {onPress}>
                <Text> Add Card </Text>
            </TouchableOpacity>
		)
}

function StartQuizBtn ({ onPress }) {
	return (
			<TouchableOpacity
			onPress= {onPress}>
                <Text> Start Quiz </Text>
            </TouchableOpacity>
		)
}

export default class DeckInfo extends Component {
	static navigationOptions = ({ navigation }) => {
		const { title } = navigation.state.params
		return {
			title
		}
	}
	render () {
		const { title, questions } = this.props.navigation.state.params
		return <View style={styles.container}>
                <Text> {title} </Text>
                <Text> {questions.length}{questions.length > 1 ? ` cards` : ` card` }</Text>
                <AddCardBtn onPress={this.AddCardBtn}/>
                <StartQuizBtn onPress={this.StartQuizBtn}/>
            </View>
    }
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	}
})