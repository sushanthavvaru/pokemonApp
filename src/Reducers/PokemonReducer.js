import {GET_POKEMON, GET_POKEMON_ERROR} from '../Helpers'

const PokemonReducer = (state = {}, action) => {

	switch(action.type) {
		case GET_POKEMON: 
			return ({
				...state, 
				count: action.payload.count,
				[action.offset]: {
					results: action.payload.results
			}
		})
		case GET_POKEMON_ERROR: 
			return ({
				...state, 
				[action.offset]: {
					results:undefined
			}
		}) 
		default: 	
			return ({...state})
	}

}

export default PokemonReducer