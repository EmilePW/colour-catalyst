import React from 'react';
import ReactDOM from 'react-dom';

class RGBInput extends React.Component {
	constructor() {
		super();

		this.state = {
			colour: 'rgb(0,0,0)'
		}
	}
	changeColour(e) {
		this.setState({
			colour: `rgb($e.target.value)`
		})
	}
	render() {
		return (
			<div className="primary-font text-center">
				<h2>RGB</h2>
				<input className="text-center" type="text" onChange={this.changeColour.bind(this)} />
			</div>
		);
	}
}

ReactDOM.render(
	<RGBInput />,
	document.getElementById('root')
);

export default RGBInput;