import { UPDATE_DATA } from './../actions'
import { updateListData } from './../helpers';

export default function UpdateData (state=[],action){
    switch(action.type){
        case UPDATE_DATA : 
            // console.log(state);
            return updateListData(action.payload, state);
        default : return state;
    }
}