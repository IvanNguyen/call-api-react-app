import * as Types from '../constants/ActionTypes'

const innitialState =[];

const itemEditing = (state=innitialState,action) => {
    switch (action.type){
        case Types.EDIT_PRODUCT:
            return action.product // state = action.product
        default: return state;
    }
}
export default itemEditing