import React from 'react'
import styled from 'styled-components'

const CardModal = ({ text, columnName, onCloseModal }) => {
	return (
		<ModalDiv>
			<div>
				<h1>{text}</h1>
				<p>
					В колонке: <span>{columnName}</span>
				</p>
			</div>
			<div>
				<img src='' alt='' />
				<div>
					<h4>Описание</h4>
					<textarea name='' id='' cols='65' rows='9'></textarea>
					<div className='buttons'>
						<button className='save_button'>Сохранить</button>
						<button onClick={onCloseModal} className='close_button'>
							X
						</button>
						<button className='help_button'>
							Помощь по форматированию
						</button>
					</div>
				</div>
			</div>
		</ModalDiv>
	)
}

const ModalDiv = styled.div`
	width: 550px;
	height: 380px;
	background-color: white;
	position: absolute;
	top: 26%;
	left: 30%;
	border-radius: 5px;
	padding: 5px 25px;
	color: #43536f;
	background-color: #f4f5f7;
    .buttons{
        margin-top: 40px;
    }
	.save_button {
		width: 134px;
		height: 32px;
		border: none;
		background-color: #0079bf;
		border-radius: 3px;
		color: white;
		margin-right: 12px;
		cursor: pointer;
		font-family: 'Rubik', sans-serif;
	}
	.close_button {
		color: 43536f;
		border: none;
		width: 40px;
		height: 40px;
		font-size: 15px;
		cursor: pointer;
		border-radius: 50%;
	}
	.close_button:hover {
		background-color: #c2c4c6;
	}
	.help_button {
		border: none;
		height: 40px;
		background-color: #eaecf0;
		font-size: 15px;
		width: 250px;
		border-radius: 10px;
		color: #57657e;
        margin-left: 45px;
	}
`

export default CardModal
