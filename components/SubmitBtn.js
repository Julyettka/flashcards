import React from 'react'
import { Text, StyleSheet, TouchableOpacity, Platform } from 'react-native'
import { SubmitBtn } from '../utils/styles'
import { white } from '../utils/colors'

export default function SubmitBtn ({ onPress }) {
	return (
			<TouchableOpacity
			style={Platform.OS === 'ios' ? SubmitBtn.iosSubmitBtn : SubmitBtn.AndroidSubmitBtn}
			onPress= {onPress}>
                <Text style={{color: white}}> SUBMIT </Text>
            </TouchableOpacity>
		)
}

