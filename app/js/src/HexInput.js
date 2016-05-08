import React from 'react';
import ReactDOM from 'react-dom';

class HexInput extends React.Component {
	constructor() {
		super();

		this.state = {
			colour: '#000'
		}
	}
	changeColour(e) {
		this.setState({
			colour: `#$e.target.value`
		})
	}
	componentWillMount() {
		
	}
	render() {
		return (
			<div className="primary-font text-center">
				<h2>Hexadecimal</h2>
				<input className="text-center" type="text" onChange={this.changeColour.bind(this)} />
			</div>
		);
	}
}

ReactDOM.render(
	<HexInput />,
	document.getElementById('root')
);

export default HexInput;