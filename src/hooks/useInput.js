import { useState } from 'react'

const useInput = (regexp) => {
	const [enteredValue, setEnteredValue] = useState('')
	const [enteredValueTouched, setEnteredValueTouched] = useState(false)

	const enteredValueIsValid = enteredValue.trim() !== ''

	const inputIsEmpty = !enteredValueIsValid && enteredValueTouched

	const inputIsInvalid = enteredValueTouched && enteredValueIsValid

	const inputBlurHandler = (e) => {
		setEnteredValueTouched(true)
	}
	const inputChangeHandler = (e) => {
		setEnteredValue(e.target.value)
	}
	return {
		enteredValue,
		inputBlurHandler,
		inputChangeHandler,
		inputIsEmpty,
		enteredValueIsValid,
		setEnteredValue,
		setEnteredValueTouched,
		inputIsInvalid,
	}
}

export default useInput
