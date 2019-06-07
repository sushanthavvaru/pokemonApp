import React, {Component} from 'react'
import {connect} from 'react-redux'

import {getPokeDetails, clearValue} from '../Actions/pokemonApi'

class Details extends Component {

	renderAbility(abs) {
		let list = abs.map(each => {
			return <div style={{listStyleType: "none"}}>{each.ability.name}</div>
		})
		return list
	}


	componentDidMount() {
		this.props.getPokeDetails(this.props.location.state.url)
	}

	componentWillUnmount(){
		this.props.clearValue()
	}
	render() {
		let details = this.props.detail && this.props.detail.details
		if(details == undefined) {
			
			return <p>Come from home page</p>
		}
		return (
				<div>

					<div>
						<h2>Name: {details.name}</h2> 
						<h3>Height: {details.height}</h3>
						<h3>Height: {details.weight}</h3>
					</div>
					<br />
					<div>
						<h3>Abilities</h3>
						{this.renderAbility(details.abilities)}
						
					</div>
					
				</div>
			)
	}
}


const mapStateToProps = (state) => {
	return {detail: state.detail }
}

export default connect(mapStateToProps, {getPokeDetails, clearValue})(Details)