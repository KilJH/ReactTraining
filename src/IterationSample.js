import React, { useState } from 'react';

const IterationSample = () => {
	const [names, setNames] = useState([
		{ id: 1, text: 'Snowman' },
		{ id: 2, text: 'Ice' },
		{ id: 3, text: 'Snow' },
		{ id: 4, text: 'Wind' },
	]);
	const [inputText, setInputText] = useState('');
	const [nextId, setNextId] = useState(5); // 새항목 추가 시 사용할 id

	const onChange = (e) => setInputText(e.target.value);
	const onClick = () => {
		const nextNames = names.concat({
			id: nextId,
			text: inputText,
		});
		setNextId(nextId + 1); //nextId 값에 +1
		setNames(nextNames); //names 배열 업데이트
		setInputText(''); //inputText 초기화
	};
	const onRemove = (id) => {
		const nextNames = names.filter((name) => name.id !== id);
		setNames(nextNames);
	};

	const nameList = names.map((name) => (
		<li key={name.id} onDoubleClick={() => onRemove(name.id)}>
			{name.text}
		</li>
	));
	return (
		<>
			<input value={inputText} onChange={onChange} />
			<button onClick={onClick}>추가</button>
			<ul>{nameList}</ul>
		</>
	);
};

export default IterationSample;
