import { UPDATE_DATA } from './../actions'
import { updateListData } from './../helpers';

export default function UpdateData (state=[],action){
    switch(action.type){
        case UPDATE_DATA : 
            const updatedArr = updateListData(action.payload, state);
            // console.log(updatedArr)
            return updatedArr;
        default : return state;
    }
}