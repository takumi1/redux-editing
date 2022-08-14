import {nanoid} from "nanoid";
import {ADD_SERVICE, REMOVE_SERVICE, UPD_VALUE} from "../actions/serviceActions";

const initialState = [
    {
        id: nanoid(),
        name: 'Замена сенсора',
        price: 1500
    },
    {
        id: nanoid(),
        name: 'Замена модуля',
        price: 2000
    }
]
export default function serviceReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_SERVICE:
            const {name, price} = action.payload
            return [
                ...state,
                {
                    id: nanoid(),
                    name,
                    price: Number(price)
                }
            ];

        case REMOVE_SERVICE:
            const {id} = action.payload
            return state.filter(service => service.id !== id);

        case UPD_VALUE:
            let newState = state.map(i => {
                    if (i.id === action.payload.id) {
                        return {
                            id: action.payload.id,
                            name: action.payload.name,
                            price: action.payload.price
                        }
                    } else {
                        return i;
                    }
                }
            )
            return newState;

        default:
            return state;

    }
}