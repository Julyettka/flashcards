import React, { Component } from 'react'
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import { white, primaryDark, primaryLight, primary, primaryText, secondaryText, accent, divider } from '../utils/colors'

function CorrectBtn ({ onPress }) {
	return (
			<TouchableOpacity
			style={styles.CorrectBtn}
			onPress= {onPress}>
                <Text style={{color: white}}> Correct </Text>
            </TouchableOpacity>
		)
}

function IncorrectBtn ({ onPress }) {
	return (
			<TouchableOpacity
			style={styles.IncorrectBtn}
			onPress= {onPress}>
                <Text style={{color: white}}> Incorrect </Text>
            </TouchableOpacity>
		)
}

function StartAgainBtn ({ onPress }) {
	return (
			<TouchableOpacity
			style={styles.CorrectBtn}
			onPress= {onPress}>
                <Text style={{color: white}}> Start Again </Text>
            </TouchableOpacity>
		)
}

function BackDeckBtn ({ onPress}){
	return (
			<TouchableOpacity
			style={styles.BackDeckBtn}
			onPress= {onPress}>
                <Text style={{color: white}}> Go Back </Text>
            </TouchableOpacity>
		)
}

export default class Quiz extends Component{
	state = {
		counter: 0,
		score: 0,
		showAns: false,
	}

	showAns = () => {
		this.setState({
			showAns: !this.state.showAns
		})
	}

	onCorrect = () => {
		const { counter, score } = this.state
		this.setState({
			counter: counter + 1,
			score: score + 1,
			showAns: false
		})

	}

	onIncorrect = () => {
		const { counter } = this.state
		this.setState({
			counter: counter + 1,
			showAns: false
		})
	}

	StartAgain = () => {
		const { counter, score } = this.state
		this.setState({
			counter: 0,
			score: 0,
			showAns: false
		})

	}

	BackDeck = () => {
		this.props.navigation.goBack()
	}

	render () {
		const { width, height } = Dimensions.get('window')
		const { title, questions } = this.props.navigation.state.params
		const { counter, showAns, score} = this.state
		const isAvailable = counter < questions.length
		return(
			<View style={{flex: 1}}>
			{isAvailable ? (
				<View style={styles.container}>
					<Text style={styles.title}> {`Quiz in ${title} deck`} </Text>
		            <Text style={styles.stat}>{`${counter + 1}/${questions.length}`}</Text>
		            <View style={[styles.flipcard, {width: width - 100}]}>
		            	<Text style={styles.qna}>{showAns ? questions[counter].answer :
		            		questions[counter].question}</Text>
		            </View>
		            <TouchableOpacity onPress={this.showAns}>
		            	<Text style={styles.check}>{showAns ? `Hide answer` : `Show answer`}</Text>
		            </TouchableOpacity>
		            <CorrectBtn onPress={this.onCorrect}/>
		            <IncorrectBtn onPress={this.onIncorrect}/>
		        </View>
				) : (
				<View style={styles.container}>
					<Text style={styles.title}>Your score: {score} of {questions.length}</Text>
					<StartAgainBtn onPress={this.StartAgain}/>
					<BackDeckBtn onPress={this.BackDeck}/>
				</View>
				)}
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
	flipcard: {
		alignItems: 'center',
		borderWidth: 1,
		borderColor: primary,
		backgroundColor: primary,
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
		marginTop: 10,
		marginBottom: 20,
    },
    stat: {
    	fontSize: 20,
    	color: secondaryText,
    	marginBottom: 20,
    },
    qna: {
    	color: white,
    	fontSize: 20,
    	textAlign: 'center',
    },
    check: {
    	fontSize: 16,
    	marginBottom: 40,
    	textDecorationLine: 'underline',
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