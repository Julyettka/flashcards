import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { fetchDecks } from '../utils/api'
import { connect } from 'react-redux'
import { getDecks } from '../actions'
import { AppLoading } from 'expo'

class Decks extends Component {
	state = {
		ready: false
	}
	componentDidMount () {
		const { dispatch } = this.props
		fetchDecks().then(decks => dispatch(getDecks(decks)))
            .then(() => this.setState(() => ({ready: true})))
	}
	render () {
		const { decks } = this.props
		const { ready } = this.state
		if (ready === false){
			return <AppLoading/>
		}
		return (
			<View>
				<Text> initialData </Text>
			</View>
			)
	}
}

function mapStateToProps(decks) {
	return {
		decks
	}
}

export default connect(mapStateToProps)(Decks)