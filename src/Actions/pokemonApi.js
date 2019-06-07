import axios from 'axios'
import {GET_POKEMON, GET_POKEMON_ERROR, GET_POKE_LOC, POK_DETAIL, CLEAR_DETAIL} from './../Helpers'

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

export const getLoc = (id) => (dispatch) => {

	
	axios.get(`http://localhost:4000/getLoc/${id}` ,{ headers: 
																	{
																	 'Access-Control-Allow-Origin': '*'}}).then((response) => {
		console.log(response)
		dispatch({
			type:GET_POKE_LOC, 
			payload: response.data.locations
		})
	})
 }

export const getPokeDetails = (url) => (dispatch) => {
	axios.get(url).then(response => {
		dispatch({
			type: POK_DETAIL,
			payload: response.data
		})
	})
}

export const clearValue = () => dispatch => {
	dispatch({
		type: CLEAR_DETAIL
	})
}

