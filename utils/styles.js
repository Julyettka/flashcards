import { white, primaryDark, primaryLight, primary, 
	accent, primaryText, secondaryText, divider } from './colors'

export const SubmitBtn = StyleSheet.create({
    iosSubmitBtn: {
	    backgroundColor: primaryDark,
	    padding: 10,
	    borderRadius: 7,
	    height: 45,
	    marginLeft: 40,
	    marginRight: 40,
	    width: 160
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
	    width: 160
  },
})