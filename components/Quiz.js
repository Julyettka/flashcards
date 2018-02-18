import React, { Component } from 'react'
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import { white, primaryDark, primaryLight, primary, primaryText, secondaryText, accent } from '../utils/colors'

function CorrectBtn ({ onPress }) {
	return (
			<TouchableOpacity
			style={styles.CorrectBtn}
			onPress= {onPress}>
                <Text style={{color: white}}> Correct </Text>
            </TouchableOpacity>
		)
}
//disable button if 0 cards
function IncorrectBtn ({ onPress }) {
	return (
			<TouchableOpacity
			style={styles.IncorrectBtn}
			onPress= {onPress}>
                <Text style={{color: white}}> Incorrect </Text>
            </TouchableOpacity>
		)
}

export default class Quiz extends Component{
	increment = (counter) => {
		return counter++;
	}

	render () {
		const { width, height } = Dimensions.get('window')
		const { title, questions } = this.props.navigation.state.params
		const counter = 1;
		return (
			<View style={styles.container}>
				<Text style={styles.title}> {`Quiz in ${title} deck`} </Text>
	            <Text style={styles.stat}>{`${counter}/${questions.length}`}</Text>
	            <View style={[styles.flipcard, {width: width - 100}]}>
	            	<Text>blabla</Text>
	            </View>
	            <Text style={{fontSize: 16, marginBottom: 40, textDecorationLine: 'underline'}}>View answer</Text>
	            <CorrectBtn/>
	            <IncorrectBtn/>
	        </View>
			)
    }
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
	},
	flipcard: {
		alignItems: 'center',
		borderWidth: 1,
		borderColor: primaryLight,
		backgroundColor: primaryLight,
		borderRadius: 10,
		padding: 35,
		height: 220,
		marginBottom: 15,
		shadowColor: 'rgba(0, 0, 0, 0.24)',
    	shadowOffset: {
	      width: 10,
	      height: 3
	    },
    	shadowRadius: 6,
    	shadowOpacity: 1
	},
	title: {
    	fontSize: 28,
    	color: primaryText,
		marginTop: 30,
		marginBottom: 20,
    },
    stat: {
    	fontSize: 20,
    	color: secondaryText,
    	marginBottom: 20,
    },
    CorrectBtn: {
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
    }
})