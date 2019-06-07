import {combineReducers} from 'redux'
import PokemonReducer from './PokemonReducer'
import LocationReducer from './LocationReducer'
import DetailReducer from './DetailReducer'

const rootReducer = combineReducers({
	pokemon: PokemonReducer,
	location: LocationReducer,
	detail: DetailReducer
})

export default rootReducer