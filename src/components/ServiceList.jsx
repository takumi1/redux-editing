import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {EDIT_SERVICE, GET_DEFAULT, REMOVE_SERVICE} from "../actions/serviceActions";

const getDefault = () => ({
    type: GET_DEFAULT,
    payload: '',
})

const ServiceList = () => {
    const items = useSelector((state) => state.services);
    const dispatch = useDispatch();

    const handleRemove = id => {
        dispatch({
            type: REMOVE_SERVICE,
            payload: {
                id,
            }
        });
        dispatch(getDefault());
    }
    const handleEdit = (id, name, price) => {
        dispatch({
            type: EDIT_SERVICE,
            payload: {
                id,
                name,
                price,
            }
        })
    }

    return (
        <>
            <h1>Service list</h1>
        <ul>
            {
                items.map(item => (
                    <li key={item.id}>
                        {`${item.name} ${item.price}`}

                        <button onClick={()=> handleEdit(item.id, item.name, item.price)}>✎</button>

                    <button className='closeButton' onClick={()=> handleRemove(item.id)}>x</button>

                    </li>
                ))
            }
        </ul>
        </>
    );
};

export default ServiceList;