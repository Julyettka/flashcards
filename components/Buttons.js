import React from 'react'
import { Text, TouchableOpacity, Platform, StyleSheet } from 'react-native'
import { white, primaryDark, primaryLight, primary,
	accent, primaryText, secondaryText, divider } from '../utils/colors'


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

const button = StyleSheet.create({
    iosSubmitBtn: {
	    backgroundColor: primaryDark,
	    padding: 10,
	    borderRadius: 7,
	    height: 45,
	    marginLeft: 40,
	    marginRight: 40,
	    width: 160
  },
  AndroidSubmitBtn: {
	    backgroundColor: primaryDark,
	    padding: 10,
	    paddingLeft: 30,
	    paddingRight: 30,
	    height: 45,
	    borderRadius: 2,
	    justifyContent: 'center',
	    alignItems: 'center',
	    width: 160
  },
  addCardBtn: {
    	backgroundColor: primary,
	    padding: 10,
	    paddingLeft: 40,
	    paddingRight: 40,
	    height: 50,
	    borderRadius: 2,
	    justifyContent: 'center',
	    alignItems: 'center',
	    marginTop: 10,
	    marginBottom: 10,
	    width: 160
    },
    quizBtn: {
    	backgroundColor: primaryDark,
	    padding: 10,
	    paddingLeft: 40,
	    paddingRight: 40,
	    height: 50,
	    borderRadius: 2,
	    justifyContent: 'center',
	    alignItems: 'center',
	    marginTop: 10,
	    marginBottom: 10,
	    width: 160
    },
    removeBtn: {
    	color: accent,
    	marginTop: 40,
    	padding: 15
    },
    disabledBtn: {
    	backgroundColor: divider,
	    padding: 10,
	    paddingLeft: 40,
	    paddingRight: 40,
	    height: 50,
	    borderRadius: 2,
	    justifyContent: 'center',
	    alignItems: 'center',
	    marginTop: 10,
	    marginBottom: 10,
	    width: 160
    },
    CorrectBtn: {
    	backgroundColor: primaryDark,
	    padding: 10,
	    paddingLeft: 40,
	    paddingRight: 40,
	    height: 50,
	    borderRadius: 2,
	    justifyContent: 'center',
	    alignItems: 'center',
	    marginTop: 10,
	    marginBottom: 10,
	    width: 160
    },
    IncorrectBtn: {
    	backgroundColor: accent,
	    padding: 10,
	    paddingLeft: 40,
	    paddingRight: 40,
	    height: 50,
	    borderRadius: 2,
	    justifyContent: 'center',
	    alignItems: 'center',
	    marginTop: 10,
	    marginBottom: 10,
	    width: 160
    },
    BackDeckBtn: {
    	backgroundColor: primary,
	    padding: 10,
	    paddingLeft: 40,
	    paddingRight: 40,
	    height: 50,
	    borderRadius: 2,
	    justifyContent: 'center',
	    alignItems: 'center',
	    marginTop: 10,
	    marginBottom: 10,
	    width: 160
    }
})