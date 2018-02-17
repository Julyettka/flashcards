import React from 'react'
import { Text, StyleSheet, TouchableOpacity, Platform } from 'react-native'
import { white, primaryDark } from '../utils/colors'

export default function SubmitBtn ({ onPress }) {
	return (
			<TouchableOpacity
			style={Platform.OS === 'ios' ? styles.iosSubmitBtn : styles.AndroidSubmitBtn}
			onPress= {onPress}>
                <Text style={{color: white}}> SUBMIT </Text>
            </TouchableOpacity>
		)
}

const styles = StyleSheet.create({
    iosSubmitBtn: {
	    backgroundColor: primaryDark,
	    padding: 10,
	    borderRadius: 7,
	    height: 45,
	    marginLeft: 40,
	    marginRight: 40,
  },
  AndroidSubmitBtn: {
	    backgroundColor: primaryDark,
	    padding: 10,
	    paddingLeft: 30,
	    paddingRight: 30,
	    height: 45,
	    borderRadius: 2,
	    justifyContent: 'center',
	    alignItems: 'center',
  },
})