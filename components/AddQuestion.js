import React, { Component } from 'react'
import { View, Text, TextInput, StyleSheet, KeyboardAvoidingView,
	TouchableOpacity, Alert } from 'react-native'
import { primaryText } from '../utils/colors'
import SubmitBtn from './Buttons'
import { connect } from 'react-redux'
import { addQuestion } from '../actions/'
import { mergeQuestion } from '../utils/api'

class AddQuestion extends Component{
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
		const { question, answer } = this.state
		const { dispatch } = this.props
		const { title, questions } = this.props.navigation.state.params
		if (!question || !answer){
			Alert.alert('Field cannot be empty')
		}
		const params = { title, questions, question, answer }
		dispatch(addQuestion(params))
		mergeQuestion({
			card: {question, answer},
			deck: title
		})
		Alert.alert('Success', 'Card added',
			[
                {
                    text: 'OK', onPress: () =>
                    this.props.navigation.goBack()
                }
            ])
		this.setState({question: '',
			answer: ''
		})
	}
	render(){
		return (
			<KeyboardAvoidingView behavior='padding' style={styles.container}>
				<Text style={styles.text}>New question:</Text>
				<TextInput style={styles.input}
				onChangeText={question => this.setState({question})}></TextInput>
				<Text style={styles.text}>Answer:</Text>
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

function mapStateToProps(state){
	return{
		decks: state
	}
}

export default connect(mapStateToProps)(AddQuestion)