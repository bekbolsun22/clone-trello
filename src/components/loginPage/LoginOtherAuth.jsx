import React, { Fragment } from 'react'
import googleIcon from '../../assets/GoogleIcon.svg'
import microsoftIcon from '../../assets/MicrosoftIcon.svg'
import appleIcon from '../../assets/AppleIcon.svg'
import slackIcon from '../../assets/SlackIcon.svg'
import LoginOtherAuthItem from './LoginOtherAuthItem'

const LoginOtherAuth = () => {
	return (
		<Fragment>
			<LoginOtherAuthItem img={googleIcon} text='Войти через Google' />
			<LoginOtherAuthItem
				img={microsoftIcon}
				text='Войти через Microsoft'
			/>
			<LoginOtherAuthItem img={appleIcon} text='Войти через Apple' />
			<LoginOtherAuthItem img={slackIcon} text='Войти через Slack' />
		</Fragment>
	)
}

export default LoginOtherAuth
