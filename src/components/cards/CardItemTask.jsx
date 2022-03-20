import React, { Fragment, useState } from 'react'
import ReactDOM from 'react-dom'
import CardModal from './CardModal'

const CardItemTask = ({ text, columnName }) => {
	const [showModal, setShowModal] = useState(false)

	const showModalHandler = () => {
		setShowModal((prevState) => !prevState)
	}
	return (
		<Fragment>
			<li onClick={showModalHandler}>{text}</li>
			{showModal &&
				ReactDOM.createPortal(
					<CardModal
						text={text}
						columnName={columnName}
						onCloseModal={showModalHandler}
					/>,
					document.getElementById('modal'),
				)}
		</Fragment>
	)
}

export default CardItemTask
