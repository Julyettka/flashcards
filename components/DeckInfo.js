import React, { Component } from 'react'
import { View, StyleSheet, Text, TouchableOpacity, Alert } from 'react-native'
import { white, primaryDark, primary, primaryText, secondaryText, accent, divider } from '../utils/colors'
import { removeDeck } from '../utils/api'
import { connect } from 'react-redux'

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

function DisabledBtn ({ onPress }) {
	return (
			<TouchableOpacity
			style={styles.disabledBtn}
			onPress= {onPress}>
                <Text style={{color: white}}> Start Quiz </Text>
            </TouchableOpacity>
		)
}

function RemoveBtn ({ onPress }) {
	return (
			<TouchableOpacity
			onPress= {onPress}>
                <Text style={styles.removeBtn}> Remove Deck </Text>
            </TouchableOpacity>
		)
}

class DeckInfo extends Component {
	static navigationOptions = ({ navigation }) => {
		const { title } = navigation.state.params
		return {
			title
		}
	}

	warning = () => {
		Alert.alert('Warning', 'No questions in this deck. Add cards first.')
	}

	removeDeck = () => {
		const { dispatch, title } = this.props
		console.log(title)
		Alert.alert('Delete', 'Are you sure you want to remove this Deck?',
			[
			 	{
			 		text: 'No', onPress: () => {}
			 	},
			 	{
			 		text: 'Yes', onPress: () => {
			 			removeDeck(title)
			 			this.props.navigation.goBack()
			 		}
			 	}
			])
	}
	render () {
		let { title, questions } = this.props.navigation.state.params
		questions = questions || []
		return (
			<View style={styles.container}>
	        	<Text style={styles.title}> {title} </Text>
	            <Text style={styles.info}>{questions.length}{questions.length > 1 ? ` cards` : ` card` }</Text>
	            <AddCardBtn onPress={() => this.props.navigation.navigate('AddQuestion', {title, questions})}/>
	            {questions.length > 0 ?
	            (<StartQuizBtn onPress={() => this.props.navigation.navigate('Quiz', {title, questions})}/>)
	            :
	            (<DisabledBtn onPress={this.warning}/>)
	        	}
	            <RemoveBtn onPress={this.removeDeck}/>
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
})

function mapStateToProps (state, {navigation}) {
const { title } = navigation.state.params
	return {
		title
	}
}

export default connect(mapStateToProps) (DeckInfo)