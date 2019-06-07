import React, {Component} from 'react'
import {connect} from 'react-router-dom'


class ExploreSearch extends Component {

	state = {
		value: ''
	}

	render() {
		return (
				<div>
					
					<p>Enter Pokemon name or Id</p>
				<input value = {this.state.value} onChange = {(e)=> this.setState({value: e.target.value})} />

				<button onClick = {
					() => {
						if(this.state.value.length ==0) {
							alert('You have to enter pokemon name or ID!')
						} else {
						this.props.history.push(`explore/${this.state.value}`)
						}
					}
				}>
				Search 
				</button>
				</div>
				
			)
	}
}

export default ExploreSearch