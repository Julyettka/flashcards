import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity,
	Platform, KeyboardAvoidingView, Alert } from 'react-native'
import { primaryText, white, primaryDark } from '../utils/colors'
import { addDeck } from '../actions/'
import { mergeDeck } from '../utils/api'
import { connect } from 'react-redux'
import SubmitBtn from './SubmitBtn'

class NewDeck extends Component {
	state = {
		deckTitle: '',
	}
	handleTextChange = (input) => {
		this.setState(() => ({
					deckTitle: input
				}))
	}

	addDeck = () => {
		const { dispatch, decks } = this.props
		const title = this.state.deckTitle
		if (!title) {
			Alert.alert('Deck name cannot be empty')
		}
		else if (title === decks.title){
			Alert.alert('This deck already exists')
		} else {
			const newDeck = {
				title: {
					title: title,
					questions: []
				}
			}
			dispatch(addDeck(newDeck))
			mergeDeck(newDeck)
			Alert.alert('Deck added')
			this.setState({deckTitle: ''})
		}
	}

	render () {
		const { deckTitle } = this.state
		return (
			<KeyboardAvoidingView behavior='padding' style={styles.container}>
				<Text style={styles.text}>New deck title </Text>
				<TextInput value={deckTitle} style={styles.input}
				onChangeText={this.handleTextChange}/>
				<SubmitBtn onPress={this.addDeck}/>
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

function mapStateToProps(state){
	return {
		decks: state
	}
}

export default connect(mapStateToProps)(NewDeck)