import axios from 'axios'
import {GET_POKEMON, GET_POKEMON_ERROR} from './../Helpers'

export const fetchPokemons = (offset,limit) => (dispatch, getState) => {

	//see if cached
	if(getState().pokemon[offset] == undefined || getState().pokemon[offset].results == undefined ) {
			axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`).then((response) => {
				console.log(response)
				dispatch({
					type: GET_POKEMON,
					payload: response.data,
					offset
				})
			}).catch(() => {
				dispatch({
					type: GET_POKEMON_ERROR,
					offset
				})
			})
		} else {
			dispatch({
				type: 'reload'
			})
		}
}