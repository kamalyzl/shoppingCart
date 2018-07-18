import { combineReducers } from 'redux'
import { reducerAllData , reducerList } from './reducer'

const rootReducer = combineReducers({
  reducerAllData,
  reducerList,
})
export default rootReducer

