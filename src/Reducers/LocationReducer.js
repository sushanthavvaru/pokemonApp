import {GET_POKE_LOC} from '../Helpers'

const LocationReducer = (state = {}, action) => {
	switch(action.type) {
		case GET_POKE_LOC: 
			return {
				...state,
				locations: action.payload			}
		default: 
			return state
	}
}

export default LocationReducer