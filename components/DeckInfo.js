import React, { Component } from 'react'
import { View, StyleSheet, Text, TouchableOpacity, Alert } from 'react-native'
import { primaryText, secondaryText } from '../utils/colors'
import { removeDeck } from '../utils/api'
import { connect } from 'react-redux'
import {AddCardBtn, StartQuizBtn, DisabledBtn, RemoveBtn} from './Buttons'

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
    }
})

function mapStateToProps (state, {navigation}) {
const { title } = navigation.state.params
	return {
		title
	}
}

export default connect(mapStateToProps) (DeckInfo)