import {combineReducers} from 'redux'
import PokemonReducer from './PokemonReducer'

const rootReducer = combineReducers({
	pokemon: PokemonReducer
})

export default rootReducer