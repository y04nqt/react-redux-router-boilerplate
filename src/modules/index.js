import { combineReducers } from "redux"

import box from "./BoxModule"
import anotherBox from "./AnotherBoxModule"

export default combineReducers({
    box,
    anotherBox
})
