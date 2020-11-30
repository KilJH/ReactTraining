import React, { Component, useState } from 'react';

const EventPractice = () => {
	const [form, setForm] = useState({
		username: '',
		message: '',
	});
	const { username, message } = form;
	const onChange = (e) => {
		const nextForm = {
			...form, // 기존 form 값을 복사 후
			[e.target.name]: e.target.value, // 원하는 값을 덮어 씌우기
		};
		setForm(nextForm);
	};

	//const [username, setUsername] = useState('');
	//const [message, setMessage] = useState('');
	//const onChangeUsername = (e) => setUsername(e.target.value);
	//const onChangeMessage = (e) => setMessage(e.target.value);

	const onClick = () => {
		alert(username + ': ' + message);
		setForm({
			username: '',
			message: '',
		});
		//setUsername('');
		//setMessage('');
	};

	const onKeyPress = (e) => {
		if (e.key === 'Enter') {
			onClick();
		}
	};
	return (
		<div>
			<h1>이벤트 연습</h1>
			<input
				type="text"
				name="username"
				placeholder="user name"
				value={username}
				onChange={onChange}
			/>
			<input
				type="text"
				name="message"
				placeholder="input anything"
				value={message}
				onChange={onChange}
				onKeyPress={onKeyPress}
			/>
			<button onClick={onClick}>확인</button>
		</div>
	);
};

export default EventPractice;

/* 클래스형 컴포넌트!!!

import React, { Component } from 'react';

class EventPractice extends Component {
	state = {
		username: '',
		message: '',
	};

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};

	handleClick = () => {
		alert(this.state.username + ': ' + this.state.message);
		this.setState({
			username: '',
			message: '',
		});
	};

	handleKeyPress = (e) => {
		if (e.key === 'Enter') {
			this.handleClick();
		}
	};

	render() {
		return (
			<div>
				<h1>이벤트 연습</h1>
				<input
					type="text"
					name="username"
					placeholder="user name"
					value={this.state.username}
					onChange={this.handleChange}
				/>
				<input
					type="text"
					name="message"
					placeholder="input anything"
					value={this.state.message}
					onChange={this.handleChange}
					onKeyPress={this.handleKeyPress}
				/>
				<button onClick={this.handleClick}>확인</button>
			</div>
		);
	}
}

export default EventPractice;

*/
