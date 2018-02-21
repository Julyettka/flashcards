import React from 'react'
import { Text, TouchableOpacity, Platform } from 'react-native'
import { white } from '../utils/colors'
import submitBtn from '../utils/styles'

export default function SubmitBtn ({ onPress }) {
	return (
			<TouchableOpacity
			style={Platform.OS === 'ios' ? submitBtn.iosSubmitBtn : submitBtn.AndroidSubmitBtn}
			onPress= {onPress}>
                <Text style={{color: white}}> SUBMIT </Text>
            </TouchableOpacity>
		)
}

