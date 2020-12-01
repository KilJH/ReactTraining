import React, { Component } from 'react';
//import ValidationSample from './VaildationSample';
import ScrollBox from './ScrollBox';

//const App = () => {
class App extends Component {
	render() {
		return (
			<div>
				<ScrollBox
					ref={(ref) => {
						this.scrollBox = ref;
					}}
				/>
				<button onClick={() => this.scrollBox.scrollToBottom()}>
					맨밑으로
				</button>
			</div>
		);
	}
}

export default App;
