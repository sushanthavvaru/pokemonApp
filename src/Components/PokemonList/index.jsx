import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'

import {fetchPokemons} from '../../Actions/pokemonApi'

import './PokemonList.css'

class PokeminList extends Component {

	state = {
		offset: 0,
		limit: 20
	}

	componentDidMount() {
		const {offset, limit} = this.state
		this.props.fetchPokemons(offset, limit)
	}

	handleClick(step) {
		this.setState({offset: this.state.offset + (20*step) }, () => {
			const {offset, limit} = this.state
			this.props.fetchPokemons(offset, limit)
		})
		

	}

	renderList() {
		let offset = this.state.offset
		const pokemonList = this.props.pokemonList
		if(pokemonList[offset] == undefined) {
			return(<p>Loading</p>)
		} else if(pokemonList[offset].results !== undefined) {
			const list = pokemonList[offset].results

			const listRender = list.map((pokemon)=> {
				return <div key = {pokemon.url.slice(-3, -1)}
							className='pokemon-element'
							onClick={()=> {this.props.history.push({pathname:`/details/${pokemon.name}`, state: {url: pokemon.url}})}}
							>{pokemon.name}</div>
			})

			return listRender

		} else {
			return(<p> Oops, Something went wrong </p>)
		}
		
	

	}

	render() {
		return (
				<div className="pokemon">
					<button className='poke-nav prev' disabled = {this.state.offset == 0? true: false }
						onClick = {() => this.handleClick(-1)}>  {'< Previous'} </button>
					<button className='poke-nav next' disabled = {this.props.count -this.state.offset <= 20? true: false }
						onClick = {() => {this.handleClick(+1)}} > {'Next >'} </button>
					<div className="flex-container">
						{this.renderList()}
					</div>
				</div>
				
			)
	}
}


const mapStateToProps = (state, ownProps) => {
	return {pokemonList: state.pokemon, count: state.pokemon.count || 0}

}
export default connect(mapStateToProps, {fetchPokemons})(withRouter(PokeminList))