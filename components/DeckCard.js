import React, { Component } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { primaryText, secondaryText, divider } from '../utils/colors'

export default class DeckCard extends Component {
	render () {
		const {title, questions} = this.props
		return <View style={styles.deck}>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.info}>{questions.length} cards</Text>
            </View>
        </View>
    }
}

const styles = StyleSheet.create({
    deck: {
        height: 140,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 0.5,
        borderColor: divider,
    },
    title: {
    	fontSize: 25,
    	color: primaryText,
    },
    info: {
    	fontSize: 15,
    	color: secondaryText,
    }
});