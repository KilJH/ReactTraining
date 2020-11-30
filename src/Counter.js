import React, { Component } from 'react';

class Counter extends Component {
	/*constructor(props) {
		super(props);
		// state 초기값 설정
		this.state = {
			number: 0,
			fixedNumber: 0,
		};
    }*/

	state = {
		number: 0,
		fixedNumber: 0,
	};

	render() {
		const { number, fixedNumber } = this.state; //
		return (
			<div>
				<h1>{number}</h1>
				<h2>바뀌지 않는 값: {fixedNumber}</h2>
				<button
					//onClick을 통해 버튼이 클릭되었을 때 함수
					onClick={() => {
						/*this.setState((prevState) => {
							return {
								number: prevState.number + 1,
							};
						});
						//위와 아래는 완전히 똑같은 기능을 합니다.
						//아래 코드는 함수에서 바로 객체를 반환한다는 의미
						this.setState((prevState) => ({
							number: prevState.number + 1,
                        }));*/
						this.setState({ number: number + 1 }, () => {
							console.log('방금 setState가 호출되었습니다.');
							console.log(this.state);
						});
					}}
				>
					+1
				</button>
			</div>
		);
	}
}

export default Counter;
