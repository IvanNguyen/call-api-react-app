import { combineReducers } from 'redux'
import itemEditing from './itemEditing'
import products from './products'
const appReducer = combineReducers({ // tham so phai la 1 Object
    products,
    itemEditing
});

export default appReducer;