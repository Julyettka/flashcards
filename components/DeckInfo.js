import React, { Component } from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { white, primaryDark, primary, primaryText, secondaryText } from '../utils/colors'

function AddCardBtn ({ onPress }) {
	return (
			<TouchableOpacity
			style={styles.addCardBtn}
			onPress= {onPress}>
                <Text style={{color: white}}> Add Card </Text>
            </TouchableOpacity>
		)
}
//disable button if 0 cards
function StartQuizBtn ({ onPress }) {
	return (
			<TouchableOpacity
			style={styles.quizBtn}
			onPress= {onPress}>
                <Text style={{color: white}}> Start Quiz </Text>
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
		return (
			<View style={styles.container}>
	        	<Text style={styles.title}> {title} </Text>
	            <Text style={styles.info}>{questions.length}{questions.length > 1 ? ` cards` : ` card` }</Text>
	            <AddCardBtn onPress={() => this.props.navigation.navigate('AddQuestion', {title, questions})}/>
	            <StartQuizBtn onPress={() => this.props.navigation.navigate('Quiz', {title, questions})}/>
	        </View>
			)
    }
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	title: {
    	fontSize: 28,
    	color: primaryText,
		marginTop: 50,
    },
    info: {
    	fontSize: 16,
    	color: secondaryText,
    	marginBottom: 140,
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
    }

})