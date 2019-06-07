import React, {Component} from 'react'
import {connect} from 'react-redux'

import {getLoc} from '../Actions/pokemonApi'


class ExploreSearch extends Component {

	state = {
		value: ''
	}

	renderLocations () {
		console.log(this.props.locations)
		if(this.props.locations == undefined) {
			return (<p>{null}</p>)
		} else {
			const lists = this.props.locations.map(loc => {
				loc = loc.split(',')
				return <li style={{listStyleType: "none"}}><a target="_blank" href = {`http://www.google.com/maps/place/${loc[0]},${loc[1]}`} > 
					{`http://www.google.com/maps/place/${loc[0]},${loc[1]}`} </a></li> 
			})

			return(<ul>{lists}</ul>)
		}
	}

	render() {
		return (
				<div>
					
					<p>Enter Pokemon Id</p>
				<input value = {this.state.value} onChange = {(e)=> this.setState({value: e.target.value})} />

				<button onClick = {
					() => {
						if(this.state.value.length ==0) {
							alert('You have to enter ID!')
						} else {
						this.props.getLoc(this.state.value)
						}
					}
				}>
				Search 
				</button>

					{this.renderLocations()}
			
				</div>
				
			)
	}
}

const mapStateToProps = (state) => {
	console.log(state)
	return {locations: state.location.locations}
}

export default connect(mapStateToProps, {getLoc})(ExploreSearch)