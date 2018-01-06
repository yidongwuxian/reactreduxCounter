import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Counter extends Component{
	render(){
		const { value, onIncreaseClick, onDeduceClick } = this.props
		return (
			<div>
			    <button onClick={onDeduceClick}>减</button>
				<span>{value}</span>
				<button onClick={onIncreaseClick}>加</button>
			</div>
		)
	}
}

Counter.PropTypes = {
	value:           PropTypes.number.isRequired,
	onIncreaseClick: PropTypes.func.isRequired,
	onDeduceClick:   PropTypes.func.isRequired
}