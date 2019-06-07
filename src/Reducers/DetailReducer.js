import {POK_DETAIL, CLEAR_DETAIL} from '../Helpers'

const LocationReducer = (state = {}, action) => {
	switch(action.type) {
		case POK_DETAIL: 
			return {
				...state,
				details: action.payload		
					}
		case CLEAR_DETAIL:
			return {}
		default: 
			return state
	}
}

export default LocationReducer