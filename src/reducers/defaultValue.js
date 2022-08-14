import React from 'react';
import {EDIT_SERVICE, GET_DEFAULT} from "../actions/serviceActions";

const defaultServiceForm = {
    name: '',
    price: ''
}

export default function defaultValue (state = defaultServiceForm, action) {

switch (action.type) {
    case EDIT_SERVICE:
        return (
            {
                id: action.payload.id,
                name: action.payload.name,
                price: action.payload.price,
                editing: true
            }
        );
    case GET_DEFAULT:
        return defaultServiceForm;
    default:
    return state;
}
};
