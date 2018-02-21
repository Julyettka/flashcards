import React from 'react'
import { Text, TouchableOpacity, Platform } from 'react-native'
import { white } from '../utils/colors'
import button from '../utils/styles'

export function SubmitBtn ({ onPress }) {
	return (
			<TouchableOpacity
			style={Platform.OS === 'ios' ? button.iosSubmitBtn : button.AndroidSubmitBtn}
			onPress= {onPress}>
                <Text style={{color: white}}> SUBMIT </Text>
            </TouchableOpacity>
		)
}

export function AddCardBtn ({ onPress }) {
	return (
			<TouchableOpacity
			style={button.addCardBtn}
			onPress= {onPress}>
                <Text style={{color: white}}> Add Card </Text>
            </TouchableOpacity>
		)
}

export function StartQuizBtn ({ onPress }) {
	return (
			<TouchableOpacity
			style={button.quizBtn}
			onPress= {onPress}>
                <Text style={{color: white}}> Start Quiz </Text>
            </TouchableOpacity>
		)
}

export function DisabledBtn ({ onPress }) {
	return (
			<TouchableOpacity
			style={button.disabledBtn}
			onPress= {onPress}>
                <Text style={{color: white}}> Start Quiz </Text>
            </TouchableOpacity>
		)
}

export function RemoveBtn ({ onPress }) {
	return (
			<TouchableOpacity
			onPress= {onPress}>
                <Text style={button.removeBtn}> Remove Deck </Text>
            </TouchableOpacity>
		)
}

export function CorrectBtn ({ onPress }) {
	return (
			<TouchableOpacity
			style={button.CorrectBtn}
			onPress= {onPress}>
                <Text style={{color: white}}> Correct </Text>
            </TouchableOpacity>
		)
}

export function IncorrectBtn ({ onPress }) {
	return (
			<TouchableOpacity
			style={button.IncorrectBtn}
			onPress= {onPress}>
                <Text style={{color: white}}> Incorrect </Text>
            </TouchableOpacity>
		)
}

export function StartAgainBtn ({ onPress }) {
	return (
			<TouchableOpacity
			style={button.CorrectBtn}
			onPress= {onPress}>
                <Text style={{color: white}}> Start Again </Text>
            </TouchableOpacity>
		)
}

export function BackDeckBtn ({ onPress}){
	return (
			<TouchableOpacity
			style={button.BackDeckBtn}
			onPress= {onPress}>
                <Text style={{color: white}}> Go Back </Text>
            </TouchableOpacity>
		)
}