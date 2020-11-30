import React, { Component } from 'react';
import PropTypes from 'prop-types';

//함수형
/*const MyComponent = (props) => {
	const { name, favoriteNumber, children } = props;
	return (
		<div>
			Hi, i am {name}! <br />
			children is {children}! <br />
			my favoriteNumber is {favoriteNumber}.
		</div>
	);
};*/

class MyComponent extends Component {
	render() {
		const { name, favoriteNumber, children } = this.props; // 비구조화 할당
		return (
			<div>
				안녕하세요, 제 이름은 {name}입니다. <br />
				children is {children}. <br />
				my favoriteNumber is {favoriteNumber}.
			</div>
		);
	}
}

MyComponent.defaultProps = {
	name: 'Zknock',
};

MyComponent.propTypes = {
	name: PropTypes.string,
	favoriteNumber: PropTypes.number.isRequired,
};

export default MyComponent;
