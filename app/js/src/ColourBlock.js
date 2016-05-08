import React from 'react';
import ReactDOM from 'react-dom';

class ColourBlock extends React.Component {
	constructor() {
		super();

		this.state = {
			colour: '#000';
		}
	}
	changeColour(e) {
		this.setState({
			colour: e.target.value
		})
	}
	render() {
		return (
			<div>

			</div>
		)
	}
}

ReactDOM.render(
	<ColourBlock />,
	document.getElementById('root')
);

export default ColourBlock;  