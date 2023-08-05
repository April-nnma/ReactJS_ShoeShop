import {combineReducers} from 'redux';
import { shopShoesReducer } from '../ShopShoes/shopShoes/reducer';

export const rootReducer = combineReducers({
    shopShoes:shopShoesReducer
})