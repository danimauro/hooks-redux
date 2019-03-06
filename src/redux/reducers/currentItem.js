import { type as findCurrentItemType } from "../actions/findCurrentItem";
import items from "../../data/items";
const defaultState = {};

function reducer(state = defaultState, { type, payload }){
    switch (type){
        case findCurrentItemType: {
            return items.find(item => item.id === payload)
        }
        default:
            return state
    }

}

export default reducer;