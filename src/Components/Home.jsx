import React, {Component} from 'react'

import './Home.css'
import PokemonList from './PokemonList'
class Home extends Component {

	render() {
		return (
				<div id="home">
					Welcome to Pokemon Tools. Use this tool to learn about your favourite Pokemons

					<div className="home-helper">
						Click on the pokemon to learn more!
						<PokemonList />
					</div>
				</div>
			)
	}
}

export default Home