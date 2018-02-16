import React, { Component } from 'react'
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import { fetchDecks } from '../utils/api'
import { connect } from 'react-redux'
import { getDecks } from '../actions'
import { AppLoading } from 'expo'
import { white } from '../utils/colors'
import DeckCard from './DeckCard'

class Decks extends Component {
	state = {
		ready: false
	}
	componentDidMount () {
		const { dispatch } = this.props
		fetchDecks().then(decks => dispatch(getDecks(decks)))
            .then(() => this.setState(() => ({ready: true})))
	}
	renderItem = ({ item }) => (
        <View >
        	<TouchableOpacity onPress={() => this.props.navigation.navigate('DeckInfo', item)}>
	            <DeckCard
	                title={item.title}
	                questions={item.questions}/>
            </TouchableOpacity>
        </View>
    );

	render () {
		const { decks } = this.props
		const { ready } = this.state
		if (ready === false){
			return <AppLoading/>
		}
		return (
			<FlatList
				data={Object.values(decks)}
				renderItem={this.renderItem}
				keyExtractor={(item, index) => index}
			/>
			)
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
  },
})

function mapStateToProps(decks) {
	return {
		decks
	}
}

export default connect(mapStateToProps)(Decks)